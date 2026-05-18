import { useRef, useCallback } from 'react'
import { Rnd } from 'react-rnd'
import { StickerIcon } from './StickerIcons'

function StickerCanvas({ stickers, onUpdateSticker, onDeleteSticker }) {
  const lastTapRef = useRef({})

  const handleDoubleClick = useCallback((stickerId) => {
    onDeleteSticker(stickerId)
  }, [onDeleteSticker])

  const handleTouchStart = useCallback((e, stickerId) => {
    const now = Date.now()
    const lastTap = lastTapRef.current[stickerId] || 0
    
    if (now - lastTap < 300) {
      e.preventDefault()
      onDeleteSticker(stickerId)
    }
    
    lastTapRef.current[stickerId] = now
  }, [onDeleteSticker])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stickers.map((sticker) => (
        <Rnd
          key={sticker.id}
          default={{
            x: sticker.x,
            y: sticker.y,
            width: sticker.width,
            height: sticker.height,
          }}
          onDragStop={(e, d) => {
            onUpdateSticker(sticker.id, { x: d.x, y: d.y })
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            onUpdateSticker(sticker.id, {
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              ...position,
            })
          }}
          bounds="parent"
          className="pointer-events-auto"
          style={{ zIndex: 10 }}
        >
          <div 
            className="relative w-full h-full"
            onDoubleClick={() => handleDoubleClick(sticker.id)}
            onTouchStart={(e) => handleTouchStart(e, sticker.id)}
          >
            <StickerIcon shape={sticker.shape} color={sticker.color} size="100%" />
          </div>
        </Rnd>
      ))}
    </div>
  )
}

export default StickerCanvas
