import React, { useRef } from "react";
import { YouTubeProps } from "react-youtube";
import YoutubePlayer from "../Common/Youtube/YoutubePlayer";
import './Home.scss';
export default function Home() {
    const mainVideoOpts: YouTubeProps['opts'] = {
        width: window.innerWidth * 0.9,
        height: window.innerWidth * 0.6,
        playerVars: {
          autoplay: 0,
        },
      };
    return (
        <div className="home-container">
            <div className="nav-bar">
                <span>Logo</span>
                <span className="navigation">
                    <span>
                        Home
                    </span>
                    <span>
                        About
                    </span>
                </span>
            </div>
            <div className="highlight-video">
                <YoutubePlayer videoId='pCgzg2Bxi1A' opts={mainVideoOpts}></YoutubePlayer>
            </div>
        </div>
    )
}