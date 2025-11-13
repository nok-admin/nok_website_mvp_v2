'use client'

import { useState, useEffect } from 'react'

export default function InventoryTransform() {
  const [activeChannel, setActiveChannel] = useState(0)
  const [hoveredBox, setHoveredBox] = useState(null)

  const channels = [
    { 
      label: 'Brick & Mortar', 
      color: 'from-blue-500 to-blue-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      label: 'Off-Price Retail', 
      color: 'from-purple-500 to-purple-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    { 
      label: 'International Markets', 
      color: 'from-green-500 to-green-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChannel(prev => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const boxes = Array(8).fill(null)

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center p-8">
      <div className="relative max-w-2xl w-full">
        {/* Top: Inventory boxes */}
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-4 gap-3">
            {boxes.map((_, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredBox(i)}
                onMouseLeave={() => setHoveredBox(null)}
                className={`
                  relative w-16 h-16 rounded-lg transition-all duration-300 cursor-pointer
                  ${hoveredBox === i ? 'scale-110 shadow-lg' : 'scale-100'}
                `}
                style={{
                  background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                  border: '2px solid rgba(245, 158, 11, 0.3)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
              Excess Inventory
            </span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-orange-400" />
          </div>

          {/* Center arrow with animation */}
          <div className="relative py-4">
            <svg className="w-8 h-8 text-orange-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {/* Flowing particles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping" />
            </div>
          </div>

          {/* Bottom: Three channel cards */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {channels.map((channel, idx) => {
              const isActive = idx === activeChannel
              
              return (
                <div
                  key={idx}
                  className={`
                    relative rounded-xl p-4 transition-all duration-500 cursor-pointer
                    ${isActive ? 'scale-105 shadow-2xl' : 'scale-100 shadow-md hover:scale-102'}
                  `}
                  style={{
                    background: isActive 
                      ? (idx === 0 
                          ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                          : idx === 1
                          ? 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)'
                          : 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)')
                      : 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                    border: isActive ? 'none' : '2px solid #e5e7eb',
                  }}
                >
                  {/* Glow effect for active */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl opacity-50 blur-xl bg-gradient-to-br from-yellow-300 to-orange-300 -z-10" />
                  )}

                  {/* Icon */}
                  <div className={`flex justify-center mb-2 ${isActive ? 'animate-bounce' : ''}`} style={{ animationDuration: '1s' }}>
                    <div className={`
                      rounded-full p-3
                      ${isActive ? 'bg-white bg-opacity-20' : 'bg-gray-100'}
                    `}>
                      <div className={isActive ? 'text-white' : 'text-gray-600'}>
                        {channel.icon}
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <p className={`
                    text-center text-xs font-semibold leading-tight
                    ${isActive ? 'text-white' : 'text-gray-700'}
                  `}>
                    {channel.label}
                  </p>

                  {/* Active indicator dots */}
                  {isActive && (
                    <>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
                    </>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom label */}
          <div className="flex items-center gap-3 mt-2">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-green-400 to-green-500" />
            <span className="text-sm font-semibold text-green-600 whitespace-nowrap">
              Recovered Value
            </span>
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-green-400 to-green-500" />
          </div>
        </div>

        {/* Value indicators floating */}
        <div className="absolute -right-6 top-1/3 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0s' }}>
          <div className="bg-green-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg">
            +$
          </div>
        </div>
        
        <div className="absolute -left-6 top-1/2 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.7s' }}>
          <div className="bg-green-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg">
            +$
          </div>
        </div>

        <div className="absolute -right-4 bottom-1/4 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1.4s' }}>
          <div className="bg-green-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg">
            +$
          </div>
        </div>
      </div>
    </div>
  )
}

