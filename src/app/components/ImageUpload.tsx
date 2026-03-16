"use client"

import { useRef } from "react"

export default function ImageUpload({ setMessages }: any) {

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

const handleFile = async (e: any) => {

  const file = e.target.files[0]
  if (!file) return

  const imageURL = URL.createObjectURL(file)

  // show user image + AI thinking
  setMessages((prev: any) => [
    ...prev,
    {
      role: "user",
      image: imageURL
    },
    {
      role: "assistant",
      content: "Analyzing skin image..."
    }
  ])

  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData
  })

  const data = await res.json()

  setMessages((prev: any) => [
    ...prev,
    {
content: `🧬 Diagnosis: ${data.disease}

📊 Confidence: ${(data.confidence * 100).toFixed(2)}%

${data.explanation || ""}`
    }
  ])
}

  return (
    <div className="px-4 pb-3">

      <div
        onClick={handleClick}
        className="border-2 border-dashed border-[#374151]
        rounded-xl
        p-4
        text-center
        text-sm
        text-gray-400
        hover:border-blue-500
        cursor-pointer
        transition"
      >

        Drag & drop skin image here

        <br />

        <span className="text-xs text-gray-500">
          or click to upload
        </span>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />

      </div>

    </div>
  )
}