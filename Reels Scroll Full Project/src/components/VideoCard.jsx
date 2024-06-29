// import { useRef, useState, useEffect } from "react";
// import useIsInViewport from "../hooks/useIsInViewport";
// import VideoOptions from "./VideoOptions";
// import InfoScroller from "./InfoScroller";

// const VideoCard = ({
//     index,
//     id,
//     author,
//     videoURL,
//     authorLink,
//     loadMoreVideos,
//     lastvideoID,
//     currVideo,
// }) => {
//     const video = useRef();
//     const isInViewport = useIsInViewport(video);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [duration, setDuration] = useState(0);
//     const [currentTime, setCurrentTime] = useState(0);

//     const togglePlay = () => {
//         if (video.current.paused) {
//             video.current.play();
//             setIsPlaying(true);
//         } else {
//             video.current.pause();
//             setIsPlaying(false);
//         }
//     };

//     const handleProgressBarClick = (e) => {
//         const progressBarRect = e.target.getBoundingClientRect();
//         const offsetX = e.clientX - progressBarRect.left;
//         const progress = offsetX / progressBarRect.width;
//         const newTime = progress * duration;
//         setCurrentTime(newTime);
//         video.current.currentTime = newTime;
//     };


//     useEffect(() => {
//         if (isInViewport) {
//             video.current.currentTime = 0;
//             const playPromise = video.current.play();

//             if (playPromise !== undefined) {
//                 playPromise.then(_ => {
//                     setIsPlaying(true);
//                     if (id === lastvideoID) {
//                         loadMoreVideos(id);
//                     }
//                 }).catch(error => {
//                     setIsPlaying(false);
//                 });
//             }
//         } else {
//             video.current.pause();
//             setIsPlaying(false);
//         }
//     }, [isInViewport]);

//     useEffect(() => {
//         const handleLoadedMetadata = () => {
//             setDuration(video.current.duration);
//         };

//         const handleTimeUpdate = () => {
//             setCurrentTime(video.current.currentTime);
//         };

//         video.current.addEventListener("loadedmetadata", handleLoadedMetadata);
//         video.current.addEventListener("timeupdate", handleTimeUpdate);

//         return () => {
//             video.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
//             video.current.removeEventListener("timeupdate", handleTimeUpdate);
//         };
//     }, []);


//     const formatTime = (time) => {
//         const minutes = Math.floor(time / 60);
//         const seconds = Math.floor(time % 60);
//         return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     };



//     return (
//         <>
//             <div className="slider-children" >

//                 <VideoOptions />

//                 <video
//                     loop
//                     muted
//                     className="video"
//                     ref={video}
//                     id={index}
//                     autoPlay={index === 1}
//                     onClick={togglePlay}
//                 >

//                     <source src={videoURL} type="video/mp4" />
//                 </video>
//                 <div className="video-info relative">
//                     <InfoScroller currVideo={currVideo}/>
//                     <span className="blury-side"></span>
//                 </div>
//                 <div className="video-process">
//                     <span className="progress-time">{formatTime(currentTime)}</span>
//                     <div className="progress-bar" onClick={handleProgressBarClick}>
//                         <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
//                     </div>
//                     <span className="progress-time">{formatTime(duration)}</span>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default VideoCard;

import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';
import useIsInViewport from "../hooks/useIsInViewport";
import VideoOptions from "./VideoOptions";
import InfoScroller from "./InfoScroller";
import BottomNav from "./BottomNav";

const VideoCard = ({
    index,
    id,
    author,
    videoURL,
    authorLink,
    loadMoreVideos,
    lastvideoID,
    currVideo,
    lastToSecondVideoID,
    loading,
}) => {
    const video = useRef();
    const isInViewport = useIsInViewport(video);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [buttonVisible, setButtonVisible] = useState(false);

    const showButtonTemporarily = () => {
        setButtonVisible(true);
        setTimeout(() => {
            setButtonVisible(false);
        }, 1000);
    };

    const togglePlay = () => {
        if (video.current.paused) {
            video.current.play();
            setIsPlaying(true);
        } else {
            video.current.pause();
            setIsPlaying(false);
        }
        showButtonTemporarily();
    };

    const handleProgressBarClick = (e) => {
        e.stopPropagation()
        const progressBarRect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - progressBarRect.left;
        const progress = offsetX / progressBarRect.width;
        const newTime = progress * duration;
        setCurrentTime(newTime);
        video.current.currentTime = newTime;
    };

    useEffect(() => {
        if (isInViewport) {
            video.current.currentTime = 0;
            const playPromise = video.current.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    setIsPlaying(true);
                    if (id === lastToSecondVideoID) {
                        loadMoreVideos(id);
                    }
                }).catch(error => {
                    setIsPlaying(false);
                });
            }
        } else {
            video.current.pause();
            setIsPlaying(false);
        }
    }, [isInViewport]);

    useEffect(() => {
        const handleLoadedMetadata = () => {
            setDuration(video.current.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(video.current.currentTime);
        };

        video.current.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.current.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            video.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
            video.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (<>
        <div className="slider-children" onClick={togglePlay}>
            <VideoOptions />
            <video
                loop
                muted
                className="video"
                ref={video}
                id={index}
                autoPlay={index === 1}
                playsInline
            >
                <source src={videoURL} type="video/mp4" />
            </video>

            {buttonVisible && (
                <button
                    className={`play-pause-button ${buttonVisible ? 'visible' : ''}`}
                    onClick={togglePlay}
                >
                    {isPlaying ? <FaPause  /> : <FaPlay  />}
                </button>
            )}


            <div className="video-info relative">
                <InfoScroller currVideo={currVideo} />
                <span className="blury-side"></span>
            </div>
            <div className="video-process">
                <span className="progress-time">{formatTime(currentTime)}</span>
                <div className="progress-bar" onClick={handleProgressBarClick}>
                    <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                </div>
                <span className="progress-time">{formatTime(duration)}</span>
            </div>
        </div>
        </>
    );
};

export default VideoCard;
