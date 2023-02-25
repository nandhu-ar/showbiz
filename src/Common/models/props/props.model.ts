import { YouTubeProps } from "react-youtube";

export type YoutubePlayerProps = {
    videoId: string;
    opts: YouTubeProps['opts'];
}