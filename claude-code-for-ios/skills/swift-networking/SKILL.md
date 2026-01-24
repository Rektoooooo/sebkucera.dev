---
name: swift-networking
description: Swift networking expert for API communication. Use when working with URLSession, REST APIs, JSON encoding/decoding, async data fetching, network requests, HTTP methods, authentication headers, or API error handling.
---

# Swift Networking

Expert guidance for networking and API communication in Swift.

## URLSession Basics

### Simple GET Request
```swift
func fetchData() async throws -> Data {
    let url = URL(string: "https://api.example.com/items")!
    let (data, response) = try await URLSession.shared.data(from: url)

    guard let httpResponse = response as? HTTPURLResponse,
          httpResponse.statusCode == 200 else {
        throw NetworkError.invalidResponse
    }

    return data
}
```

### GET with Decoding
```swift
struct Item: Codable {
    let id: Int
    let name: String
    let price: Double
}

func fetchItems() async throws -> [Item] {
    let url = URL(string: "https://api.example.com/items")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode([Item].self, from: data)
}
```

### POST Request
```swift
func createItem(_ item: Item) async throws -> Item {
    let url = URL(string: "https://api.example.com/items")!

    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    request.httpBody = try JSONEncoder().encode(item)

    let (data, response) = try await URLSession.shared.data(for: request)

    guard let httpResponse = response as? HTTPURLResponse,
          (200...299).contains(httpResponse.statusCode) else {
        throw NetworkError.invalidResponse
    }

    return try JSONDecoder().decode(Item.self, from: data)
}
```

### PUT/PATCH Request
```swift
func updateItem(_ item: Item) async throws -> Item {
    let url = URL(string: "https://api.example.com/items/\(item.id)")!

    var request = URLRequest(url: url)
    request.httpMethod = "PUT"  // or "PATCH" for partial update
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    request.httpBody = try JSONEncoder().encode(item)

    let (data, _) = try await URLSession.shared.data(for: request)
    return try JSONDecoder().decode(Item.self, from: data)
}
```

### DELETE Request
```swift
func deleteItem(id: Int) async throws {
    let url = URL(string: "https://api.example.com/items/\(id)")!

    var request = URLRequest(url: url)
    request.httpMethod = "DELETE"

    let (_, response) = try await URLSession.shared.data(for: request)

    guard let httpResponse = response as? HTTPURLResponse,
          httpResponse.statusCode == 204 else {
        throw NetworkError.deleteFailed
    }
}
```

## API Client Pattern

### Generic API Client
```swift
class APIClient {
    static let shared = APIClient()

    private let baseURL = "https://api.example.com"
    private let decoder: JSONDecoder = {
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        decoder.dateDecodingStrategy = .iso8601
        return decoder
    }()

    private let encoder: JSONEncoder = {
        let encoder = JSONEncoder()
        encoder.keyEncodingStrategy = .convertToSnakeCase
        encoder.dateEncodingStrategy = .iso8601
        return encoder
    }()

    func request<T: Decodable>(
        endpoint: String,
        method: HTTPMethod = .get,
        body: Encodable? = nil,
        headers: [String: String] = [:]
    ) async throws -> T {
        guard let url = URL(string: baseURL + endpoint) else {
            throw NetworkError.invalidURL
        }

        var request = URLRequest(url: url)
        request.httpMethod = method.rawValue
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        // Add custom headers
        for (key, value) in headers {
            request.setValue(value, forHTTPHeaderField: key)
        }

        // Add body if present
        if let body = body {
            request.httpBody = try encoder.encode(body)
        }

        let (data, response) = try await URLSession.shared.data(for: request)

        guard let httpResponse = response as? HTTPURLResponse else {
            throw NetworkError.invalidResponse
        }

        guard (200...299).contains(httpResponse.statusCode) else {
            throw NetworkError.httpError(httpResponse.statusCode)
        }

        return try decoder.decode(T.self, from: data)
    }
}

enum HTTPMethod: String {
    case get = "GET"
    case post = "POST"
    case put = "PUT"
    case patch = "PATCH"
    case delete = "DELETE"
}
```

### Usage
```swift
// GET
let items: [Item] = try await APIClient.shared.request(endpoint: "/items")

// POST
let newItem: Item = try await APIClient.shared.request(
    endpoint: "/items",
    method: .post,
    body: CreateItemRequest(name: "New Item", price: 9.99)
)

// With auth header
let user: User = try await APIClient.shared.request(
    endpoint: "/me",
    headers: ["Authorization": "Bearer \(token)"]
)
```

## Authentication

### Bearer Token
```swift
class AuthenticatedAPIClient {
    private var token: String?

    func setToken(_ token: String) {
        self.token = token
    }

    func authenticatedRequest<T: Decodable>(endpoint: String) async throws -> T {
        guard let token = token else {
            throw NetworkError.unauthorized
        }

        var request = URLRequest(url: URL(string: baseURL + endpoint)!)
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")

        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(T.self, from: data)
    }
}
```

### OAuth Flow
```swift
struct TokenResponse: Codable {
    let accessToken: String
    let refreshToken: String
    let expiresIn: Int
}

func refreshAccessToken(refreshToken: String) async throws -> TokenResponse {
    let url = URL(string: "https://api.example.com/oauth/token")!

    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")

    let body = "grant_type=refresh_token&refresh_token=\(refreshToken)"
    request.httpBody = body.data(using: .utf8)

    let (data, _) = try await URLSession.shared.data(for: request)
    return try JSONDecoder().decode(TokenResponse.self, from: data)
}
```

## Error Handling

