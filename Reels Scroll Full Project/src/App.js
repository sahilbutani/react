import { useState, useEffect } from "react";
import BottomNav from "./components/BottomNav";
import VideoCard from "./components/VideoCard";
import { FaFilter } from "react-icons/fa6";
import useFirestoreData from './config/data/useFirestoreData';
import { collection, getCountFromServer, query } from "firebase/firestore";
import { db } from "./config/firebaseConfig";
import LoadingScreen from "./components/LoadingScreen";
import handleRedirect from "./common/handleRedirect";

function App() {
  const [videos, setVideos] = useState([]);
  const [startAfterDoc, setStartAfterDoc] = useState(null);
  const { data: firestoreVideos, loading } = useFirestoreData(startAfterDoc);
  const [dataSize,setDataSize]=useState(0);

  const getCollectionSize = async () => {
    const q = query(collection(db, 'listings'));
    const snapshot = await getCountFromServer(q);
    const count = snapshot.data().count;
    setDataSize(count);
    return count;
  };

  var lastvideoID = (videos[videos.length - 1]?.id)
  var lastToSecondVideoID=((videos[videos.length - 1]?.id))

  const loadMoreVideos = (videoId) => {  
    
    if (videoId === lastvideoID && (dataSize>=videos.length)) {
      const lastVideo = firestoreVideos[firestoreVideos.length - 1];
      setStartAfterDoc(lastVideo);
    }
  };

  useEffect(()=>{
    getCollectionSize();
  },[])

  useEffect(() => {
    if (!loading && firestoreVideos.length > 0) {
      setVideos(prevVideos => [...prevVideos, ...firestoreVideos]);
      lastvideoID = (videos[firestoreVideos.length - 1]?.id)
    }
  }, [firestoreVideos, loading]);
  return (
    <main>
      <div className="slider-container">
        <div className="filter-section absolute text-[#fff] z-50 p-5 w-full flex justify-between items-center">
          <span className="p-3 bg-[#ffffff5e] rounded-full">
            <FaFilter size={20} onClick={handleRedirect}/>
          </span>
          <span>
            <span className="text-[15px] font-semibold">For You</span>
            <span className="font-bold text-[16px] mx-1">|</span>
            <span className="text-[15px] text-[#ffffff9f]" onClick={handleRedirect}>My Posts</span>
          </span>
          <span></span>
        </div>
        {videos.map((video) => (
          <VideoCard
          currVideo={video}
            key={video.id}
            index={video.id}
            id={video.id}
            author={video.author}
            videoURL={video.videoURL}
            authorLink={video.authorLink}
            loadMoreVideos={loadMoreVideos}
            lastvideoID={lastvideoID}
            lastToSecondVideoID={lastToSecondVideoID}
            loading={loading}
          />
        ))}
        {loading&&<span className="loding-componen"><LoadingScreen/></span>}
      </div>
      <BottomNav />
    </main>
  );
}

export default App;
