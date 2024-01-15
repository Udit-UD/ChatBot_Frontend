import React, { useState } from 'react'
import logo from "../assets/react.svg"
import { PiSquaresFour } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { FiMusic } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import {setClear} from "../state/index";
import { useDispatch } from 'react-redux';

export const Sidebar = () => {
    const [selected, setSelected] = useState("chat")
    const dispatch = useDispatch();
  return (
    <div className='w-[6%] h-screen bg-slate-800 p-2 flex flex-col justify-center items-center'>
        <div className=" pt-2 flex flex-col items-center gap-1">
            <img src={logo} alt="logo" width="40" height="40"/>
            <h2 className="text-white font-bold">LOGO.</h2>
        </div>
        <div className='flex mt-16 w-full h-full gap-8 flex-col items-center'>
            <PiSquaresFour cursor={"pointer"} className={`${selected == "feed" ? "text-green-500" : "text-gray-300"}`} fontSize={"1.75rem"} />
            <FaArrowTrendUp cursor={"pointer"} className={`${selected == "arrow" ? "text-green-500" : "text-gray-300"}`} fontSize={"1.35rem"} />
            <BsChatLeft cursor={"pointer"} className={`${selected == "chat" ? "text-green-500" : "text-gray-300"}`} fontSize={"1.35rem"} />
            <AiOutlinePicture cursor={"pointer"} className={`${selected == "picture" ? "text-green-500" : "text-gray-300"}`} fontSize={"1.35rem"} />
            <FiMusic cursor={"pointer"} className={`${selected == "music" ? "text-green-500" : "text-gray-300"}`} fontSize={"1.35rem"} />
            <FaRegBookmark cursor={"pointer"} className={`${selected == "bookmark" ? "text-green-500" : "text-gray-300"}`} fontSize={"1.35rem"} />
            <RxExit cursor={"pointer"} onClick={() => dispatch(setClear())} className={`${selected == "exit" ? "text-green-500" : "text-gray-300"}`} fontSize={"1.35rem"} />
        </div>

    </div>
  )
}
