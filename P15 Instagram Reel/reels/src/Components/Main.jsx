import React from "react";
import Video from "../Components/Video/Video";

//import media
import vid1 from "./Video/Videos/Video1.mp4";
import vid2 from "./Video/Videos/Video2.mp4";
import vid3 from "./Video/Videos/Video3.mp4";
import vid4 from "./Video/Videos/Video4.mp4";


const Main = () => {
  const data = [
    {
      channel: "Sahil's reel",
      song: "song-1",
      url: vid1,
      likes: "36",
      comment: "6",
      shares: "23",
    },
    {
      channel: "Parth's reel",
      song: "song-2",
      url: vid2,
      likes: "76",
      comment: "60",
      shares: "233",
    },
    {
      channel: "Hardik's reel",
      song: "song-3",
      url: vid3,
      likes: "356",
      comment: "66",
      shares: "103",
    },
    {
      channel: "Ronak's reel",
      song: "song-4",
      url: vid4,
      likes: "36",
      comment: "6",
      shares: "13",
    },
  ];
  
  return (
    <div className="maindiv">
      <div>
        <center>
          <div className="video-container">
            <div className="video">
              {data.map((list, i) => {
                return (
                  <Video
                    key={i}
                    channel={list.channel}
                    song={list.song}
                    url={list.url}
                    likes={list.likes}
                    comment={list.comment}
                    shares={list.shares}
                    data={data}
                  />
                );
              })}
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Main;
