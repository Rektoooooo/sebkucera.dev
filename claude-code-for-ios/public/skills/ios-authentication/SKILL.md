---
name: ios-authentication
description: iOS authentication expert for user sign-in. Use when working with Sign in with Apple, biometric authentication (Face ID, Touch ID), Keychain credentials, or password autofill.
---

# iOS Authentication

Expert guidance for implementing authentication in iOS apps.

## Sign in with Apple

### Setup
1. Add "Sign in with Apple" capability in Xcode
2. Configure in App Store Connect

### Sign in with Apple Button
```swift
import AuthenticationServices

struct SignInView: View {
    @Environment(\.colorScheme) var colorScheme

    var body: some View {
        SignInWithAppleButton(.signIn) { request in
            request.requestedScopes = [.fullName, .email]
        } onCompletion: { result in
            handleSignIn(result)
        }
        .signInWithAppleButtonStyle(colorScheme == .dark ? .white : .black)
        .frame(height: 50)
        .padding()
    }

    private func handleSignIn(_ result: Result<ASAuthorization, Error>) {
        switch result {
        case .success(let authorization):
            if let appleIDCredential = authorization.credential as? ASAuthorizationAppleIDCredential {
                let userID = appleIDCredential.user
                let email = appleIDCredential.email
                let fullName = appleIDCredential.fullName

                // First sign-in: email and name available
                // Subsequent sign-ins: only userID

                // Store userID securely
                saveUserID(userID)

                // Send identity token to your server
                if let identityToken = appleIDCredential.identityToken,
                   let tokenString = String(data: identityToken, encoding: .utf8) {
                    authenticateWithServer(token: tokenString)
                }
            }

        case .failure(let error):
            print("Sign in failed: \(error)")
        }
    }
}
```

### Check Credential State
```swift
func checkAppleIDCredentialState(userID: String) async {
    let provider = ASAuthorizationAppleIDProvider()

    do {
        let state = try await provider.credentialState(forUserID: userID)

        switch state {
        case .authorized:
            // User is still authorized
            break
        case .revoked:
            // User revoked authorization - sign out
            signOut()
        case .notFound:
            // Credential not found - show sign in
            break
        case .transferred:
            // User transferred to different team
            break
        @unknown default:
            break
        }
    } catch {
        print("Failed to check credential state: \(error)")
    }
}
```

### Listen for Revocation
```swift
class AuthManager: ObservableObject {
    init() {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(handleCredentialRevoked),
            name: ASAuthorizationAppleIDProvider.credentialRevokedNotification,
            object: nil
        )
    }

    @objc private func handleCredentialRevoked() {
        signOut()
    }
}
```

## Biometric Authentication

### Face ID / Touch ID
```swift
import LocalAuthentication

class BiometricAuthManager: ObservableObject {
    @Published var isAuthenticated = false
    @Published var biometricType: BiometricType = .none

    enum BiometricType {
        case none, touchID, faceID, opticID
    }

    init() {
        biometricType = getBiometricType()
    }

    func getBiometricType() -> BiometricType {
        let context = LAContext()
        var error: NSError?

        guard context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) else {
            return .none
        }

        switch context.biometryType {
        case .touchID:
            return .touchID
        case .faceID:
            return .faceID
        case .opticID:
            return .opticID
        case .none:
            return .none
        @unknown default:
            return .none
        }
    }

    func authenticate() async -> Bool {
        let context = LAContext()
        var error: NSError?

        guard context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) else {
            return false
        }

        do {
            let success = try await context.evaluatePolicy(
                .deviceOwnerAuthenticationWithBiometrics,
                localizedReason: "Authenticate to access your account"
            )
            await MainActor.run {
                isAuthenticated = success
            }
            return success
        } catch {
            print("Authentication failed: \(error)")
            return false
        }
    }

    // Fallback to passcode
    func authenticateWithPasscode() async -> Bool {
        let context = LAContext()

        do {
            let success = try await context.evaluatePolicy(
                .deviceOwnerAuthentication,
                localizedReason: "Authenticate to access your account"
            )
            return success
        } catch {
            return false
        }
    }
}
```

### Info.plist
```xml
<key>NSFaceIDUsageDescription</key>
<string>We use Face ID to securely authenticate you.</string>
```

### SwiftUI Integration
```swift
struct SecureView: View {
    @StateObject private var authManager = BiometricAuthManager()
    @State private var showContent = false

    var body: some View {
        Group {
            if showContent {
                ContentView()
            } else {
                VStack(spacing: 20) {
                    Image(systemName: authManager.biometricType == .faceID ? "faceid" : "touchid")
                        .font(.system(size: 64))

                    Button("Unlock") {
                        Task {
                            showContent = await authManager.authenticate()
                        }
                    }
                    .buttonStyle(.borderedProminent)
                }
            }
        }
        .task {
            showContent = await authManager.authenticate()
        }
    }
}
```

## Keychain Credentials

### Password Autofill Setup
```swift
// In your text fields
TextField("Email", text: $email)
    .textContentType(.username)
    .keyboardType(.emailAddress)

SecureField("Password", text: $password)
    .textContentType(.password)
```

