import { useState } from 'react'

function TextOverlay() {
  const [customText, setCustomText] = useState('')
  
  const today = new Date()
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`

  return (
    <div className="py-2 w-full">
      <p className="text-sm opacity-70 tracking-widest font-medium text-center w-full mb-1">
        {dateStr}
      </p>
      <div className="w-full text-center">
        <input
          type="text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="문구를 입력하세요"
          className="bg-transparent text-lg font-bold tracking-wide outline-none placeholder:opacity-40 border-none"
          style={{ 
            color: 'inherit',
            textAlign: 'center',
            width: '100%',
            display: 'block'
          }}
        />
      </div>
    </div>
  )
}

export default TextOverlay
