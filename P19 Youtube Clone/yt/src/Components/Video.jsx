import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Video = () => {
  const [video, setVideo] = useState();

  const { videoid } = useParams();
  // link mathi parameter leva
  console.log(videoid);

  useEffect(() => {
    setVideo(videoid);
  }, []);

  return (
    <>
      <div>
        <iframe
          className="rounded-lg m-5"
          height={400}
          width={800}
          src={`https://www.youtube.com/embed/${video}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </>
  );
};

export default Video;
