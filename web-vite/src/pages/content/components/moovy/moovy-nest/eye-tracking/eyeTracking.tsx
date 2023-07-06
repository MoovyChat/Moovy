import React, { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import * as blazeface from "@tensorflow-models/blazeface";
import { StyledEyeTracking } from "./eyeTracking.styles";

const EyeTracking: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let model: blazeface.BlazeFaceModel;

  const loadModel = async () => {
    console.log("Loading model...");
    try {
      model = await blazeface.load();
      console.log("Model loaded");
    } catch (error) {
      console.log("Error loading model:", error);
    }
  };

  const getVideo = async () => {
    console.log("Getting video...");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            console.log("Video ready");
            videoRef.current.srcObject = stream;
            videoRef.current.muted = true;
            videoRef.current.onloadedmetadata = () => videoRef.current?.play();
          }
        })
        .catch((err) => {
          console.log("An error occurred: " + err);
        });
    }
  };
  const drawEyes = (
    context: CanvasRenderingContext2D,
    eyes: Array<[number, number]>
  ) => {
    eyes.forEach((eye) => {
      context.beginPath();
      context.arc(eye[0], eye[1], 2, 0, 2 * Math.PI); // draw a circle at the eye position
      context.fillStyle = "red";
      context.fill();
    });
  };

  useEffect(() => {
    const start = async () => {
      await tf.setBackend("webgl");
      await loadModel();
      getVideo();
    };
    start();
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    const runModel = async () => {
      console.log("Running model...");
      if (
        canvasRef.current &&
        videoRef.current &&
        videoRef.current.readyState === 4 &&
        model
      ) {
        const returnTensors = false;
        const predictions = await model.estimateFaces(
          videoRef.current,
          returnTensors
        );

        const context = canvasRef.current.getContext("2d");
        if (context) {
          context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          predictions.forEach((prediction) => {
            const eyes = [
              prediction.landmarks[1], // left eye
              prediction.landmarks[0], // right eye
            ];
            drawEyes(context, eyes);
          });
        }
      }
      requestAnimationFrame(runModel);
    };

    runModel();
  }, []);

  return (
    <StyledEyeTracking>
      <video
        ref={videoRef}
        style={{ display: "none" }}
        width="640"
        height="480"
      />
      <canvas ref={canvasRef} width="640" height="480" />
    </StyledEyeTracking>
  );
};

export default EyeTracking;
