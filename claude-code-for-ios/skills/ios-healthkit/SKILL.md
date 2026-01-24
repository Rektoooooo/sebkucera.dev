---
name: ios-healthkit
description: HealthKit expert for health and fitness data. Use when working with health data, workouts, step counts, heart rate, sleep analysis, permissions, or syncing with Apple Health.
---

# iOS HealthKit

Expert guidance for integrating HealthKit in iOS apps.

## Setup

### Enable HealthKit
1. Add HealthKit capability in Xcode
2. Add to Info.plist:
```xml
<key>NSHealthShareUsageDescription</key>
<string>We need access to read your health data to track your progress.</string>
<key>NSHealthUpdateUsageDescription</key>
<string>We need access to write workout data to Apple Health.</string>
```

### HealthKit Manager
```swift
import HealthKit

@MainActor
class HealthKitManager: ObservableObject {
    let healthStore = HKHealthStore()

    @Published var isAuthorized = false
    @Published var stepCount: Double = 0
    @Published var heartRate: Double = 0

    // Types to read
    private let readTypes: Set<HKObjectType> = [
        HKObjectType.quantityType(forIdentifier: .stepCount)!,
        HKObjectType.quantityType(forIdentifier: .heartRate)!,
        HKObjectType.quantityType(forIdentifier: .activeEnergyBurned)!,
        HKObjectType.quantityType(forIdentifier: .bodyMass)!,
        HKObjectType.quantityType(forIdentifier: .height)!,
        HKObjectType.categoryType(forIdentifier: .sleepAnalysis)!,
        HKObjectType.workoutType()
    ]

    // Types to write
    private let writeTypes: Set<HKSampleType> = [
        HKObjectType.quantityType(forIdentifier: .bodyMass)!,
        HKObjectType.quantityType(forIdentifier: .height)!,
        HKObjectType.workoutType()
    ]

    func requestAuthorization() async throws {
        guard HKHealthStore.isHealthDataAvailable() else {
            throw HealthKitError.notAvailable
        }

        try await healthStore.requestAuthorization(toShare: writeTypes, read: readTypes)
        isAuthorized = true
    }
}

enum HealthKitError: LocalizedError {
    case notAvailable
    case notAuthorized
    case dataNotFound

    var errorDescription: String? {
        switch self {
        case .notAvailable: return "HealthKit is not available on this device"
        case .notAuthorized: return "HealthKit access not authorized"
        case .dataNotFound: return "No health data found"
        }
    }
}
```

## Reading Data

### Step Count
```swift
func fetchTodayStepCount() async throws -> Double {
    let stepType = HKQuantityType(.stepCount)
    let startOfDay = Calendar.current.startOfDay(for: Date())
    let predicate = HKQuery.predicateForSamples(withStart: startOfDay, end: Date())

    let steps = try await withCheckedThrowingContinuation { (continuation: CheckedContinuation<Double, Error>) in
        let query = HKStatisticsQuery(
            quantityType: stepType,
            quantitySamplePredicate: predicate,
            options: .cumulativeSum
        ) { _, result, error in
            if let error = error {
                continuation.resume(throwing: error)
                return
            }

            let sum = result?.sumQuantity()?.doubleValue(for: .count()) ?? 0
            continuation.resume(returning: sum)
        }

        healthStore.execute(query)
    }

    return steps
}
```

### Heart Rate
```swift
func fetchLatestHeartRate() async throws -> Double {
    let heartRateType = HKQuantityType(.heartRate)
    let sortDescriptor = NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: false)

    return try await withCheckedThrowingContinuation { continuation in
        let query = HKSampleQuery(
            sampleType: heartRateType,
            predicate: nil,
            limit: 1,
            sortDescriptors: [sortDescriptor]
        ) { _, samples, error in
            if let error = error {
                continuation.resume(throwing: error)
                return
            }

            guard let sample = samples?.first as? HKQuantitySample else {
                continuation.resume(throwing: HealthKitError.dataNotFound)
                return
            }

            let heartRate = sample.quantity.doubleValue(for: HKUnit.count().unitDivided(by: .minute()))
            continuation.resume(returning: heartRate)
        }

        healthStore.execute(query)
    }
}
```