### Network Errors
```swift
enum NetworkError: LocalizedError {
    case invalidURL
    case invalidResponse
    case httpError(Int)
    case decodingError(Error)
    case unauthorized
    case noConnection
    case timeout

    var errorDescription: String? {
        switch self {
        case .invalidURL:
            return "Invalid URL"
        case .invalidResponse:
            return "Invalid server response"
        case .httpError(let code):
            return "HTTP error: \(code)"
        case .decodingError(let error):
            return "Failed to decode: \(error.localizedDescription)"
        case .unauthorized:
            return "Unauthorized access"
        case .noConnection:
            return "No internet connection"
        case .timeout:
            return "Request timed out"
        }
    }
}
```

### API Error Response
```swift
struct APIError: Codable, Error {
    let code: String
    let message: String
}

func handleResponse<T: Decodable>(data: Data, response: URLResponse) throws -> T {
    guard let httpResponse = response as? HTTPURLResponse else {
        throw NetworkError.invalidResponse
    }

    if (200...299).contains(httpResponse.statusCode) {
        return try JSONDecoder().decode(T.self, from: data)
    } else {
        // Try to decode error response
        if let apiError = try? JSONDecoder().decode(APIError.self, from: data) {
            throw apiError
        }
        throw NetworkError.httpError(httpResponse.statusCode)
    }
}
```

## URL Components & Query Parameters

```swift
func searchItems(query: String, page: Int, limit: Int) async throws -> [Item] {
    var components = URLComponents(string: "https://api.example.com/search")!
    components.queryItems = [
        URLQueryItem(name: "q", value: query),
        URLQueryItem(name: "page", value: String(page)),
        URLQueryItem(name: "limit", value: String(limit))
    ]

    guard let url = components.url else {
        throw NetworkError.invalidURL
    }

    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode([Item].self, from: data)
}
```

## File Upload

### Multipart Form Data
```swift
func uploadImage(_ image: UIImage, filename: String) async throws -> UploadResponse {
    let url = URL(string: "https://api.example.com/upload")!
    let boundary = UUID().uuidString

    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("multipart/form-data; boundary=\(boundary)", forHTTPHeaderField: "Content-Type")

    var body = Data()

    // Add image data
    if let imageData = image.jpegData(compressionQuality: 0.8) {
        body.append("--\(boundary)\r\n".data(using: .utf8)!)
        body.append("Content-Disposition: form-data; name=\"file\"; filename=\"\(filename)\"\r\n".data(using: .utf8)!)
        body.append("Content-Type: image/jpeg\r\n\r\n".data(using: .utf8)!)
        body.append(imageData)
        body.append("\r\n".data(using: .utf8)!)
    }

    body.append("--\(boundary)--\r\n".data(using: .utf8)!)
    request.httpBody = body

    let (data, _) = try await URLSession.shared.data(for: request)
    return try JSONDecoder().decode(UploadResponse.self, from: data)
}
```

## Download with Progress

```swift
class DownloadManager: NSObject, URLSessionDownloadDelegate {
    var progressHandler: ((Double) -> Void)?
    var completionHandler: ((URL?, Error?) -> Void)?

    private lazy var session: URLSession = {
        URLSession(configuration: .default, delegate: self, delegateQueue: nil)
    }()

    func download(from url: URL) {
        let task = session.downloadTask(with: url)
        task.resume()
    }

    func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask,
                    didWriteData bytesWritten: Int64, totalBytesWritten: Int64,
                    totalBytesExpectedToWrite: Int64) {
        let progress = Double(totalBytesWritten) / Double(totalBytesExpectedToWrite)
        DispatchQueue.main.async {
            self.progressHandler?(progress)
        }
    }

    func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask,
                    didFinishDownloadingTo location: URL) {
        DispatchQueue.main.async {
            self.completionHandler?(location, nil)
        }
    }
}
```

## Network Monitoring

```swift
import Network

class NetworkMonitor: ObservableObject {
    static let shared = NetworkMonitor()

    private let monitor = NWPathMonitor()
    private let queue = DispatchQueue(label: "NetworkMonitor")

    @Published var isConnected = true
    @Published var connectionType: ConnectionType = .unknown

    enum ConnectionType {
        case wifi, cellular, ethernet, unknown
    }

    init() {
        monitor.pathUpdateHandler = { [weak self] path in
            DispatchQueue.main.async {
                self?.isConnected = path.status == .satisfied
                self?.connectionType = self?.getConnectionType(path) ?? .unknown
            }
        }
        monitor.start(queue: queue)
    }

    private func getConnectionType(_ path: NWPath) -> ConnectionType {
        if path.usesInterfaceType(.wifi) { return .wifi }
        if path.usesInterfaceType(.cellular) { return .cellular }
        if path.usesInterfaceType(.wiredEthernet) { return .ethernet }
        return .unknown
    }
}

// Usage in SwiftUI
struct ContentView: View {
    @StateObject private var network = NetworkMonitor.shared

    var body: some View {
        VStack {
            if !network.isConnected {
                Text("No Internet Connection")
                    .foregroundStyle(.red)
            }
        }
    }
}
```

## Caching

### URLCache Configuration
```swift
let cache = URLCache(
    memoryCapacity: 50 * 1024 * 1024,   // 50 MB memory
    diskCapacity: 100 * 1024 * 1024     // 100 MB disk
)

let config = URLSessionConfiguration.default
config.urlCache = cache
config.requestCachePolicy = .returnCacheDataElseLoad

let session = URLSession(configuration: config)
```

## Apple Documentation

- [URLSession](https://developer.apple.com/documentation/foundation/urlsession)
- [Fetching Website Data](https://developer.apple.com/documentation/foundation/url_loading_system/fetching_website_data_into_memory)
- [JSONDecoder](https://developer.apple.com/documentation/foundation/jsondecoder)
- [Network Framework](https://developer.apple.com/documentation/network)
