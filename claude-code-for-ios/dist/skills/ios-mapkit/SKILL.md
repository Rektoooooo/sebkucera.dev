---
name: ios-mapkit
description: MapKit and CoreLocation expert for maps and location. Use when working with MapKit, maps, annotations, routes, geocoding, CoreLocation, user location tracking, or geofencing.
---

# iOS MapKit

Expert guidance for implementing maps and location features in iOS apps.

## Setup

### Info.plist Keys
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to show nearby places.</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>We need your location for navigation and notifications.</string>
```

### Location Manager
```swift
import CoreLocation

@MainActor
class LocationManager: NSObject, ObservableObject, CLLocationManagerDelegate {
    private let manager = CLLocationManager()

    @Published var location: CLLocation?
    @Published var authorizationStatus: CLAuthorizationStatus = .notDetermined

    override init() {
        super.init()
        manager.delegate = self
        manager.desiredAccuracy = kCLLocationAccuracyBest
    }

    func requestPermission() {
        manager.requestWhenInUseAuthorization()
    }

    func requestAlwaysPermission() {
        manager.requestAlwaysAuthorization()
    }

    func startUpdating() {
        manager.startUpdatingLocation()
    }

    func stopUpdating() {
        manager.stopUpdatingLocation()
    }

    // MARK: - Delegate

    nonisolated func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        Task { @MainActor in
            location = locations.last
        }
    }

    nonisolated func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
        Task { @MainActor in
            authorizationStatus = manager.authorizationStatus
        }
    }
}
```

## SwiftUI Map (iOS 17+)

### Basic Map
```swift
import MapKit

struct MapView: View {
    @State private var position: MapCameraPosition = .automatic

    var body: some View {
        Map(position: $position) {
            // Content
        }
    }
}
```

### Map with Markers
```swift
struct Location: Identifiable {
    let id = UUID()
    let name: String
    let coordinate: CLLocationCoordinate2D
}

struct MapWithMarkersView: View {
    let locations: [Location] = [
        Location(name: "Apple Park", coordinate: CLLocationCoordinate2D(latitude: 37.3349, longitude: -122.0090)),
        Location(name: "Infinite Loop", coordinate: CLLocationCoordinate2D(latitude: 37.3318, longitude: -122.0312))
    ]

    var body: some View {
        Map {
            ForEach(locations) { location in
                Marker(location.name, coordinate: location.coordinate)
            }
        }
    }
}
```

### Map with Annotations
```swift
struct AnnotatedMapView: View {
    let locations: [Location]

    var body: some View {
        Map {
            ForEach(locations) { location in
                Annotation(location.name, coordinate: location.coordinate) {
                    VStack {
                        Image(systemName: "mappin.circle.fill")
                            .font(.title)
                            .foregroundStyle(.red)
                        Text(location.name)
                            .font(.caption)
                    }
                }
            }
        }
    }
}
```

### User Location
```swift
struct UserLocationMapView: View {
    @StateObject private var locationManager = LocationManager()
    @State private var position: MapCameraPosition = .userLocation(fallback: .automatic)

    var body: some View {
        Map(position: $position) {
            UserAnnotation()
        }
        .mapControls {
            MapUserLocationButton()
            MapCompass()
            MapScaleView()
        }
        .onAppear {
            locationManager.requestPermission()
        }
    }
}
```

### Map Style
```swift
struct StyledMapView: View {
    @State private var mapStyle: MapStyle = .standard

    var body: some View {
        Map {
            // Content
        }
        .mapStyle(mapStyle)
        .toolbar {
            Menu("Style") {
                Button("Standard") { mapStyle = .standard }
                Button("Satellite") { mapStyle = .imagery }
                Button("Hybrid") { mapStyle = .hybrid }
            }
        }
    }
}
```

## Routes and Directions

### Calculate Route
```swift
func calculateRoute(from source: CLLocationCoordinate2D, to destination: CLLocationCoordinate2D) async throws -> MKRoute {
    let request = MKDirections.Request()
    request.source = MKMapItem(placemark: MKPlacemark(coordinate: source))
    request.destination = MKMapItem(placemark: MKPlacemark(coordinate: destination))
    request.transportType = .automobile

    let directions = MKDirections(request: request)
    let response = try await directions.calculate()

    guard let route = response.routes.first else {
        throw MapError.noRouteFound
    }

    return route
}
```

### Display Route
```swift
struct RouteMapView: View {
    let route: MKRoute?

