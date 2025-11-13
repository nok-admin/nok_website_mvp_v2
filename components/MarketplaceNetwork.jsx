'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ShoppingCart, TrendingUp, Globe, CheckCircle } from 'lucide-react'

export default function MarketplaceNetwork() {
  const [activeMarketplace, setActiveMarketplace] = useState(0)
  const [pulseRing, setPulseRing] = useState(0)

  const marketplaces = [
    { 
      name: 'Amazon Renewed',
      logo: '/logos/Amazon.svg',
    },
    { 
      name: 'eBay Refurbished',
      logo: '/logos/ebay.png',
    },
    { 
      name: 'Walmart Restored',
      logo: '/logos/Walmart.svg',
    },
    { 
      name: 'Best Buy Outlet',
      logo: '/logos/Best_Buy.webp',
    }
  ]

  useEffect(() => {
    const marketplaceInterval = setInterval(() => {
      setActiveMarketplace(prev => (prev + 1) % marketplaces.length)
    }, 2000)

    const pulseInterval = setInterval(() => {
      setPulseRing(prev => (prev + 1) % 3)
    }, 600)

    return () => {
      clearInterval(marketplaceInterval)
      clearInterval(pulseInterval)
    }
  }, [marketplaces.length])

  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative w-full max-w-5xl h-full">
        {/* SVG for connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {/* Top Left */}
          <line
            x1="50%"
            y1="50%"
            x2="20%"
            y2="20%"
            stroke={activeMarketplace === 2 ? '#3b82f6' : '#cbd5e1'}
            strokeWidth={activeMarketplace === 2 ? '3' : '2'}
            strokeDasharray={activeMarketplace === 2 ? '0' : '8,4'}
            className="transition-all duration-500"
          />
          {activeMarketplace === 2 && (
            <circle r="4" fill="#3b82f6">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 50% 50% L 20% 20%" />
            </circle>
          )}

          {/* Top Right */}
          <line
            x1="50%"
            y1="50%"
            x2="80%"
            y2="20%"
            stroke={activeMarketplace === 3 ? '#3b82f6' : '#cbd5e1'}
            strokeWidth={activeMarketplace === 3 ? '3' : '2'}
            strokeDasharray={activeMarketplace === 3 ? '0' : '8,4'}
            className="transition-all duration-500"
          />
          {activeMarketplace === 3 && (
            <circle r="4" fill="#3b82f6">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 50% 50% L 80% 20%" />
            </circle>
          )}

          {/* Bottom Left */}
          <line
            x1="50%"
            y1="50%"
            x2="20%"
            y2="80%"
            stroke={activeMarketplace === 0 ? '#3b82f6' : '#cbd5e1'}
            strokeWidth={activeMarketplace === 0 ? '3' : '2'}
            strokeDasharray={activeMarketplace === 0 ? '0' : '8,4'}
            className="transition-all duration-500"
          />
          {activeMarketplace === 0 && (
            <circle r="4" fill="#3b82f6">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 50% 50% L 20% 80%" />
            </circle>
          )}

          {/* Bottom Right */}
          <line
            x1="50%"
            y1="50%"
            x2="80%"
            y2="80%"
            stroke={activeMarketplace === 1 ? '#3b82f6' : '#cbd5e1'}
            strokeWidth={activeMarketplace === 1 ? '3' : '2'}
            strokeDasharray={activeMarketplace === 1 ? '0' : '8,4'}
            className="transition-all duration-500"
          />
          {activeMarketplace === 1 && (
            <circle r="4" fill="#3b82f6">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 50% 50% L 80% 80%" />
            </circle>
          )}
        </svg>

        {/* Center hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 20 }}>
          <div className="relative">
            {/* Pulsing rings */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400 transition-all duration-1000 ${
                  pulseRing === i ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  width: `${100 + i * 35}px`,
                  height: `${100 + i * 35}px`,
                }}
              />
            ))}

            {/* Central node */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-24 h-24 sm:w-28 sm:h-28 shadow-xl flex flex-col items-center justify-center gap-1">
              <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <span className="text-white font-bold text-base sm:text-lg">NOK</span>
            </div>

            {/* Orbiting data particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full shadow-lg"
                style={{
                  animation: `orbit 8s linear infinite`,
                  animationDelay: `${i * 1.3}s`,
                  transformOrigin: '0 0'
                }}
              />
            ))}
          </div>
        </div>

        {/* Marketplace nodes - positioned absolutely */}
        {/* Top Left - Walmart */}
        <div 
          className="absolute top-[8%] left-[5%] sm:top-[10%] sm:left-[8%]"
          style={{ zIndex: 15 }}
        >
          <MarketplaceCard 
            marketplace={marketplaces[2]} 
            isActive={activeMarketplace === 2} 
          />
        </div>

        {/* Top Right - Best Buy */}
        <div 
          className="absolute top-[8%] right-[5%] sm:top-[10%] sm:right-[8%]"
          style={{ zIndex: 15 }}
        >
          <MarketplaceCard 
            marketplace={marketplaces[3]} 
            isActive={activeMarketplace === 3} 
          />
        </div>

        {/* Bottom Left - Amazon */}
        <div 
          className="absolute bottom-[8%] left-[5%] sm:bottom-[10%] sm:left-[8%]"
          style={{ zIndex: 15 }}
        >
          <MarketplaceCard 
            marketplace={marketplaces[0]} 
            isActive={activeMarketplace === 0} 
          />
        </div>

        {/* Bottom Right - eBay */}
        <div 
          className="absolute bottom-[8%] right-[5%] sm:bottom-[10%] sm:right-[8%]"
          style={{ zIndex: 15 }}
        >
          <MarketplaceCard 
            marketplace={marketplaces[1]} 
            isActive={activeMarketplace === 1} 
          />
        </div>

        {/* Floating benefits - positioned to avoid overlap */}
        <div className="absolute top-[45%] left-0 sm:left-4 animate-bounce z-30" style={{ animationDuration: '3s', animationDelay: '0s' }}>
          <div className="bg-purple-500 text-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold">Compliant</span>
          </div>
        </div>

        <div className="absolute top-[45%] right-0 sm:right-4 animate-bounce z-30" style={{ animationDuration: '3s', animationDelay: '1s' }}>
          <div className="bg-green-500 text-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold">Auto-Listed</span>
          </div>
        </div>

        <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 animate-bounce z-30" style={{ animationDuration: '3s', animationDelay: '2s' }}>
          <div className="bg-blue-500 text-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Automated</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(70px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(70px) rotate(-360deg);
          }
        }
        
        @media (min-width: 640px) {
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(90px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(90px) rotate(-360deg);
            }
          }
        }
      `}</style>
    </div>
  )
}

function MarketplaceCard({ marketplace, isActive }) {
  return (
    <div
      className={`relative bg-white rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-500 cursor-pointer border-2 ${
        isActive ? 'scale-110 shadow-2xl border-blue-400' : 'scale-100 border-gray-200 hover:scale-105'
      }`}
      style={{ minWidth: '140px', maxWidth: '180px' }}
    >
      {/* Glow effect */}
      {isActive && (
        <div className="absolute inset-0 rounded-xl bg-blue-400 opacity-20 blur-xl -z-10" />
      )}

      {/* Logo */}
      <div className="flex justify-center mb-2 sm:mb-3">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center bg-white border border-gray-200 shadow-md p-2">
          <Image
            src={marketplace.logo}
            alt={marketplace.name}
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Name */}
      <p className="text-center text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
        {marketplace.name}
      </p>

      {/* Status indicator */}
      <div className="flex items-center justify-center gap-1">
        <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 ${isActive ? 'text-green-500' : 'text-gray-400'}`} />
        <span className={`text-xs font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
          {isActive ? 'Active' : 'Certified'}
        </span>
      </div>

      {/* Activity indicator */}
      {isActive && (
        <div className="absolute -top-2 -right-2 flex gap-1">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <div className="w-3 h-3 bg-green-500 rounded-full absolute" />
        </div>
      )}
    </div>
  )
}

