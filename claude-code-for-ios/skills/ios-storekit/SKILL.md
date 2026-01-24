---
name: ios-storekit
description: StoreKit expert for in-app purchases and subscriptions. Use when working with StoreKit 2, subscriptions, consumables, non-consumables, receipt validation, or App Store transactions.
---

# iOS StoreKit

Expert guidance for implementing in-app purchases with StoreKit 2.

## Setup

### Configure Products in App Store Connect
1. Create app in App Store Connect
2. Add in-app purchases (Subscriptions, Consumables, Non-Consumables)
3. Configure pricing and availability

### StoreKit Configuration (Testing)
Create `Configuration.storekit` file for local testing.

### Store Manager
```swift
import StoreKit

@MainActor
class StoreManager: ObservableObject {
    @Published var products: [Product] = []
    @Published var purchasedProductIDs: Set<String> = []
    @Published var isLoading = false

    private let productIDs: Set<String> = [
        "com.app.premium.monthly",
        "com.app.premium.yearly",
        "com.app.coins.100",
        "com.app.removeads"
    ]

    private var updateListenerTask: Task<Void, Error>?

    init() {
        updateListenerTask = listenForTransactions()
        Task {
            await loadProducts()
            await updatePurchasedProducts()
        }
    }

    deinit {
        updateListenerTask?.cancel()
    }
}
```

## Loading Products

### Fetch Products
```swift
func loadProducts() async {
    isLoading = true
    defer { isLoading = false }

    do {
        products = try await Product.products(for: productIDs)
            .sorted { $0.price < $1.price }
    } catch {
        print("Failed to load products: \(error)")
    }
}
```

### Product Types
```swift
extension Product {
    var isSubscription: Bool {
        type == .autoRenewable
    }

    var isConsumable: Bool {
        type == .consumable
    }

    var isNonConsumable: Bool {
        type == .nonConsumable
    }
}
```

## Purchases

### Purchase Product
```swift
func purchase(_ product: Product) async throws -> Transaction? {
    let result = try await product.purchase()

    switch result {
    case .success(let verification):
        let transaction = try checkVerified(verification)
        await updatePurchasedProducts()
        await transaction.finish()
        return transaction

    case .userCancelled:
        return nil

    case .pending:
        return nil

    @unknown default:
        return nil
    }
}

private func checkVerified<T>(_ result: VerificationResult<T>) throws -> T {
    switch result {
    case .unverified:
        throw StoreError.verificationFailed
    case .verified(let safe):
        return safe
    }
}
```

### Transaction Listener
```swift
func listenForTransactions() -> Task<Void, Error> {
    Task.detached {
        for await result in Transaction.updates {
            do {
                let transaction = try await self.checkVerified(result)
                await self.updatePurchasedProducts()
                await transaction.finish()
            } catch {
                print("Transaction failed verification: \(error)")
            }
        }
    }
}
```

## Subscriptions

### Check Subscription Status
```swift
func updatePurchasedProducts() async {
    var purchased: Set<String> = []

    for await result in Transaction.currentEntitlements {
        do {
            let transaction = try checkVerified(result)

            if transaction.revocationDate == nil {
                purchased.insert(transaction.productID)
            }
        } catch {
            print("Failed to verify transaction: \(error)")
        }
    }

    await MainActor.run {
        self.purchasedProductIDs = purchased
    }
}
```

### Subscription Info
```swift
func getSubscriptionStatus(for groupID: String) async throws -> Product.SubscriptionInfo.Status? {
    guard let product = products.first(where: { $0.subscription?.subscriptionGroupID == groupID }) else {
        return nil
    }

    return try await product.subscription?.status.first
}

func isSubscriptionActive(groupID: String) async -> Bool {
    do {
        guard let status = try await getSubscriptionStatus(for: groupID) else {
            return false
        }

        switch status.state {
        case .subscribed, .inGracePeriod:
            return true
        default:
            return false
        }
    } catch {
        return false
    }
}
```

### Subscription Period Display
```swift
extension Product.SubscriptionPeriod {
    var displayName: String {
        switch unit {
        case .day:
            return value == 7 ? "Weekly" : "\(value) Day\(value > 1 ? "s" : "")"
        case .week:
            return "\(value) Week\(value > 1 ? "s" : "")"
        case .month:
            return value == 1 ? "Monthly" : "\(value) Months"
        case .year:
            return value == 1 ? "Yearly" : "\(value) Years"
        @unknown default:
            return "Unknown"
        }
    }
}
```

## Restore Purchases

