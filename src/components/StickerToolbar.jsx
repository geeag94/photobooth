import { stickers, StickerIcon } from './StickerIcons'

function StickerToolbar({ onAddSticker }) {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {stickers.map((sticker) => (
        <button
          key={sticker.id}
          onClick={() => onAddSticker(sticker)}
          className="w-12 h-12 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
        >
          <StickerIcon shape={sticker.shape} color={sticker.color} size={24} />
        </button>
      ))}
    </div>
  )
}

export default StickerToolbar
