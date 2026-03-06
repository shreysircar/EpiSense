"use client"

export default function ImageUpload() {

  return (
    <div className="px-4 pb-3">

      <div className="border-2 border-dashed border-[#374151]
      rounded-xl
      p-4
      text-center
      text-sm
      text-gray-400
      hover:border-blue-500
      transition">

        Drag & drop skin image here

        <br />

        <span className="text-xs text-gray-500">
          or click to upload
        </span>

        <input
          type="file"
          accept="image/*"
          className="hidden"
        />

      </div>

    </div>
  )
}