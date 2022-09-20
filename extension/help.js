var seekScript = `
    window.seekScriptLoaded=!0;var getVideoPlayer=function(){var e=window.netflix.appContext.state.playerApp.getAPI().videoPlayer,t=e.getAllPlayerSessionIds()[0];return e.getVideoPlayerBySessionId(t)},
    seekInteraction=function(e){
        if(e.source==window){
            if(e.data.type&&"SEEK"==e.data.type) getVideoPlayer().seek(e.data.time);
            if(e.data.type&&"PAUSE"==e.data.type) getVideoPlayer().pause();
            if(e.data.type&&"PLAY"==e.data.type) getVideoPlayer().play();
            e.data.type&&"teardown"==e.data.type && (window.removeEventListener("message",seekInteraction,!1),window.seekScriptLoaded=!1)
        }
    };
    window.addEventListener("message",seekInteraction,!1);`;

injectScript(seekScript);
var seek = function (milliseconds) {
  return function () {
    var time = new Date();
    var timeStatus =
      ' at' +
      time.getHours() +
      ':' +
      time.getMinutes() +
      ':' +
      time.getMilliseconds() +
      ' AM';
    console.log(
      'seek called w window postMessage: ' + milliseconds + timeStatus
    );
    // console.error(Error('seek start'));

    uiEventsHappening += 1;
    var eventOptions, scrubber, oldPlaybackPosition, newPlaybackPosition;
    var alreadyUpdated = false;

    // send seek event to window w time
    window.postMessage({ type: 'SEEK', time: milliseconds }, '*');

    // delay 250ms to get seek api and start seeking
    return (
      delay(250)()
        .then(
          delayUntil(function () {
            // broadcast start of buffering
            if (!alreadyUpdated) {
              alreadyUpdated = true;
              socket.emit('buffering', { buffering: true }, function () {});

              var time = new Date();
              var timeStatus =
                ' at' +
                time.getHours() +
                ':' +
                time.getMinutes() +
                ':' +
                time.getMilliseconds() +
                'AM';
              // console.log('simulated seek: buffering start -> server' + timeStatus);
            }

            newPlaybackPosition = getPlaybackPosition();
            // return Math.abs(newPlaybackPosition - oldPlaybackPosition) >= 1;
            return getState() !== 'loading';
          }, 10000)
        )
        .catch(function (e) {
          // broadcast end of buffering (timeout)
          socket.emit('buffering', { buffering: false }, function () {});

          var time = new Date();
          var timeStatus =
            ' at' +
            time.getHours() +
            ':' +
            time.getMinutes() +
            ':' +
            time.getMilliseconds() +
            'AM';
          // console.log('simulated seek timed out: buffering end -> server' + timeStatus);
        })
        .then(function () {
          // broadcast end of buffering (finished loading)
          socket.emit('buffering', { buffering: false }, function () {});

          var time = new Date();
          var timeStatus =
            ' at' +
            time.getHours() +
            ':' +
            time.getMinutes() +
            ':' +
            time.getMilliseconds() +
            'AM';
          // console.log('simulated seek finished: buffering end -> server' + timeStatus);

          // compute mean seek error for next time
          var newSeekError = Math.min(
            Math.max(newPlaybackPosition - milliseconds, -10000),
            10000
          );
          shove(seekErrorRecent, newSeekError, 5);
          seekErrorMean = mean(seekErrorRecent);
        })
        //.then(hideControls)
        .ensure(function () {
          uiEventsHappening -= 1;
          // console.error(Error('seek end'));
        })
    );
  };
};
