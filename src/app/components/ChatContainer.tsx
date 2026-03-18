"use client"

import { useEffect, useRef } from "react"
import MessageBubble from "./MessageBubble"
import ChatInput from "./ChatInput"
import ImageUpload from "./ImageUpload"

export default function ChatContainer({
  messages,
  setChats,
  currentChatId
}: any) {

  const bottomRef = useRef<HTMLDivElement | null>(null)

  const addMessage = (newMessage: any) => {
    setChats((prev: any) =>
      prev.map((chat: any) => {
        if (chat.id !== currentChatId) return chat

        // Auto-title (first user message)
        let newTitle = chat.title
        if (
          chat.title === "New Chat" &&
          newMessage.role === "user" &&
          newMessage.content
        ) {
          newTitle = newMessage.content.slice(0, 25)
        }

        return {
          ...chat,
          title: newTitle,
          messages: [...chat.messages, newMessage]
        }
      })
    )
  }

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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
        {messages.map((m: any, i: number) => (
          <MessageBubble
            key={i}
            role={m.role}
            content={m.content}
            image={m.image}
          />
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Inputs */}
      <ImageUpload addMessage={addMessage} />
      <ChatInput addMessage={addMessage} />

    </div>
  )
}