import React from 'react'

export const MessageBox = ({text, time = "2:54PM, 15 Nov", isAssistant}) => {
  return (

    <div className='text-sm p-2 w-full min-h-12'>

        <p className={`text-xs text-gray-400 ${isAssistant ? "text-left" : "text-right"}`}>
            {time}
        </p>
        <div className={`w-full flex mt-2 ${isAssistant ? "justify-start": "justify-end"}`}>

        <div className={`bg-gray-800 max-w-[80%] font-sm text-gray-50 p-3 rounded-xl ${isAssistant ? "rounded-br-none" : "rounded-bl-none"}`}>
          {text && text.split('\n').map((line, index) => (
            <p key={index} className="mb-2">{line}</p>
          ))}
        </div>
        </div>
    </div>
  )
}
