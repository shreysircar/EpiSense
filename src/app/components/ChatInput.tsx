"use client"

import { useState } from "react"

type Props = {
  addMessage: (msg: any) => void
}

export default function ChatInput({ addMessage }: Props) {
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    addMessage({
      role: "user",
      content: input
    })

    setTimeout(() => {
      addMessage({
        role: "assistant",
        content:
          "This is a simulated response. Please ask about the skin analysis."
      })
    }, 1000)

    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <div className="p-4 border-t border-[#1F2937] bg-[#111827]">
      <div className="flex items-center gap-3 bg-[#1F2937] border border-[#374151] rounded-xl px-3 py-2">
        <input
          type="text"
          placeholder="Ask about the skin condition..."
          className="flex-1 bg-transparent outline-none text-gray-200 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button
          onClick={handleSend}
          className="px-4 py-1.5 text-sm text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Send
        </button>
      </div>
    </div>
  )
}