import React from 'react';
import YouTube from 'react-youtube';


const YouTubeVideo = (props) => {
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      showinfo: 0,
      enablejsapi: 1,
      origin: 'http://localhost:3000',
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={props.linkFilm}
      opts={opts}
      onReady={onReady}
    />
  );
};

export default YouTubeVideo;
