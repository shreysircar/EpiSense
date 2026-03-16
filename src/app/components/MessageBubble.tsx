type Props = {
  role: string
  content?: string
  image?: string
}

export default function MessageBubble({ role, content, image }: Props) {

  const isUser = role === "user"

  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : ""}`}>

      {!isUser && (
        <div className="w-8 h-8 rounded-full
        bg-gradient-to-r from-blue-500 to-purple-500
        flex items-center justify-center text-white text-xs">
          AI
        </div>
      )}

      <div className="max-w-[70%]">

        {image && (
          <img
            src={image}
            className="rounded-xl max-h-[220px] object-cover"
          />
        )}

        {content && (
          <div
            className={`p-4 rounded-2xl text-sm mt-2
            ${
              isUser
                ? "bg-blue-600 text-white"
                : "bg-[#1F2937] text-gray-200"
            }`}
          >
            {content}
          </div>
        )}

      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">
          U
        </div>
      )}

    </div>
  )
}