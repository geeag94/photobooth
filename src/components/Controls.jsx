const colors = [
  { name: 'Black', value: '#000000', textColor: '#ffffff' },
  { name: 'Pastel Red', value: '#FFB3BA', textColor: '#000000' },
  { name: 'Pastel Orange', value: '#FFDFBA', textColor: '#000000' },
  { name: 'Pastel Yellow', value: '#FFFFBA', textColor: '#000000' },
  { name: 'Pastel Green', value: '#BAFFC9', textColor: '#000000' },
  { name: 'Pastel Blue', value: '#BAE1FF', textColor: '#000000' },
  { name: 'Pastel Indigo', value: '#E1BAFF', textColor: '#000000' },
  { name: 'Pastel Violet', value: '#FFB3E6', textColor: '#000000' },
]

function Controls({ backgroundColor, onColorChange, layout, onLayoutChange, onDownload }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      {/* 레이아웃 전환 */}
      <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
        <button
          onClick={() => onLayoutChange('vertical')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            layout === 'vertical'
              ? 'bg-gray-900 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          세로 4컷
        </button>
        <button
          onClick={() => onLayoutChange('horizontal')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            layout === 'horizontal'
              ? 'bg-gray-900 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          가로 4컷
        </button>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => onColorChange(color.value)}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
              backgroundColor === color.value
                ? 'border-gray-800 scale-110 shadow-lg'
                : 'border-gray-300 hover:scale-105'
            }`}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
      
      <button
        onClick={onDownload}
        className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        네컷 저장하기
      </button>
    </div>
  )
}

export default Controls
