import { useRef, useCallback } from 'react'
import html2canvas from 'html2canvas'

function useImageDownload() {
  const downloadRef = useRef(null)

  const downloadImage = useCallback(async (filename = '인생네컷.png') => {
    if (!downloadRef.current) return

    try {
      const canvas = await html2canvas(downloadRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      })

      const link = document.createElement('a')
      link.download = filename
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('이미지 저장 실패:', error)
      alert('이미지 저장에 실패했습니다.')
    }
  }, [])

  return { downloadRef, downloadImage }
}

export default useImageDownload
