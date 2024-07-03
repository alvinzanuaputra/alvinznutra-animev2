"use client"

import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import type { TFullAnime } from "@/types";

const Youtubeplay = ({ dataAnime }: { dataAnime: TFullAnime }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const updateMediaQuery = () => {
    setIsMobile(window.innerWidth <= 768);
    setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1200);
  };

  useEffect(() => {
    updateMediaQuery();
    window.addEventListener('resize', updateMediaQuery);
    return () => {
      window.removeEventListener('resize', updateMediaQuery);
    };
  }, []);

  return (
    <YouTube
      videoId={dataAnime?.data?.trailer?.youtube_id}
      onReady={
        (event) => event.target.pauseVideo()
      }
      opts={{
        width: isMobile ? 'auto' : isTablet ? '1024' : '1200',
        height: isMobile ? '360' : isTablet ? '768' : '640',
      }}
      onError={() => alert('Video ini tidak tersedia lagi!')}
    />
  );
};

export default Youtubeplay;
