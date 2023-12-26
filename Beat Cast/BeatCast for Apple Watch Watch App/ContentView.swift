//
//  ContentView.swift
//  BeatCast for Apple Watch Watch App
//
//  Created by Chandra Kishore Danduri on 12/26/23.
//

import SwiftUI

struct ContentView: View {
    @State private var animate = false
    private let animation = Animation.easeInOut(duration: 1).repeatForever(autoreverses: false)
    
    @StateObject var viewModel = HeartRateViewModel()
    var body: some View {
        ZStack {
            // Ripple effect layer
            // Note: Implementing a ripple effect will require a custom animation

            // Pulsing heart layer
            HeartView(heartRate: viewModel.heartRate)
                .padding()
                .scaleEffect(viewModel.pulseEffect)
                .animation(
                    Animation.easeInOut(duration: viewModel.pulseDuration)
                        .repeatForever(autoreverses: true),
                    value: viewModel.pulseEffect
                )
        }
        .onAppear {
            viewModel.requestAuthorization()
        }
    }
}

struct RippleEffect: View {
    @State private var scale: CGFloat = 0
    
    var body: some View {
        Circle()
            .stroke(Color.red, lineWidth: 2)
            .scaleEffect(scale)
            .animation(
                Animation.easeOut(duration: 2)
                    .repeatForever(autoreverses: false)
                    .delay(0.5),
                value: scale
            )
            .onAppear {
                self.scale = 1
            }
    }
}

struct HeartView: View {
    let heartRate: Double
    @State private var isPulsing = false
    
    var body: some View {
        Image(systemName: "heart.fill")
            .resizable()
            .aspectRatio(contentMode: .fit)
            .foregroundColor(self.heartColor)
            .scaleEffect(self.isPulsing ? 0.8 : 0.7)
            .animation(
                Animation.easeInOut(duration: self.pulseDuration)
                    .repeatForever(autoreverses: true),
                value: self.isPulsing
            )
            .onAppear {
                self.isPulsing.toggle()
            }
            .overlay(
                           Text("\(Int(heartRate))")
                               .font(.title)
                               .foregroundColor(.white)
                       )
    }
    
    private var pulseDuration: Double {
        return max(60 / heartRate, 0.5) // Ensure a minimum duration to avoid overly fast animations
    }

    private var heartColor: Color {
        switch heartRate {
        case ...60: return .green
        case 61...100: return .yellow
        default: return .red
        }
    }
}

#Preview {
    ContentView()
}
