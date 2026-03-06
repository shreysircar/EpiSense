"use client"

export default function ChatInput() {

  return (
    <div className="p-4 border-t border-[#1F2937] bg-[#111827]">

      <div className="flex items-center gap-3
      bg-[#1F2937]
      border border-[#374151]
      rounded-xl
      px-3 py-2">

        <input
          type="text"
          placeholder="Ask about the skin condition..."
          className="flex-1 bg-transparent outline-none text-gray-200 text-sm"
        />

        <button
          className="px-4 py-1.5 text-sm text-white
          rounded-lg
          bg-gradient-to-r from-blue-500 to-purple-500">
          Send
        </button>

      </div>

    </div>
  )
}