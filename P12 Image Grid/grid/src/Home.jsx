import React, { useState } from "react";
import Modal from "./Modal"
const Home = () => {

    const [open,setOpen]=useState(false);
    const [url,setUrl]=useState("");

    const imgs=[
"https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.webp?b=1&s=170667a&w=0&k=20&c=4NKz9veFo5-po92H0ZQ1FGoxMec7DaBPsaj9dZvp9rE=",
"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
"https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.webp?b=1&s=170667a&w=0&k=20&c=jJ2PQzFQfNaMZ2k3Wh3isi3Nlx2AmdunUT4EXpqk4_g="
,"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    ];

    const handleClick=(link)=>{
        setUrl(link)
        setOpen(true)
    }
  return (
    <>
      <h1> Welcome To Nature </h1>
      <div className="imagecont">
        <div className="grid">
          {imgs.map((i,index)=>{
            return <div key={index}>
                <img onClick={e=>handleClick(i)} src={i} alt=""/>
          </div>
        })}
        </div>
      </div>

      <Modal open={open} setOpen={setOpen} url={url}/>
    </>
  );
};

export default Home;
