//
//  HeartRateViewModel.swift
//  BeatCast for Apple Watch Watch App
//
//  Created by Chandra Kishore Danduri on 12/26/23.
//

import Foundation

class HeartRateViewModel: ObservableObject {
    @Published var heartRate: Double = 0
    @Published var pulseEffect: CGFloat = 1.0
    var pulseDuration: Double { 60 / heartRate }
    
    private var healthKitManager = HealthKitManager()

    func requestAuthorization() {
        healthKitManager.requestAuthorization { [weak self] authorized, error in
            if authorized {
                self?.startStreaming()
            } else {
                // Handle the error or the case where the user did not authorize HealthKit
            }
        }
    }
    
    func startStreaming() {
        healthKitManager.startHeartRateStreaming()
        healthKitManager.heartRateUpdateHandler = { [weak self] newHeartRate in
            self?.heartRate = newHeartRate
        }
    }
}
