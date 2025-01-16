import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Loader from './Loader';

        
const Home = () => {
  
const [spin,setSpin] = useState(false);

const [card,setCard]=useState([]);

useEffect(()=>{
  setSpin(true) //loader batvva true Apyu jya sudhi api get thse tya sudhi.
  axios
  .get("https://dummyjson.com/products")
  .then(function (response) {
    const ans = response.data.products;
    console.log(ans)
    setCard(ans)
    setSpin(false) //Api no response mali gya pachi false apyu jethi loader vy jase.
  })
  .catch(function (error) {
    console.log(error);
  });
},[])

  return(
   <>
   {spin&&<Loader/>} 
   {/*jo spin hse to Loader component call thse nhitr nai thay. */}
   
   <nav>
    {/* nav thi ek var bija page pr redirect thy gya bad return te page pr avva thay */}
    {card?.map((a,index)=>{
      return<>
      <Link to={`/SubPage/${a.id}`}>
      <span key={index} className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={a.images} alt=""/>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{a.title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{a.price}</p>
      </span>
      </Link>
      </>
    })}
    
    </nav>
            //Home ma jo navbar sidebar ne te badhu fix rakhine only home j change thay tevu krva mate Outlet no use thay. ahi krelo nthi pn kri skay.
           // <Outlet/>
  
   </>
  )

}

export default Home
