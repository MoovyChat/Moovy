import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { StyledAV } from './audioVisualizer.styles';
import { hexToRgb } from '../../Utils/utilities';
import { useAppSelector } from '../../redux/hooks';

type props = {
  fftSize: number;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
};
const AudioVisualizer: React.FC<props> = ({ fftSize, canvasRef }) => {
  const nodes = useAppSelector((state) => state.audioNodes);
  const knobColor = useAppSelector((state) => state.misc.accentColor);
  const [showHover, setShowHover] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const drawSineWave = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;
    if (!nodes.analyser) return;
    const dataArray = new Uint8Array(nodes.analyser.frequencyBinCount);
    requestAnimationFrame(drawSineWave);
    nodes.analyser.getByteTimeDomainData(dataArray);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.fillStyle = 'rgba(14, 14, 14, 0)';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = knobColor;
    canvasCtx.beginPath();
    let sliceWidth = (canvas.width * 1.0) / nodes.analyser.frequencyBinCount;
    let x = 0;
    for (let i = 0; i < nodes.analyser.frequencyBinCount; i++) {
      let v = dataArray[i] / 128.0;
      let y = (v * canvas.height) / 2;
      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }, [knobColor, nodes.analyser, canvasRef]);

  const drawFrequencyBars = useCallback(() => {
    const canvas = canvasRef.current;
    const rgb = hexToRgb(knobColor);
    let analyser = nodes.analyser;
    if (!canvas) return;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;
    if (!analyser) return;
    analyser.fftSize = fftSize;
    const bufferLengthAlt = analyser.frequencyBinCount;
    const dataArrayAlt = new Uint8Array(bufferLengthAlt);
    requestAnimationFrame(drawFrequencyBars);
    analyser.getByteFrequencyData(dataArrayAlt);
    const barWidth = (canvas.width / bufferLengthAlt) * (fftSize / 100);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    let barHeight;
    let x = 0;
    for (let i = 0; i < bufferLengthAlt; i++) {
      barHeight = dataArrayAlt[i];
      if (rgb)
        canvasCtx.fillStyle = `rgb(${barHeight + rgb.r},${rgb?.g},${rgb?.b})`;
      canvasCtx.fillRect(
        x,
        canvas.height - barHeight / 2,
        barWidth,
        barHeight / 2
      );
      x += barWidth + 1;
    }
  }, [knobColor, nodes.analyser, canvasRef]);

  useEffect(() => {
    if (toggle) {
      drawSineWave();
    } else drawFrequencyBars();
  }, [toggle, drawSineWave, drawFrequencyBars]);

  const mouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowHover(() => true);
  };
  const mouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowHover(() => false);
  };
  const canvasClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setToggle(() => !toggle);
  };
  return (
    <StyledAV
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={canvasClickHandler}>
      <div className='canvas-hover'>
        {showHover && (
          <div className='ch-text-container'>
            <div className='ch-text'>click to toggle</div>
          </div>
        )}
        <canvas ref={canvasRef} style={{ height: '140px', width: '100%' }} />
      </div>
    </StyledAV>
  );
};

export default AudioVisualizer;