    var body: some View {
        Map {
            if let route = route {
                MapPolyline(route.polyline)
                    .stroke(.blue, lineWidth: 5)
            }
        }
    }
}
```

### Route Details
```swift
func formatRoute(_ route: MKRoute) -> String {
    let distance = Measurement(value: route.distance, unit: UnitLength.meters)
    let formattedDistance = distance.converted(to: .miles).formatted()

    let time = Duration.seconds(route.expectedTravelTime)
    let formattedTime = time.formatted(.units(allowed: [.hours, .minutes]))

    return "\(formattedDistance) - \(formattedTime)"
}
```

## Geocoding

### Forward Geocoding (Address to Coordinates)
```swift
func geocode(address: String) async throws -> CLLocationCoordinate2D {
    let geocoder = CLGeocoder()
    let placemarks = try await geocoder.geocodeAddressString(address)

    guard let location = placemarks.first?.location else {
        throw MapError.locationNotFound
    }

    return location.coordinate
}
```

### Reverse Geocoding (Coordinates to Address)
```swift
func reverseGeocode(coordinate: CLLocationCoordinate2D) async throws -> String {
    let geocoder = CLGeocoder()
    let location = CLLocation(latitude: coordinate.latitude, longitude: coordinate.longitude)
    let placemarks = try await geocoder.reverseGeocodeLocation(location)

    guard let placemark = placemarks.first else {
        throw MapError.addressNotFound
    }

    return [
        placemark.name,
        placemark.locality,
        placemark.administrativeArea,
        placemark.country
    ]
    .compactMap { $0 }
    .joined(separator: ", ")
}
```

## Search

### Search for Places
```swift
func searchPlaces(query: String, region: MKCoordinateRegion) async throws -> [MKMapItem] {
    let request = MKLocalSearch.Request()
    request.naturalLanguageQuery = query
    request.region = region

    let search = MKLocalSearch(request: request)
    let response = try await search.start()

    return response.mapItems
}
```

### Search Completer
```swift
class SearchCompleter: NSObject, ObservableObject, MKLocalSearchCompleterDelegate {
    private let completer = MKLocalSearchCompleter()

    @Published var results: [MKLocalSearchCompletion] = []
    @Published var queryFragment = "" {
        didSet {
            completer.queryFragment = queryFragment
        }
    }

    override init() {
        super.init()
        completer.delegate = self
        completer.resultTypes = [.address, .pointOfInterest]
    }

    func completerDidUpdateResults(_ completer: MKLocalSearchCompleter) {
        results = completer.results
    }

    func getMapItem(for completion: MKLocalSearchCompletion) async throws -> MKMapItem? {
        let request = MKLocalSearch.Request(completion: completion)
        let search = MKLocalSearch(request: request)
        let response = try await search.start()
        return response.mapItems.first
    }
}
```

### SwiftUI Search
```swift
struct SearchableMapView: View {
    @StateObject private var completer = SearchCompleter()
    @State private var searchResults: [MKMapItem] = []

    var body: some View {
        Map {
            ForEach(searchResults, id: \.self) { item in
                if let coordinate = item.placemark.coordinate as CLLocationCoordinate2D? {
                    Marker(item.name ?? "Unknown", coordinate: coordinate)
                }
            }
        }
        .searchable(text: $completer.queryFragment)
        .searchSuggestions {
            ForEach(completer.results, id: \.self) { result in
                Button {
                    Task {
                        if let item = try? await completer.getMapItem(for: result) {
                            searchResults = [item]
                        }
                    }
                } label: {
                    VStack(alignment: .leading) {
                        Text(result.title)
                        Text(result.subtitle)
                            .font(.caption)
                            .foregroundStyle(.secondary)
                    }
                }
            }
        }
    }
}
```

## Geofencing

### Monitor Region
```swift
class GeofenceManager: NSObject, CLLocationManagerDelegate {
    private let manager = CLLocationManager()

    func startMonitoring(coordinate: CLLocationCoordinate2D, radius: Double, identifier: String) {
        let region = CLCircularRegion(
            center: coordinate,
            radius: radius,
            identifier: identifier
        )
        region.notifyOnEntry = true
        region.notifyOnExit = true

        manager.startMonitoring(for: region)
    }

    func stopMonitoring(identifier: String) {
        for region in manager.monitoredRegions {
            if region.identifier == identifier {
                manager.stopMonitoring(for: region)
            }
        }
    }

    // MARK: - Delegate

    func locationManager(_ manager: CLLocationManager, didEnterRegion region: CLRegion) {
        print("Entered region: \(region.identifier)")
        // Trigger notification or action
    }

    func locationManager(_ manager: CLLocationManager, didExitRegion region: CLRegion) {
        print("Exited region: \(region.identifier)")
    }
}
```

## Look Around (iOS 16+)

```swift
struct LookAroundView: View {
    let coordinate: CLLocationCoordinate2D
    @State private var lookAroundScene: MKLookAroundScene?

    var body: some View {
        Group {
            if let scene = lookAroundScene {
                LookAroundPreview(scene: scene)
            } else {
                ContentUnavailableView("Look Around not available", systemImage: "eye.slash")
            }
        }
        .task {
            let request = MKLookAroundSceneRequest(coordinate: coordinate)
            lookAroundScene = try? await request.scene
        }
    }
}
```

## Error Handling

```swift
enum MapError: LocalizedError {
    case locationNotFound
    case addressNotFound
    case noRouteFound
    case permissionDenied

    var errorDescription: String? {
        switch self {
        case .locationNotFound: return "Location not found"
        case .addressNotFound: return "Address not found"
        case .noRouteFound: return "No route available"
        case .permissionDenied: return "Location permission denied"
        }
    }
}
```

## Apple Documentation

- [MapKit](https://developer.apple.com/documentation/mapkit)
- [CoreLocation](https://developer.apple.com/documentation/corelocation)
- [Map (SwiftUI)](https://developer.apple.com/documentation/mapkit/map)
- [MKLocalSearch](https://developer.apple.com/documentation/mapkit/mklocalsearch)
- [Geocoding](https://developer.apple.com/documentation/corelocation/clgeocoder)
- [Region Monitoring](https://developer.apple.com/documentation/corelocation/monitoring_the_user_s_proximity_to_geographic_regions)
