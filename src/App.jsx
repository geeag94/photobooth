import { useState, useCallback } from 'react'
import PhotoFrame from './components/PhotoFrame'
import Controls from './components/Controls'
import TextOverlay from './components/TextOverlay'
import StickerToolbar from './components/StickerToolbar'
import StickerCanvas from './components/StickerCanvas'
import useImageDownload from './hooks/useImageDownload'

const bgColors = {
  '#000000': '#ffffff',
  '#FFB3BA': '#000000',
  '#FFDFBA': '#000000',
  '#FFFFBA': '#000000',
  '#BAFFC9': '#000000',
  '#BAE1FF': '#000000',
  '#E1BAFF': '#000000',
  '#FFB3E6': '#000000',
}

function App() {
  const [images, setImages] = useState([null, null, null, null])
  const [backgroundColor, setBackgroundColor] = useState('#000000')
  const [layout, setLayout] = useState('vertical')
  const [stickers, setStickers] = useState([])
  const [showStickers, setShowStickers] = useState(false)
  
  const { downloadRef, downloadImage } = useImageDownload()

  const handleImageChange = useCallback((index, imageData) => {
    setImages((prev) => {
      const next = [...prev]
      next[index] = imageData
      return next
    })
  }, [])

  const handleAddSticker = useCallback((stickerTemplate) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9)
    setStickers((prev) => [
      ...prev,
      {
        id,
        ...stickerTemplate,
        x: 50 + Math.random() * 100,
        y: 50 + Math.random() * 100,
        width: 40,
        height: 40,
      },
    ])
  }, [])

  const handleUpdateSticker = useCallback((id, updates) => {
    setStickers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    )
  }, [])

  const handleDeleteSticker = useCallback((id) => {
    setStickers((prev) => prev.filter((s) => s.id !== id))
  }, [])

  const textColor = bgColors[backgroundColor] || '#ffffff'

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          인생네컷 프레임
        </h1>

        <div className="w-full flex flex-col items-center gap-6">
          {/* Photo Frame with Download Ref */}
          <div ref={downloadRef} className="inline-block">
            <div className="relative">
              <PhotoFrame
                images={images}
                onImageChange={handleImageChange}
                backgroundColor={backgroundColor}
                layout={layout}
              >
                <div style={{ color: textColor }}>
                  <TextOverlay />
                </div>
              </PhotoFrame>
              
              {/* Sticker Canvas overlay */}
              {showStickers && (
                <StickerCanvas
                  stickers={stickers}
                  onUpdateSticker={handleUpdateSticker}
                  onDeleteSticker={handleDeleteSticker}
                />
              )}
            </div>
          </div>

          {/* Controls */}
          <Controls
            backgroundColor={backgroundColor}
            onColorChange={setBackgroundColor}
            layout={layout}
            onLayoutChange={setLayout}
            onDownload={downloadImage}
          />

          {/* Sticker Toggle */}
          <button
            onClick={() => setShowStickers(!showStickers)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              showStickers
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {showStickers ? '스티커 모드 끄기' : '스티커 추가하기'}
          </button>

          {/* Sticker Toolbar */}
          {showStickers && (
            <StickerToolbar onAddSticker={handleAddSticker} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
