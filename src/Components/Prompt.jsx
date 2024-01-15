import React from 'react'
import { BsChatLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { setselectedConvo } from '../state';
import { useDispatch } from 'react-redux';


export const Prompt = ({Text = "", active=false , id}) => {
  const navigate = useNavigate();
  return (
    <div className={`rounded-3xl flex items-center gap-4 cursor-pointer text-xs px-6 text-gray-400 bg-slate-800 p-3 w-full ${active ? "border-2 border-green-700": ""}`}
    onClick={()=>{navigate(`/${id}`); navigate(0)}}
    >
        <BsChatLeft fontSize={"1.0rem"} color='white'/> {Text}
    </div>
  )
}