```swift
func restorePurchases() async throws {
    try await AppStore.sync()
    await updatePurchasedProducts()
}
```

## SwiftUI Views

### Product List View
```swift
struct StoreView: View {
    @StateObject private var store = StoreManager()

    var body: some View {
        List {
            Section("Subscriptions") {
                ForEach(store.products.filter { $0.isSubscription }) { product in
                    ProductRow(product: product, isPurchased: store.purchasedProductIDs.contains(product.id)) {
                        Task {
                            try await store.purchase(product)
                        }
                    }
                }
            }

            Section("One-Time Purchases") {
                ForEach(store.products.filter { !$0.isSubscription }) { product in
                    ProductRow(product: product, isPurchased: store.purchasedProductIDs.contains(product.id)) {
                        Task {
                            try await store.purchase(product)
                        }
                    }
                }
            }

            Section {
                Button("Restore Purchases") {
                    Task {
                        try await store.restorePurchases()
                    }
                }
            }
        }
    }
}

struct ProductRow: View {
    let product: Product
    let isPurchased: Bool
    let action: () -> Void

    var body: some View {
        HStack {
            VStack(alignment: .leading) {
                Text(product.displayName)
                    .font(.headline)
                Text(product.description)
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }

            Spacer()

            if isPurchased {
                Image(systemName: "checkmark.circle.fill")
                    .foregroundStyle(.green)
            } else {
                Button(product.displayPrice, action: action)
                    .buttonStyle(.borderedProminent)
            }
        }
    }
}
```

### Subscription Store View (iOS 17+)
```swift
import StoreKit

struct PremiumView: View {
    var body: some View {
        SubscriptionStoreView(groupID: "your_group_id") {
            VStack {
                Image(systemName: "star.fill")
                    .font(.largeTitle)
                Text("Go Premium")
                    .font(.title)
            }
        }
        .subscriptionStoreButtonLabel(.multiline)
        .subscriptionStorePickerItemBackground(.ultraThinMaterial)
    }
}
```

## Offer Codes & Promotions

### Redeem Offer Code
```swift
func redeemOfferCode() async {
    // Opens App Store offer code redemption sheet
    try? await AppStore.presentOfferCodeRedeemSheet()
}
```

### Promotional Offers
```swift
func purchaseWithOffer(_ product: Product, offerID: String) async throws -> Transaction? {
    guard let offer = product.subscription?.promotionalOffers.first(where: { $0.id == offerID }) else {
        return nil
    }

    // Generate signature on your server
    let signatureData = try await generateSignature(for: offer)

    let result = try await product.purchase(options: [
        .promotionalOffer(
            offerID: offer.id,
            keyID: signatureData.keyID,
            nonce: signatureData.nonce,
            signature: signatureData.signature,
            timestamp: signatureData.timestamp
        )
    ])

    // Handle result...
}
```

## Receipt Validation

### App Store Server API
```swift
// Server-side validation recommended
// Use App Store Server API for subscription status
func validateReceipt() async throws -> Bool {
    guard let appStoreReceiptURL = Bundle.main.appStoreReceiptURL,
          FileManager.default.fileExists(atPath: appStoreReceiptURL.path) else {
        return false
    }

    let receiptData = try Data(contentsOf: appStoreReceiptURL)
    let receiptString = receiptData.base64EncodedString()

    // Send to your server for validation
    return try await validateOnServer(receipt: receiptString)
}
```

## Error Handling

```swift
enum StoreError: LocalizedError {
    case verificationFailed
    case purchaseFailed
    case productNotFound

    var errorDescription: String? {
        switch self {
        case .verificationFailed: return "Transaction verification failed"
        case .purchaseFailed: return "Purchase could not be completed"
        case .productNotFound: return "Product not found"
        }
    }
}
```

## Testing

### StoreKit Testing in Xcode
```swift
#if DEBUG
func clearPurchaseHistory() async {
    // Only works in sandbox/testing
    for await result in Transaction.currentEntitlements {
        guard case .verified(let transaction) = result else { continue }
        await transaction.finish()
    }
}
#endif
```

## Apple Documentation

- [StoreKit](https://developer.apple.com/documentation/storekit)
- [In-App Purchase](https://developer.apple.com/documentation/storekit/in-app_purchase)
- [Product](https://developer.apple.com/documentation/storekit/product)
- [Transaction](https://developer.apple.com/documentation/storekit/transaction)
- [SubscriptionStoreView](https://developer.apple.com/documentation/storekit/subscriptionstoreview)
