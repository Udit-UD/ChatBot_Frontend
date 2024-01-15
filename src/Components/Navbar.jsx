import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { RiNotificationLine, RiArrowDropDownLine } from "react-icons/ri";
import Profile from "../assets/profile.jpeg"

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = ()=>{
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <div className='h-[9vh] relative flex' style={{background: "rgb(30 31 38)"}}>
        <div className="w-[85%] flex justify-center items-center">
            <div className="w-1/4 flex gap-1 bg-slate-800 border-2 border-slate-500 p-1 rounded-3xl">
                <input type="text" placeholder='Search anything...' className='w-[85%] text-sm bg-transparent px-4 py-1 outline-none text-slate-400'/>
                <IoSearch fontSize={"1.75rem"} className='text-slate-500'/>
            </div>
        </div>
        <div className="w-[15%] flex justify-end mr-10 items-center gap-8 ">
            <RiNotificationLine className='relative' color='white' fontSize={"1.25rem"} /> 
            <div className='flex justify-center items-center gap-1 '>
                <div className='rounded-full w-8 h-8 overflow-hidden cursor-pointer' >
                    <img src={Profile} alt="" className="w-full h-full object-cover" />
                </div>
                <RiArrowDropDownLine color='white' className='text-xl' cursor={"pointer"} onClick={handleDropdown}/>
                <div className={`absolute z-10 right-10 top-12 bg-slate-900 border border-gray-300 rounded-md shadow-md ${isDropdownOpen ? 'block' : 'hidden'}`}>
                    <button className='block px-4 py-2 text-white hover:bg-slate-700 rounded-md w-full text-left'
                        onClick={()=> {console.log("SignOut!!"); setIsDropdownOpen(!isDropdownOpen)}} >
                        Leave Chat
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
