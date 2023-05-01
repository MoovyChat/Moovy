// export function wait(delayInMS: number) {
//   return new Promise((resolve) => setTimeout(resolve, delayInMS));
// }

// export function log(msg: any, logElement: HTMLElement) {
//   logElement.innerHTML += `${msg}\n`;
// }

// export const getStreamForWindow = (): Promise<MediaStream> => {
//   const mediaDevices = navigator.mediaDevices as any;
//   return new Promise((resolve) => {
//     const res: MediaStream = mediaDevices.getDisplayMedia({
//       audio: {
//         echoCancellation: true,
//         noiseSuppression: true,
//         sampleRate: 44100,
//       },
//       video: {
//         cursor: 'always',
//         maxWidth: 1920,
//         maxHeight: 1200,
//       },
//     });
//     resolve(res);
//   });
// };

// export function startRecording(stream: MediaStream, lengthInMS: number) {
//   let recorder = new MediaRecorder(stream);
//   let data: Blob[] = [];

//   recorder.ondataavailable = (event) => {
//     data.push(event.data);
//     var link = document.createElement('a');
//     link.setAttribute('href', window.URL.createObjectURL(event.data));
//     link.setAttribute(
//       'download',
//       'video_' + Math.floor(Math.random() * 999999) + '.webm'
//     );
//     link.style.cssText = `
//                 position: absolute;
//                 top: 0;
//                 left: 0;
//                 font-size: 4em;
//                 color:black;
//                 z-index: 10;
//               `;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     recorder.stream.getTracks().forEach((track) => track.stop());
//   };
//   recorder.start(10000);
//   // console.log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);

//   return stream;
// }

// export function stop(stream: MediaStream) {
//   stream.getTracks().forEach((track) => track.stop());
// }

export {};
