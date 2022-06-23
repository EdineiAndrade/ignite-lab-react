
import YouTube, { YouTubeProps } from 'react-youtube';

interface VideoIdProps{
    Id: string;
}

export function PlayerTb(props:VideoIdProps) {
    
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
      event.target.pauseVideo();
    }
    const opts: YouTubeProps['opts'] = {
      height: '594',
      width: '937',
      playerVars: {
        autoplay: 1,
      },
    };
    return <YouTube videoId={props.Id} opts={opts} onReady={onPlayerReady} />;
  }