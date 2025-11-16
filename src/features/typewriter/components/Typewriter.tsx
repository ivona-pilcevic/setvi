import React, { useEffect, useState } from 'react'

interface IProps {
  text: string
  onDone?: () => void
}

const Typewriter: React.FC<IProps> = ({ text, onDone }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (!isComplete) {
        setIsComplete(true)
        onDone?.()
      }
      return
    }

    const currentChar = text[currentIndex]
    const isPunctuation = /[.,!?]/.test(currentChar)
    const delay = isPunctuation ? 100 : 35

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + currentChar)
      setCurrentIndex((prev) => prev + 1)
    }, delay)

    return () => clearTimeout(timer)
  }, [currentIndex, text, isComplete, onDone])

  return (
    <div>
      <span>{displayedText}</span>
      {!isComplete && <span>|</span>}
    </div>
  )
}

export default Typewriter
