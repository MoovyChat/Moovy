//
//  HealthKitManager.swift
//  HeartLink
//
//  Created by Chandra Kishore Danduri on 12/11/23.
//

import Foundation
import HealthKit

class HealthKitManager {
    let healthStore = HKHealthStore()

    // Request authorization to access HealthKit data
    func authorizeHealthKit(completion: @escaping (Bool, Error?) -> Void) {
        guard HKHealthStore.isHealthDataAvailable() else {
            completion(false, NSError(domain: "com.yourapp", code: 2, userInfo: [NSLocalizedDescriptionKey: "HealthKit is not available on this device"]))
            return
        }

        guard let heartRateType = HKObjectType.quantityType(forIdentifier: .heartRate) else {
            completion(false, NSError(domain: "com.moovychat", code: 2, userInfo: [NSLocalizedDescriptionKey: "Heart Rate data type is not available"]))
            return
        }

        healthStore.requestAuthorization(toShare: [], read: [heartRateType]) { success, error in
            completion(success, error)
        }
    }
    

    // Function to get the most recent heart rate data
    func getLatestHeartRate(completion: @escaping (Double?, Error?) -> Void) {
        guard let heartRateType = HKObjectType.quantityType(forIdentifier: .heartRate) else {
            completion(nil, NSError(domain: "com.moovychat", code: 2, userInfo: [NSLocalizedDescriptionKey: "Heart Rate data type is not available"]))
            return
        }

        let sortDescriptor = NSSortDescriptor(key: HKSampleSortIdentifierEndDate, ascending: false)

        let query = HKSampleQuery(sampleType: heartRateType, predicate: nil, limit: 1, sortDescriptors: [sortDescriptor]) { _, samples, error in
            guard error == nil, let latestSample = samples?.first as? HKQuantitySample else {
                completion(nil, error)
                return
            }

            let heartRate = latestSample.quantity.doubleValue(for: HKUnit(from: "count/min"))
            completion(heartRate, nil)
        }

        healthStore.execute(query)
    }
    
    func startHeartRateStreaming(queryResultHandler: @escaping (_ heartRate: Double?, _ error: Error?) -> Void) {
            guard let heartRateType = HKObjectType.quantityType(forIdentifier: .heartRate) else {
                queryResultHandler(nil, NSError(domain: "com.moovychat", code: 2, userInfo: [NSLocalizedDescriptionKey: "Heart Rate data type is not available"]))
                return
            }
            
            let query = HKAnchoredObjectQuery(type: heartRateType,
                                              predicate: nil,
                                              anchor: nil,
                                              limit: HKObjectQueryNoLimit) { query, samples, deletedObjects, newAnchor, error in
                
                if let newSamples = samples as? [HKQuantitySample] {
                    // Process the results.
                    self.processHeartRateSamples(samples: newSamples, completion: queryResultHandler)
                }
            }
            
            query.updateHandler = { query, samples, deletedObjects, newAnchor, error in
                if let newSamples = samples as? [HKQuantitySample] {
                    // Process the results.
                    self.processHeartRateSamples(samples: newSamples, completion: queryResultHandler)
                }
            }
            
            healthStore.execute(query)
        }
    
    private func processHeartRateSamples(samples: [HKQuantitySample], completion: (_ heartRate: Double?, _ error: Error?) -> Void) {
            guard let sample = samples.first else {
                completion(nil, nil)
                return
            }
            
            let heartRate = sample.quantity.doubleValue(for: HKUnit(from: "count/min"))
            completion(heartRate, nil)
        }
}
