import React, { useEffect, useState } from 'react'

const ApiCall = () => {

    // const apicall= async ()=>{ //async function error hoy to pn end sudhi chale
    //     const response=await fetch('https://reqres.in/api/users?page=2'); 
                //fetch thi api fetch thse.
                //await thi promises nahi dekhay direct result j apse.(Promise etle request resolve or reject thay te batave)(jo await n lakhiye to aa Promise batavse.)
    
    //const ans=await response.json();
               //ans ne json ma fervu pade jethi body j male nhitr aakho response mle head body etc,.. 

    //const data=ans.data;     //answer ma only data fetch karavva.
    //console.log(data)
    // }

    const [data, setData] = useState([]);

    const apicall = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const ans = await response.json();
        setData(ans.data)
    }

    useEffect(() => {
        apicall()
    }, [])
    //apicall ek j var thay tena mate useEffect ma ,[]) vapryu.

    return (
        <div>
            {data.map((d,index) => {
                return <>
                    <span key={index} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className='flex py-3 gap-2'><img class="w-10 h-10 rounded-full" src={d.avatar} alt="Rounded avatar" /> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.first_name} {d.last_name}</h5></div>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{d.email}</p>
                    </span>
                </>
            })}

        </div>
    )
}

export default ApiCall