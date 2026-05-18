import PhotoSlot from './PhotoSlot'

function PhotoFrame({ images, onImageChange, backgroundColor, layout, children }) {
  const isVertical = layout === 'vertical'
  
  return (
    <div
      className="relative inline-block p-5 shadow-2xl"
      style={{
        backgroundColor,
        boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1)',
      }}
    >
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className={`relative gap-[10px] ${isVertical ? 'flex flex-col max-w-[280px]' : 'grid grid-cols-2 max-w-[340px]'}`}>
        {images.map((image, index) => (
          <PhotoSlot
            key={index}
            index={index}
            image={image}
            onImageChange={onImageChange}
          />
        ))}
      </div>

      {/* 하단 여백 (문구 영역) */}
      <div className="mt-4 text-center">
        {children}
      </div>
    </div>
  )
}

export default PhotoFrame
