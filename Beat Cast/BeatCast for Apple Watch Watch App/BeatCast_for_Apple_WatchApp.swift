//
//  BeatCast_for_Apple_WatchApp.swift
//  BeatCast for Apple Watch Watch App
//
//  Created by Chandra Kishore Danduri on 12/26/23.
//

import SwiftUI

@main
struct BeatCast_for_Apple_Watch_Watch_AppApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView(viewModel: HeartRateViewModel())
        }
    }
}
