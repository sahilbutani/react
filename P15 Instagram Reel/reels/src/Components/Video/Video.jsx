import React, { useState, useRef } from "react";
import "./Video.css";

//import components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Video = ({channel,song,url,likes,comment,shares}) => {
  const [vidplay, setVidPlay] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (vidplay) {
      vidRef.current.pause();
      setVidPlay(false);
    } else {
      vidRef.current.play();
      setVidPlay(true);
    }
  };
  return (
    <div className="video-cards">
      <Header />
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
        autoPlay={true}
      />
      <Footer channel={channel} song={song} url={url} likes={likes} comment={comment} shares={shares}/>
    </div>
  );
};

export default Video;
