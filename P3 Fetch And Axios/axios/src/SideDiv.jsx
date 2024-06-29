import React from 'react'

const SideDiv = ({img,firstname,lastname,email}) => {
  return (
    <div className='p-4 h-[400px] w-[400px] bg-gray-300'>
        <img src={img} alt='' className='h-[200px] w-[200px]'/>
        <div>{firstname}</div>
        <div>{lastname}</div>
        <div>{email}</div>
    </div>
  )
}

export default SideDiv