### Body Mass (Weight)
```swift
func fetchWeightHistory(days: Int = 30) async throws -> [(date: Date, weight: Double)] {
    let weightType = HKQuantityType(.bodyMass)
    let startDate = Calendar.current.date(byAdding: .day, value: -days, to: Date())!
    let predicate = HKQuery.predicateForSamples(withStart: startDate, end: Date())
    let sortDescriptor = NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: true)

    return try await withCheckedThrowingContinuation { continuation in
        let query = HKSampleQuery(
            sampleType: weightType,
            predicate: predicate,
            limit: HKObjectQueryNoLimit,
            sortDescriptors: [sortDescriptor]
        ) { _, samples, error in
            if let error = error {
                continuation.resume(throwing: error)
                return
            }

            let weights = (samples as? [HKQuantitySample])?.map { sample in
                (date: sample.startDate,
                 weight: sample.quantity.doubleValue(for: .gramUnit(with: .kilo)))
            } ?? []

            continuation.resume(returning: weights)
        }

        healthStore.execute(query)
    }
}
```

### Sleep Analysis
```swift
func fetchSleepData(for date: Date) async throws -> TimeInterval {
    let sleepType = HKCategoryType(.sleepAnalysis)
    let startOfDay = Calendar.current.startOfDay(for: date)
    let endOfDay = Calendar.current.date(byAdding: .day, value: 1, to: startOfDay)!
    let predicate = HKQuery.predicateForSamples(withStart: startOfDay, end: endOfDay)

    return try await withCheckedThrowingContinuation { continuation in
        let query = HKSampleQuery(
            sampleType: sleepType,
            predicate: predicate,
            limit: HKObjectQueryNoLimit,
            sortDescriptors: nil
        ) { _, samples, error in
            if let error = error {
                continuation.resume(throwing: error)
                return
            }

            let sleepSamples = samples as? [HKCategorySample] ?? []
            let totalSleep = sleepSamples
                .filter { $0.value == HKCategoryValueSleepAnalysis.asleepUnspecified.rawValue ||
                          $0.value == HKCategoryValueSleepAnalysis.asleepCore.rawValue ||
                          $0.value == HKCategoryValueSleepAnalysis.asleepDeep.rawValue ||
                          $0.value == HKCategoryValueSleepAnalysis.asleepREM.rawValue }
                .reduce(0.0) { $0 + $1.endDate.timeIntervalSince($1.startDate) }

            continuation.resume(returning: totalSleep)
        }

        healthStore.execute(query)
    }
}
```

## Writing Data

### Save Weight
```swift
func saveWeight(_ weightKg: Double) async throws {
    let weightType = HKQuantityType(.bodyMass)
    let quantity = HKQuantity(unit: .gramUnit(with: .kilo), doubleValue: weightKg)
    let sample = HKQuantitySample(
        type: weightType,
        quantity: quantity,
        start: Date(),
        end: Date()
    )

    try await healthStore.save(sample)
}
```

### Save Height
```swift
func saveHeight(_ heightCm: Double) async throws {
    let heightType = HKQuantityType(.height)
    let quantity = HKQuantity(unit: .meterUnit(with: .centi), doubleValue: heightCm)
    let sample = HKQuantitySample(
        type: heightType,
        quantity: quantity,
        start: Date(),
        end: Date()
    )

    try await healthStore.save(sample)
}
```

## Workouts

### Save Workout
```swift
func saveWorkout(
    type: HKWorkoutActivityType,
    start: Date,
    end: Date,
    energyBurned: Double?,
    distance: Double?
) async throws -> HKWorkout {

    var samples: [HKSample] = []

    // Energy burned
    if let energy = energyBurned {
        let energyType = HKQuantityType(.activeEnergyBurned)
        let energyQuantity = HKQuantity(unit: .kilocalorie(), doubleValue: energy)
        let energySample = HKQuantitySample(
            type: energyType,
            quantity: energyQuantity,
            start: start,
            end: end
        )
        samples.append(energySample)
    }

    // Distance
    if let dist = distance {
        let distanceType = HKQuantityType(.distanceWalkingRunning)
        let distanceQuantity = HKQuantity(unit: .meter(), doubleValue: dist)
        let distanceSample = HKQuantitySample(
            type: distanceType,
            quantity: distanceQuantity,
            start: start,
            end: end
        )
        samples.append(distanceSample)
    }

    let workout = HKWorkout(
        activityType: type,
        start: start,
        end: end,
        workoutEvents: nil,
        totalEnergyBurned: energyBurned.map { HKQuantity(unit: .kilocalorie(), doubleValue: $0) },
        totalDistance: distance.map { HKQuantity(unit: .meter(), doubleValue: $0) },
        metadata: nil
    )

    try await healthStore.save(workout)

    if !samples.isEmpty {
        try await healthStore.addSamples(samples, to: workout)
    }

    return workout
}
```

