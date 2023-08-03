import React, { useState, useEffect, useRef } from "react";

interface GiphyImageProps {
  message: {
    title: string;
    images: {
      original: {
        mp4: string;
        frames: string;
        url: string;
      };
      fixed_height_still: {
        url: string;
      };
    };
  };
  onLoad: () => void;
}

const GiphyImage: React.FC<GiphyImageProps> = ({ message, onLoad }) => {
  const [displayVideo, setDisplayVideo] = useState(true);
  const [loopCount, setLoopCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (loopCount >= 3) {
      setDisplayVideo(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
    }
  }, [loopCount]);

  useEffect(() => {
    if (displayVideo && videoRef.current) {
      setLoopCount(0); // reset loopCount when switching to video
      videoRef.current.play();
    }
  }, [displayVideo]);

  const handleVideoLoad = () => {
    onLoad();
  };

  const handleVideoEnd = () => {
    setLoopCount((prevLoopCount) => prevLoopCount + 1);
    if (loopCount < 2 && videoRef.current) {
      // Will execute for 0 and 1 which makes it loop 3 times
      videoRef.current.play();
    }
  };

  const handleImageClick = () => {
    setLoopCount(0);
    setDisplayVideo(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        className={`gif-msg video ${displayVideo ? "" : "hide"}`}
        src={message.images.original.mp4}
        onLoadedData={handleVideoLoad}
        onEnded={handleVideoEnd}
      />
      <div className={`gif-msg image ${displayVideo ? "hide" : ""}`}>
        <img
          src={message.images.fixed_height_still.url}
          alt={message.title}
          onLoad={onLoad}
          onClick={handleImageClick}
        />
        <div
          onClick={handleImageClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          GIF
        </div>
      </div>
    </div>
  );
};

export default GiphyImage;
