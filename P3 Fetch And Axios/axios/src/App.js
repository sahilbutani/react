import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SideDiv from "./SideDiv";

function App() {
  const [ans, setAns] = useState([]);

  const [img,setImg]=useState("");
  const [lastname,setLastname]=useState("");
  const [firstname,setFirstname]=useState("");
  const [email,setEmail]=useState("");

  useEffect(()=>{
    axios
    .get("https://reqres.in/api/users?page=2")
    .then(function (response) {
      setAns(response.data.data);
      console.log(response.data.data);

      setImg(response.data.data[0].avatar); //By default SideDiv ma first data ave te mate
      setLastname(response.data.data[0].last_name);
      setFirstname(response.data.data[0].first_name);
      setEmail(response.data.data[0].email);
    })
    .catch(function (error) {
      console.log(error);
    });

  },[]) //Api ek j var call thay te mate useEffect use kryu.
  
  const handleClick =(e,a)=> {
    setImg(a.avatar);
    setLastname(a.last_name);
    setFirstname(a.first_name);
    setEmail(a.email);
  };

  return (
    //Fetch is Used Only Client Side(Not Server Side).
    //Fetch is Bydefault in JS
    //Fetch does not provide a request cancellation, in comparison with Axios
    //But Axios Used Both the Client Side And The Server Side.
    //For using Axios we must Import it.
    <>
      <div className="flex">
        <div>
        <div className=" h-[150vh] overflow-y-scroll">
            {ans?.map((a, index) => {
              //? thi jo  ans ma kai nai hoy to map ma error nahi ave.
             return (
                <>
                  <span
                    key={index}
                    onClick={e=>handleClick(e,a)} //OnClick use kriye tyare e pass kravvu.
                    className="block max-w-sm p-6 bg-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <img
                      className="w-10 h-10 border-3 border-black rounded-full dark:border-gray-800"
                      src={a.avatar}
                      alt=""
                    />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {a.first_name} {a.last_name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here the email of {a.first_name} is {a.email}
                    </p>
                  </span>
                </>
              );
            })}
        </div>
        </div>
        <div >
        <SideDiv img={img} lastname={lastname} firstname={firstname} email={email}/>
        {/* aa badhi value SideDiv ma pass thse. */}
        </div>
      </div>
    </>
  );
}

export default App;
