import React, { useState } from "react";
import Navbar from "./Navbar";
import { RiWechatChannelsLine } from "react-icons/ri";
// import axios from 'axios'
import data from "../data.json";
import { Link } from "react-router-dom";

// jo img nhi ave tyare aa errorimage shown krse.
// import thumberror from "../Images/thumbnail-error.png"
// return => <img onError={(e) => {
//   e.target.onerror = null; // To avoid infinite loop in case of fallback image also failing
//   e.target.src = thumberror; // URL to a placeholder image or alternative image
//   // You can also perform other actions here, such as logging the error or setting state to handle the error condition
// }}/> 

const Home = () => {
  const [original, setOriginal] = useState(data);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  // with api link
  // useEffect(()=>{
  //   // axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyCVS0UYL04W-CyVN1bG9HwOm9b9nfz1TTU')
  //   axios.get('/data.json')
  //   .then(function (res) {
  //     setData(res.data.items)
  //     const subdata = res.data.items.map((item) => {
  //       return item.snippet.thumbnails.medium;
  //     });

  //     setThumbnail(subdata)

  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // },[])

  console.log(original);

  // text pchi ... krva
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

var timeout;
  const handleMouseEnter = (videoId) => {
   timeout= setTimeout(() => {
      setHoveredVideo(videoId);
    }, 1500);
    // hover krta 1 sec ma start thse.
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    setHoveredVideo();
  };


  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center items-center m-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {original.map((data, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <div
                      className="h-[200px] md:h-[190px] sm:h-[200px]"
                      onMouseEnter={() => handleMouseEnter(data.id.videoId)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to={`/video/${data.id.videoId}`}>
                        {hoveredVideo === data.id.videoId ? (
                         <iframe
                            className=" inset-0 object-cover h-full w-full rounded-lg"
                            src={`https://www.youtube.com/embed/${data.id.videoId}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <img
                            src={data.snippet.thumbnails.medium.url}
                            className="object-cover w-full h-full rounded-lg"
                            alt=""
                          />
                        )}
                      </Link>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <div className="flex justify-center items-center ml-2 mt-1 h-full text-white rounded-full bg-black p-1">
                        <RiWechatChannelsLine />
                      </div>
                      <div className="text-sm">
                        {truncateText(data.snippet.title, 50)}
                      </div>
                    </div>
                    <div className="ml-10 mt-1 text-xs text-[#606060]">
                      {data.snippet.channelTitle}
                    </div>{" "}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
