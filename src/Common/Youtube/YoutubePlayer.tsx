import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { YoutubePlayerProps } from '../models/props/props.model';

export default function YoutubePlayer (props: YoutubePlayerProps) {
    const {videoId, opts} = props;

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      
    return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
}