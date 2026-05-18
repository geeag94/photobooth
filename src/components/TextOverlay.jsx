import { useState } from 'react'

function TextOverlay() {
  const [customText, setCustomText] = useState('')
  
  const today = new Date()
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`

  return (
    <div className="flex flex-col items-center justify-center gap-1 py-2 w-full">
      <p className="text-sm opacity-70 tracking-widest font-medium text-center w-full">
        {dateStr}
      </p>
      <input
        type="text"
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        placeholder="문구를 입력하세요"
        className="bg-transparent text-center text-lg font-bold tracking-wide outline-none placeholder:opacity-40 w-full block"
        style={{ color: 'inherit' }}
      />
    </div>
  )
}

export default TextOverlay
