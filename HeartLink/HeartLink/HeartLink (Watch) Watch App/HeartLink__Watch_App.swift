//
//  HeartLink__Watch_App.swift
//  HeartLink (Watch) Watch App
//
//  Created by Chandra Kishore Danduri on 12/21/23.
//

import SwiftUI

@main
struct HeartLink_Watch_WatchApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView(viewModel: HeartRateViewModel()) // Create an instance here
        }
    }
}

