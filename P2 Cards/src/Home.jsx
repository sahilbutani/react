import React, { useState } from 'react'

const Home = () => {

    const [task, setTask] = useState("");

    const [taskList, setTaskList] = useState([]);

    const handlechange = (e) => {
        setTask(e.target.value)//new input ni value target thy ne setTask thse.
    }

    const addTask = () => {
        // jyare add button kriye tyare task khali thay tyare.
        if (task !== "") { 
            setTaskList([task, ...taskList]);//TaskList ma current new task, and ...taskList atle teni shivay na phelani tasklist add thse.
            setTask("");//input ma lakhya bad khali krva
        }
    }

    //delete button thi task ne delete krva
    const handleRemove = (e, index) => {
        // _ no mtlb null parameter
        //jyare i etle k usere select krel index and index match thse nhi..
        setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
    };

    
    return (
        <div className='container mx-auto px-4'>
            <div class="mb-6">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
                <input
                    value={task}
                    onChange={e => handlechange(e)}
                    type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className='flex justify-end mr-[-25px]'>
                <button onClick={addTask} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
            </div>
            <div className='flex flex-col gap-5'>
                {
                    // array ni value ne map krva
                    taskList.map((t, index) => {
                        return <>
                            <div key={index} class="block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <p class="font-normal m-6 text-gray-700 dark:text-gray-400">{t}</p>
                                <div className='flex justify-end'><button onClick={e => handleRemove(e, index)} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
                            </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default Home