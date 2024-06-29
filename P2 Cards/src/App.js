//import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';

function App() {
  return(
  <>
  <Home />
  </>
  )
  }
  // const [ele,setEle]=useState("");
  
  // const [card,setCard]=useState([]);
  // useEffect(()=>{
  //   if(localStorage.getItem('card')){
  //   setCard(localStorage.getItem('card').split(","));}
  // },[])

  // const handleEvent=()=>{
  //   if(ele!==""){ 
  //   setCard([ele,...card]);
  //   localStorage.setItem('card',[ele,...card]);
  //   setEle("")
  // }
  // }
  // const handleDelete = (index) => {
    
  // };
  // return (
  //   <>
  //     <div>
  //         <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Your Task</label>
  //         <input
  //         value={ele}
  //         onChange={e=>setEle(e.target.value)}
  //         type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  //         <button onClick={handleEvent} type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 end">Add</button>
  //     </div>
  //     {card?.map((c,index)=>{
  //       return<>
  //       <div>
  //       <span href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  //       <p class="font-normal text-gray-700 dark:text-gray-400">{c}</p>
  //       <button onClick={e=>handleDelete(e,index)} type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 end">Delete</button>
  //       </span>
  //     </div>
  //       </>
  //     })}
  //     {/* <div>
  //      <span href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  //    <p class="font-normal text-gray-700 dark:text-gray-400">{setCard}</p>
  //    </span>
  //  </div> */}
  //</>
  //);
//}

export default App;