### Save Credentials to Keychain
```swift
import Security

class CredentialManager {
    static let shared = CredentialManager()

    func saveCredentials(username: String, password: String, server: String) throws {
        let passwordData = password.data(using: .utf8)!

        let query: [String: Any] = [
            kSecClass as String: kSecClassInternetPassword,
            kSecAttrAccount as String: username,
            kSecAttrServer as String: server,
            kSecValueData as String: passwordData
        ]

        // Delete existing
        SecItemDelete(query as CFDictionary)

        // Add new
        let status = SecItemAdd(query as CFDictionary, nil)
        guard status == errSecSuccess else {
            throw KeychainError.saveFailed(status)
        }
    }

    func getCredentials(server: String) throws -> (username: String, password: String)? {
        let query: [String: Any] = [
            kSecClass as String: kSecClassInternetPassword,
            kSecAttrServer as String: server,
            kSecReturnAttributes as String: true,
            kSecReturnData as String: true,
            kSecMatchLimit as String: kSecMatchLimitOne
        ]

        var result: CFTypeRef?
        let status = SecItemCopyMatching(query as CFDictionary, &result)

        guard status == errSecSuccess,
              let item = result as? [String: Any],
              let username = item[kSecAttrAccount as String] as? String,
              let passwordData = item[kSecValueData as String] as? Data,
              let password = String(data: passwordData, encoding: .utf8) else {
            return nil
        }

        return (username, password)
    }

    func deleteCredentials(server: String) throws {
        let query: [String: Any] = [
            kSecClass as String: kSecClassInternetPassword,
            kSecAttrServer as String: server
        ]

        let status = SecItemDelete(query as CFDictionary)
        guard status == errSecSuccess || status == errSecItemNotFound else {
            throw KeychainError.deleteFailed(status)
        }
    }
}

enum KeychainError: Error {
    case saveFailed(OSStatus)
    case deleteFailed(OSStatus)
}
```

## Passkeys (iOS 16+)

### Passkey Registration
```swift
import AuthenticationServices

class PasskeyManager: NSObject, ASAuthorizationControllerDelegate, ASAuthorizationControllerPresentationContextProviding {

    func registerPasskey(username: String, challenge: Data, userID: Data) {
        let provider = ASAuthorizationPlatformPublicKeyCredentialProvider(relyingPartyIdentifier: "example.com")

        let request = provider.createCredentialRegistrationRequest(
            challenge: challenge,
            name: username,
            userID: userID
        )

        let controller = ASAuthorizationController(authorizationRequests: [request])
        controller.delegate = self
        controller.presentationContextProvider = self
        controller.performRequests()
    }

    func signInWithPasskey(challenge: Data) {
        let provider = ASAuthorizationPlatformPublicKeyCredentialProvider(relyingPartyIdentifier: "example.com")

        let request = provider.createCredentialAssertionRequest(challenge: challenge)

        let controller = ASAuthorizationController(authorizationRequests: [request])
        controller.delegate = self
        controller.presentationContextProvider = self
        controller.performRequests()
    }

    // MARK: - Delegate

    func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
        if let credential = authorization.credential as? ASAuthorizationPlatformPublicKeyCredentialRegistration {
            // Registration successful
            let credentialID = credential.credentialID
            let attestationObject = credential.rawAttestationObject
            // Send to server
        } else if let credential = authorization.credential as? ASAuthorizationPlatformPublicKeyCredentialAssertion {
            // Sign in successful
            let signature = credential.signature
            let authenticatorData = credential.rawAuthenticatorData
            // Verify on server
        }
    }

    func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
        print("Authorization failed: \(error)")
    }

    func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor {
        // Return your app's window
        UIApplication.shared.connectedScenes
            .compactMap { $0 as? UIWindowScene }
            .flatMap { $0.windows }
            .first { $0.isKeyWindow }!
    }
}
```

## OAuth / Social Login

### Generic OAuth Flow
```swift
import AuthenticationServices

class OAuthManager: NSObject, ASWebAuthenticationPresentationContextProviding {

    func signIn(provider: OAuthProvider) async throws -> String {
        let authURL = provider.authorizationURL
        let callbackScheme = "myapp"

        return try await withCheckedThrowingContinuation { continuation in
            let session = ASWebAuthenticationSession(
                url: authURL,
                callbackURLScheme: callbackScheme
            ) { callbackURL, error in
                if let error = error {
                    continuation.resume(throwing: error)
                    return
                }

                guard let url = callbackURL,
                      let components = URLComponents(url: url, resolvingAgainstBaseURL: false),
                      let code = components.queryItems?.first(where: { $0.name == "code" })?.value else {
                    continuation.resume(throwing: OAuthError.noAuthCode)
                    return
                }

                continuation.resume(returning: code)
            }

            session.presentationContextProvider = self
            session.prefersEphemeralWebBrowserSession = true
            session.start()
        }
    }

    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        UIApplication.shared.connectedScenes
            .compactMap { $0 as? UIWindowScene }
            .flatMap { $0.windows }
            .first { $0.isKeyWindow }!
    }
}

enum OAuthError: Error {
    case noAuthCode
}
```

## Apple Documentation

- [Sign in with Apple](https://developer.apple.com/documentation/sign_in_with_apple)
- [LocalAuthentication](https://developer.apple.com/documentation/localauthentication)
- [AuthenticationServices](https://developer.apple.com/documentation/authenticationservices)
- [Keychain Services](https://developer.apple.com/documentation/security/keychain_services)
- [Passkeys](https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication)
