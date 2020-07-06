import React, { useEffect, createRef, useState } from 'react'
import { VideoWrapper } from './style'

const Video = props => {
  const { youtubeId } = props;
  const [showVideo, setShowVideo] = useState(false);
  const container = createRef();

  const onVideoIntersection = (entries) => {
    if (!entries || entries.length <= 0) {
          return;
      }

      if (entries[0].isIntersecting) {
          setShowVideo(true);
          videoObserver.disconnect();
      }
  }
  
  const videoObserver = new IntersectionObserver(onVideoIntersection, {
      rootMargin: '100px 0px',
      threshold: 0.25
  });
  
  useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
        if (container && container.current) {
            videoObserver.observe(container.current);
        }
    } else {
        setShowVideo(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  return (
    <VideoWrapper ref={container}>
      { showVideo ? (
        <iframe 
        width="560" 
        height="315" 
        title="Vídeo no Youtube"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
      ) : undefined}      
      
    </VideoWrapper>
  )
}

export default Video