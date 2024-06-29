import React from 'react'

const LoadingScreen = () => {
    return (
        <div className="slider-children" >
                <div className='video-options h-[30%]  w-[50px] gap-3 '>
                    <div className='space-y-2.5 animate-pulse h-[40px]  mr-4 w-[40px]  rounded-[5px] bg-gray-300 dark:bg-gray-600'></div>
                    <div className='space-y-2.5 animate-pulse h-[40px]  mr-4 w-[40px]  rounded-[5px] bg-gray-300 dark:bg-gray-600'></div>
                    <div className='space-y-2.5 animate-pulse h-[40px]  mr-4 w-[40px]  rounded-[5px] bg-gray-300 dark:bg-gray-600'></div>
                    <div className='space-y-2.5 animate-pulse h-[40px]  mr-4 w-[40px]  rounded-[5px] bg-gray-300 dark:bg-gray-600'></div>
                </div>
            <div className="video-info relative">
                <div className="info-scroller space-y-2.5 animate-pulse  h-[20px] rounded-[5px] bg-gray-900 dark:bg-gray-600"></div>
            </div>
            <div className="video-process px-3">
                <div className=" space-y-2.5 animate-pulse  h-2.5  bg-gray-300 rounded-full dark:bg-gray-600 w-10"></div>
                <div className=" space-y-2.5 animate-pulse  h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className=" space-y-2.5 animate-pulse  h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-10"></div>
            </div>
        </div>
    )
}

export default LoadingScreen