//
//  HeartRateManager.swift
//  Beat Cast
//
//  Created by Chandra Kishore Danduri on 12/26/23.
//

import Foundation
import WatchConnectivity

class HeartRateManager: NSObject, ObservableObject, WCSessionDelegate {
    @Published var heartRate: Double = 0

    override init() {
        super.init()
        if WCSession.isSupported() {
            let session = WCSession.default
            session.delegate = self
            session.activate()
        }
    }

    // Required for conformance to WCSessionDelegate
    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
        // Handle activation completion
        if let error = error {
            // Handle any errors that occurred during activation.
            print("WCSession activation failed with error: \(error.localizedDescription)")
            return
        }

        // Handle successful activation
        switch activationState {
        case .activated:
            print("WCSession activated.")
        case .inactive:
            print("WCSession is inactive.")
        case .notActivated:
            print("WCSession not activated.")
        @unknown default:
            print("Unknown activation state.")
        }
    }
    
    func sessionDidBecomeInactive(_ session: WCSession) {
        // Handle session becoming inactive (e.g., when the user switches watches)
        print("WCSession did become inactive.")
    }
    
    func sessionDidDeactivate(_ session: WCSession) {
        // Handle deactivation and reactivate if necessary
        print("WCSession did deactivate.")
        session.activate() // You may need to reactivate if supporting multiple watches
    }
    
    func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
        // Handle receiving a message from the watchOS app
        if let heartRate = message["heartRate"] as? Double {
            DispatchQueue.main.async {
                // Update the published heart rate with the new value.
                self.heartRate = heartRate
            }
        }
    }
    
    // Add other WCSessionDelegate methods if necessary...
}


