"use client"

type Props = {
  chats: any[]
  setChats: any
  currentChatId: string
  setCurrentChatId: (id: string) => void
}

export default function Sidebar({
  chats,
  setChats,
  currentChatId,
  setCurrentChatId
}: Props) {

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: []
    }

    setChats((prev: any) => [newChat, ...prev])
    setCurrentChatId(newChat.id)
  }

  return (
    <div className="w-64 h-full bg-[#020617] border-r border-[#1F2937] flex flex-col p-4">

      {/* New Chat Button */}
      <button
        onClick={createNewChat}
        className="w-full mb-4 p-2 rounded-lg bg-blue-600 text-white text-sm hover:opacity-90"
      >
        + New Chat
      </button>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto space-y-2">

        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setCurrentChatId(chat.id)}
            className={`p-2 rounded-lg cursor-pointer text-sm transition
              ${chat.id === currentChatId
                ? "bg-[#1F2937] text-white"
                : "text-gray-400 hover:bg-[#1F2937]"
              }`}
          >
            {chat.title || "Untitled Chat"}
          </div>
        ))}

      </div>

    </div>
  )
}