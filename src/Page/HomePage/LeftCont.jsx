import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { Prompt } from "../../Components/Prompt";
import { Loading } from "../../Components/Loading";
import { useDispatch, useSelector } from 'react-redux';
import { setConvos, setselectedConvo } from '../../state';

export const LeftCont = () => {
    const dispatch = useDispatch();
    const conversations = useSelector((state) => state.conversations);
    const selectedConvo = useSelector((state) => state.selectedConvo);
    const [loading, setLoading] = useState(false);
    
    const fetchConvos = async() => {
        try{
            setLoading(true);
            const response = await fetch(`https://chat-bot-api-five.vercel.app/prompt`, {
                method:"GET", 
                "content-type": "application/json"
            });
            const data = await response.json();
            dispatch(setConvos({conversations: data}));
        }
        catch(e){
            alert(e);
            console.log(e);
        }
        finally{
            setLoading(false);
        }
    }

    const handleNewChat = async()=> {
        try{
            setLoading(true);
            const response = await fetch(`https://chat-bot-api-five.vercel.app/prompt/create`, {
                method:"POST",
            });

            const data = await response.json();
            console.log(data);
            dispatch(setselectedConvo(data.conversationId));
            if(response.ok){
                fetchConvos();
            }
        }
        catch(e){
            alert(e);
            console.log(e);
        }   
        finally{
            setLoading(false);
        } 
    }
    useEffect(()=>{
        fetchConvos();
    }, []);

  return (
    <div className='w-1/4 h-[91vh] bg-main-bg border-r-2 border-gray-800 p-6'>
        <h1 className="text-3xl font-semibold text-white">
            Text Generator
        </h1>
        <div className="h-[65vh] mt-6 overflow-y-auto overflow-x-hidden flex flex-col gap-3">
            {
            loading ? 
                <div className="h-[65vh] flex justify-center items-center">
                    <Loading />
                </div>
            :
            conversations
                &&
                conversations.map((conversation, index) => (
                    <Prompt key={index} Text={conversation.title} active={selectedConvo === conversation._id} id={conversation._id} />
                ))
            }
        </div>
        <div className='flex flex-col gap-2'>
            <div className='rounded-3xl flex items-center gap-2 text-xs px-4 text-green-500 border-2 border-green-700 p-2 w-full cursor-pointer'
             onClick={handleNewChat}>
                <IoIosAddCircleOutline fontSize={"1.25rem"}/> New Chat
            </div>
            <div className='rounded-3xl flex items-center gap-2 px-4 text-xs text-red-500 border-red-500 border-2 p-2 w-full cursor-pointer'>
                <HiMiniArrowLeftOnRectangle fontSize={"1.25rem"}/> Clear Conversation
            </div>
        </div>
    </div>
  )
}
