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
        onclone: (clonedDoc) => {
          // 클론된 DOM에서 input을 div로 교체하여 중앙 정렬 보장
          const inputs = clonedDoc.querySelectorAll('input[type="text"]')
          inputs.forEach(input => {
            const div = clonedDoc.createElement('div')
            div.textContent = input.value || ''
            div.style.cssText = window.getComputedStyle(input).cssText
            div.style.textAlign = 'center'
            div.style.width = '100%'
            div.style.display = 'block'
            div.style.border = 'none'
            div.style.background = 'transparent'
            div.style.fontSize = '1.125rem'
            div.style.fontWeight = 'bold'
            div.style.letterSpacing = '0.05em'
            div.style.color = input.style.color || 'inherit'
            input.parentNode.replaceChild(div, input)
          })
        }
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
