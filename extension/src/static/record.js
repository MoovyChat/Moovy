let recorder;

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'RECORD') {
    const { streamId, height, width, duration, format, isRecording } = message;
    if (!isRecording) {
      recorder.stream.getTracks().forEach((track) => track.stop());
      return;
    }
    // Get the stream
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId,
          maxWidth: width,
          maxHeight: height,
          minFrameRate: 60,
          minAspectRatio: 1.77,
        },
      },
      audio: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId,
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      },
    });

    if (stream) {
      let context = new AudioContext();
      let _stream = context.createMediaStreamSource(stream);
      _stream.connect(context.destination);

      recorder = new MediaRecorder(stream, {
        mimeType: format,
      });

      let data = [];
      document.title = 'Netflix-Recording';
      recorder.ondataavailable = (event) => {
        document.title = 'Netflix';
        let blobUrl = window.URL.createObjectURL(event.data);
        data.push(blobUrl);
        chrome.runtime.sendMessage({ type: 'RECORD_COMPLETE', data: data });
        recorder.stream.getTracks().forEach((track) => track.stop());
      };
      recorder.start(duration * 1000);
    }
  }
});
