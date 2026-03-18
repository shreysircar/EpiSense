"use client"
import { useState, useEffect } from "react"
import ChatContainer from "./components/ChatContainer"
import Sidebar from "./components/Sidebar"

type Message = {
  role: "user" | "assistant"
  content?: string
  image?: string
}

type Chat = {
  id: string
  title: string
  messages: Message[]
}

export default function Home() {

  const [chats, setChats] = useState<Chat[]>([
    {
      id: "1",
      title: "New Chat",
      messages: [
        {
          role: "assistant",
          content:
            "Hello! Upload a skin image and I will analyze it for possible dermatological conditions."
        }
      ]
    }
  ])

  const [currentChatId, setCurrentChatId] = useState("1")

  // 🔥 Load chats
  useEffect(() => {
    const savedChats = localStorage.getItem("chats")
    if (savedChats) {
      setChats(JSON.parse(savedChats))
    }
  }, [])

  // 🔥 Save chats
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats))
  }, [chats])

const currentChat =
  chats.find(c => c.id === currentChatId) || chats[0]

  return (
<main className="h-screen flex
bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#020617]">

  <Sidebar
    chats={chats}
    setChats={setChats}
    currentChatId={currentChatId}
    setCurrentChatId={setCurrentChatId}
  />

  <div className="flex-1 flex items-center justify-center">
    <ChatContainer
      messages={currentChat.messages}
      setChats={setChats}
      currentChatId={currentChatId}
    />
  </div>

</main>
  )
}