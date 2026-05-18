const stickers = [
  { id: 'heart', type: 'shape', shape: 'heart', color: '#FF6B9D' },
  { id: 'star', type: 'shape', shape: 'star', color: '#FFD93D' },
  { id: 'circle', type: 'shape', shape: 'circle', color: '#6BCB77' },
  { id: 'square', type: 'shape', shape: 'square', color: '#4D96FF' },
  { id: 'triangle', type: 'shape', shape: 'triangle', color: '#FF8C42' },
  { id: 'diamond', type: 'shape', shape: 'diamond', color: '#9B59B6' },
  { id: 'moon', type: 'shape', shape: 'moon', color: '#74B9FF' },
  { id: 'sun', type: 'shape', shape: 'sun', color: '#FDCB6E' },
  { id: 'cloud', type: 'shape', shape: 'cloud', color: '#B2BEC3' },
  { id: 'lightning', type: 'shape', shape: 'lightning', color: '#FFEAA7' },
  { id: 'flower', type: 'shape', shape: 'flower', color: '#E84393' },
  { id: 'music', type: 'shape', shape: 'music', color: '#00B894' },
  { id: 'smile', type: 'shape', shape: 'smile', color: '#F39C12' },
  { id: 'cross', type: 'shape', shape: 'cross', color: '#E74C3C' },
]

function StickerIcon({ shape, color, size = 24 }) {
  const s = size
  
  switch (shape) {
    case 'heart':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    case 'star':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    case 'circle':
      return <div className="rounded-full" style={{ width: s, height: s, backgroundColor: color }} />
    case 'square':
      return <div className="rounded-sm" style={{ width: s, height: s, backgroundColor: color }} />
    case 'triangle':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L2 22h20L12 2z"/>
        </svg>
      )
    case 'diamond':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L2 12l10 10 10-10L12 2z"/>
        </svg>
      )
    case 'moon':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )
    case 'sun':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    case 'cloud':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      )
    case 'lightning':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    case 'flower':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l2.4 4.8L19.8 8 15.6 11.2 17.4 17 12 14.2 6.6 17l1.8-5.8L4.2 8l5.4-1.2L12 2z"/>
          <circle cx="12" cy="11" r="2.5" fill="#FFD93D"/>
        </svg>
      )
    case 'music':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M9 18V5l12-3v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        </svg>
      )
    case 'smile':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/>
          <circle cx="9" cy="10" r="1.5" fill={color}/>
          <circle cx="15" cy="10" r="1.5" fill={color}/>
          <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      )
    case 'cross':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2v20M2 12h20" stroke={color} strokeWidth="4" strokeLinecap="round"/>
        </svg>
      )
    default:
      return null
  }
}

export { stickers, StickerIcon }
