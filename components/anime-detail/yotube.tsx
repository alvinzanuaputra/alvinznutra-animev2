"use client";

import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import type { TFullAnime } from "@/types";
import ErrorBoundary from '@/components/ErrorBoundary'; // Adjust the path if necessary

const Youtubeplay = ({ dataAnime }: { dataAnime: TFullAnime }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const updateMediaQuery = () => {
        setIsMobile(window.innerWidth <= 768);
        setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1200);
    };

    useEffect(() => {
        setIsClient(true);
        updateMediaQuery();
        window.addEventListener('resize', updateMediaQuery);
        return () => {
            window.removeEventListener('resize', updateMediaQuery);
        };
    }, []);

    const opts = {
        width: isMobile ? 'auto' : isTablet ? '1024' : '1200',
        height: isMobile ? '360' : isTablet ? '768' : '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const _onReady = (event: any) => {
        if (event?.target?.pauseVideo) {
            event.target.pauseVideo();
        }
    };

    if (!dataAnime?.data?.trailer?.youtube_id) {
        return <div>No trailer available</div>;
    }

    return (
        isClient && (
            <ErrorBoundary>
                <YouTube
                    className="relative"
                    videoId={dataAnime.data.trailer.youtube_id}
                    onReady={_onReady}
                    opts={opts}
                    onError={() => alert('Video ini tidak tersedia lagi!')}
                />
            </ErrorBoundary>
        )
    );
};

export default Youtubeplay;
