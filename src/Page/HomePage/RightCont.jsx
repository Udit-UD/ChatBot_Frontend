import React, { useEffect, useState } from 'react'
import { MessageBox } from '../../Components/MessageBox';
import { IoAttach, IoMicOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { FaRegStopCircle } from "react-icons/fa";
import ScrollToBottom from "react-scroll-to-bottom";


export const RightCont = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  const handleSend = async() => {
    try{
      setPrompt("");
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: prompt,
          sender: "user",
        },
      ]);
      setLoading(true);
      const res = await fetch(`https://chat-bot-api-five.vercel.app/prompt/${id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ message: prompt})
      });
      const data = await res.json();
      if(res.ok){
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: data,
            sender: "assistant",
          },
        ]);
      }

    }
    catch(e){
      console.log(e);
    }
    finally{
      setLoading(false);
    }
  }

  const fetchConversation = async() => {
    try{

      if(id){
        setLoading(true);
        const response = await fetch(`https://chat-bot-api-five.vercel.app/prompt/${id}`, {
          method:"GET", 
        });
        const data = await response.json();
        setMessages(data.history.map(item => ({
          sender: item.sender,
          text: item.text,
        })));
      }      
    }
    catch(e){
      console.log(e);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchConversation();
  }, []);

  return (
    <div className='relative w-3/4 h-[91vh] bg-main-bg pt-10 px-12 pb-8'>
      <ScrollToBottom className='overflow-y-auto h-[75vh] scroll-smooth'>
        { id ? 
        (messages.length >= 1) ? 
          messages.map((message, index) => (
            <MessageBox key={index} text={message.text} isAssistant={message.sender === "assistant"} />
          )) : 
          <div className='flex justify-center items-center font-bold text-2xl text-gray-100 h-[70vh]'>
            Enter Your First
          </div>
          : <div className='flex justify-center items-center font-bold text-2xl text-gray-100 h-[70vh]'>
          Create A Chat First{" :-)"}
        </div>
        }
      </ScrollToBottom>
  
      <div className="w-full p-2 border-2 border-gray-500 flex rounded-xl text-gray-50 justify-between items-center">
        <div className="flex gap-2 w-[90%]">
          <IoAttach fontSize={"1.75rem"}/>
          <input type="text" placeholder='Send a message' 
            className={`w-full outline-none bg-transparent` }
            value={prompt} 
            onChange={(e) => {setPrompt(e.target.value)}} 
            onKeyDown={(e) => {!loading && e.key==="Enter" && handleSend()}}
            />

        </div>

        <div className='flex gap-4'>
          <IoMicOutline  cursor={"pointer"} fontSize={"1.5rem"}/>
          {loading ? 
            <FaRegStopCircle className='text-gray-100' fontSize={"1.5rem"} cursor={"pointer"}/> :
            <IoMdSend className={`${loading ? "cursor-wait" : "cursor-pointer" }`} onClick={handleSend} color='aqua' fontSize={"1.5rem"} disabled={loading}/>
          }
        </div>

      </div>
    </div>
  )
}
