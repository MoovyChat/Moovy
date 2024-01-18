//
//  ViewController.swift
//  HeartLink
//
//  Created by Chandra Kishore Danduri on 12/11/23.
//
import UIKit
import WatchConnectivity

class ViewController: UIViewController {
    let healthKitManager = HealthKitManager()
    @IBOutlet weak var heartRateLabel: UILabel!
    var session:WCSession?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("View Did Load")
        configureWatchKitSession()
        startHeartRateStreaming()
    }
    
    func configureWatchKitSession(){
        if(WCSession.isSupported()){
            session = WCSession.default
            session?.delegate = self
            session?.activate()
        }
    }
    
    func startHeartRateStreaming(){
        healthKitManager.authorizeHealthKit { [weak self] (authorized, error) in
            guard authorized else {
                let baseMessage = "HealthKit Authorization Failed"
                if let error = error {
                    print("\(baseMessage). Reason: \(error.localizedDescription)")
                } else {
                    print(baseMessage)
                }
                return
            }
            print("HealthKit Successfully Authorized.")

            
            self?.healthKitManager.startHeartRateStreaming { [weak self] (heartRate, error) in
                  DispatchQueue.main.async {
                      if let heartRate = heartRate {
                          self?.heartRateLabel.text = "Heart Rate: \(heartRate) bpm"
                      } else if error != nil {
                          // Handle the error here
                          self?.heartRateLabel.text = "Error fetching heart rate"
                      }
                  }
              }
        }
    }
}

extension ViewController : WCSessionDelegate {
    func sessionDidBecomeInactive(_ session: WCSession) {
        <#code#>
    }
    
    func sessionDidDeactivate(_ session: WCSession) {
        <#code#>
    }
    
    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
        if let error = error {
            print("WC SESSION ACTIVATION FAILED WITH ERROR: \(error.localizedDescription)")
            return
        }
        
        if WCSession.default.isReachable {
            print("Reachable")
        }else{
            print("Not Reachable")
        }
    }
    
    func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
        print("Received Message")
        DispatchQueue.main.async {
            
        }
    }
    
    func sessionReachabilityDidChange(_ session: WCSession) {
        print(session.isReachable)
        var isReachable = false
        if WCSession.default.activationState == .activated {
            isReachable = WCSession.default.isReachable
        }
        print(isReachable)
    }
}