### Fetch Workouts
```swift
func fetchWorkouts(days: Int = 30) async throws -> [HKWorkout] {
    let startDate = Calendar.current.date(byAdding: .day, value: -days, to: Date())!
    let predicate = HKQuery.predicateForSamples(withStart: startDate, end: Date())
    let sortDescriptor = NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: false)

    return try await withCheckedThrowingContinuation { continuation in
        let query = HKSampleQuery(
            sampleType: .workoutType(),
            predicate: predicate,
            limit: HKObjectQueryNoLimit,
            sortDescriptors: [sortDescriptor]
        ) { _, samples, error in
            if let error = error {
                continuation.resume(throwing: error)
                return
            }

            let workouts = samples as? [HKWorkout] ?? []
            continuation.resume(returning: workouts)
        }

        healthStore.execute(query)
    }
}
```

## Background Delivery

### Enable Background Updates
```swift
func enableBackgroundDelivery() async throws {
    let stepType = HKQuantityType(.stepCount)

    try await healthStore.enableBackgroundDelivery(for: stepType, frequency: .hourly)
}

func setupObserverQuery() {
    let stepType = HKQuantityType(.stepCount)

    let query = HKObserverQuery(sampleType: stepType, predicate: nil) { [weak self] query, completionHandler, error in
        if error == nil {
            Task {
                await self?.handleStepCountUpdate()
            }
        }
        completionHandler()
    }

    healthStore.execute(query)
}

private func handleStepCountUpdate() async {
    // Fetch and process new data
    if let steps = try? await fetchTodayStepCount() {
        await MainActor.run {
            self.stepCount = steps
        }
    }
}
```

## Statistics Collection

### Weekly Statistics
```swift
func fetchWeeklySteps() async throws -> [Date: Double] {
    let stepType = HKQuantityType(.stepCount)
    let calendar = Calendar.current
    let endDate = Date()
    let startDate = calendar.date(byAdding: .day, value: -7, to: endDate)!

    var interval = DateComponents()
    interval.day = 1

    let anchorDate = calendar.startOfDay(for: startDate)

    return try await withCheckedThrowingContinuation { continuation in
        let query = HKStatisticsCollectionQuery(
            quantityType: stepType,
            quantitySamplePredicate: nil,
            options: .cumulativeSum,
            anchorDate: anchorDate,
            intervalComponents: interval
        )

        query.initialResultsHandler = { query, results, error in
            if let error = error {
                continuation.resume(throwing: error)
                return
            }

            var stepsByDay: [Date: Double] = [:]

            results?.enumerateStatistics(from: startDate, to: endDate) { statistics, _ in
                let steps = statistics.sumQuantity()?.doubleValue(for: .count()) ?? 0
                stepsByDay[statistics.startDate] = steps
            }

            continuation.resume(returning: stepsByDay)
        }

        healthStore.execute(query)
    }
}
```

## SwiftUI Integration

### HealthKit View
```swift
struct HealthDashboardView: View {
    @StateObject private var healthKit = HealthKitManager()

    var body: some View {
        List {
            Section("Today") {
                LabeledContent("Steps", value: "\(Int(healthKit.stepCount))")
                LabeledContent("Heart Rate", value: "\(Int(healthKit.heartRate)) BPM")
            }
        }
        .task {
            do {
                try await healthKit.requestAuthorization()
                healthKit.stepCount = try await healthKit.fetchTodayStepCount()
                healthKit.heartRate = try await healthKit.fetchLatestHeartRate()
            } catch {
                print("HealthKit error: \(error)")
            }
        }
    }
}
```

## Apple Documentation

- [HealthKit](https://developer.apple.com/documentation/healthkit)
- [Setting Up HealthKit](https://developer.apple.com/documentation/healthkit/setting_up_healthkit)
- [Reading Data](https://developer.apple.com/documentation/healthkit/reading_data_from_healthkit)
- [Saving Data](https://developer.apple.com/documentation/healthkit/saving_data_to_healthkit)
- [Workouts](https://developer.apple.com/documentation/healthkit/workouts_and_activity_rings)
