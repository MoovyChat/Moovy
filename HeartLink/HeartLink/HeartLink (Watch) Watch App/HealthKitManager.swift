import HealthKit

class HealthKitManager {
    let healthStore = HKHealthStore()
    var heartRateUpdateHandler: ((Double) -> Void)?

    func requestAuthorization(completion: @escaping (Bool, Error?) -> Void) {
        guard HKHealthStore.isHealthDataAvailable(),
              let heartRateType = HKObjectType.quantityType(forIdentifier: .heartRate) else {
            completion(false, NSError(domain: "HealthKitManager", code: 2, userInfo: [NSLocalizedDescriptionKey: "HealthKit is not available in this device"]))
            return
        }

        let healthKitTypesToRead: Set<HKObjectType> = [heartRateType]

        healthStore.requestAuthorization(toShare: [], read: healthKitTypesToRead) { success, error in
            completion(success, error)
        }
    }

    func startHeartRateStreaming() {
        guard let heartRateType = HKObjectType.quantityType(forIdentifier: .heartRate) else {
            return
        }

        startWorkout()

        let query = HKAnchoredObjectQuery(type: heartRateType, predicate: nil, anchor: nil, limit: HKObjectQueryNoLimit) { _, samples, _, _, _ in
            // Handle the initial heart rate samples here
        }

        query.updateHandler = { [weak self] _, samples, _, _, _ in
            guard let self = self, let samples = samples as? [HKQuantitySample],
                  let sample = samples.last else { return }
            
            let heartRateValue = sample.quantity.doubleValue(for: HKUnit(from: "count/min"))
            DispatchQueue.main.async {
                self.heartRateUpdateHandler?(heartRateValue)
            }
        }
        
        healthStore.execute(query)
    }

    func startWorkout() {
        let workoutConfiguration = HKWorkoutConfiguration()
        workoutConfiguration.activityType = .other

        do {
            workoutSession = try HKWorkoutSession(healthStore: healthStore, configuration: workoutConfiguration)
            workoutSession?.startActivity(with: Date())
        } catch {
            // Handle any errors here
        }
    }

    func stopWorkout() {
        workoutSession?.end()
    }
    
    var workoutSession: HKWorkoutSession?
}

