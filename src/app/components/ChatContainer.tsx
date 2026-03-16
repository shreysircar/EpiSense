"use client"

import { useState } from "react"
import MessageBubble from "./MessageBubble"
import ChatInput from "./ChatInput"
import ImageUpload from "./ImageUpload"

export default function ChatContainer() {

const [messages, setMessages] = useState([
  {
    role: "assistant",
    content:
      "Hello! Upload a skin image and I will analyze it for possible dermatological conditions."
  }
])

  return (
    <div className="w-[760px] h-[85vh]
    bg-[#111827]/80
    backdrop-blur-xl
    border border-[#1F2937]
    shadow-2xl
    rounded-3xl
    flex flex-col
    overflow-hidden">

      {/* Header */}

      <div className="p-4 border-b border-[#1F2937] flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-9 h-9 rounded-full
          bg-gradient-to-r from-blue-500 to-purple-500
          flex items-center justify-center text-white text-sm font-bold">
            AI
          </div>

          <div>
            <p className="text-gray-200 font-semibold">
              DermAI
            </p>

            <p className="text-xs text-gray-400">
              Skin Analysis Assistant
            </p>
          </div>

        </div>

        <div className="text-xs text-green-400">
          ● Online
        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}

      </div>

      <ImageUpload setMessages={setMessages} />

      <ChatInput />

    </div>
  )
}