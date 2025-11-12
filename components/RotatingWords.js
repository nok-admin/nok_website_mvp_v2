'use client'

import { useState, useEffect } from 'react'

export default function RotatingWords({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className="inline-block relative whitespace-nowrap" style={{ lineHeight: '1', verticalAlign: 'baseline' }}>
      <span
        className={`inline-block transition-all duration-300 holographic-text font-semibold whitespace-nowrap ${
          isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {words[currentIndex]}
      </span>
      
      <style jsx>{`
        .holographic-text {
          background: linear-gradient(
            90deg,
            #06b6d4 0%,
            #3b82f6 25%,
            #8b5cf6 50%,
            #ec4899 75%,
            #06b6d4 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: holographicShift 8s linear infinite;
        }

        @keyframes holographicShift {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </span>
  )
}

