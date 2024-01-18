//
//  ContentView.swift
//  Beat Cast
//
//  Created by Chandra Kishore Danduri on 12/23/23.
//

import SwiftUI

struct ContentView: View {
    @ObservedObject var heartRateManager = HeartRateManager()

    var body: some View {
        ZStack {
            Image(systemName: "heart.fill")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .foregroundColor(Color.red)
                .scaleEffect(0.8)
                // Updated to the new SwiftUI 3 animation API
                .animation(
                    Animation.easeInOut(duration: 0.6)
                        .repeatForever(autoreverses: true),
                    value: heartRateManager.heartRate
                )
            
            // Update the text with the received heart rate
            Text("\(Int(heartRateManager.heartRate)) bpm")
                .font(.title2)
                .fontWeight(.bold)
                .foregroundColor(Color.white)
                .multilineTextAlignment(.center)
                .lineLimit(1)
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}


