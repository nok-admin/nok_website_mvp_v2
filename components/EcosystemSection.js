'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function EcosystemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  const pins = [
    { id: 1, name: 'Tijuana', top: 75.0, left: 33.4 },
    { id: 2, name: 'California', top: 65.0, left: 33.4 },
    { id: 3, name: 'Dallas', top: 68.8, left: 39.6 },
    { id: 4, name: 'Ohio', top: 60.0, left: 42.2 },
    { id: 5, name: 'Windsor', top: 48.8, left: 41.2 },
    { id: 6, name: 'Ontario', top: 53.8, left: 46.3 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const integrations = [
    {
      title: 'Inbound & Processing',
      description: 'AI-powered disposition engine routes every return instantly to maximize recovery value.',
      partners: [
        { name: 'Oracle', logo: '/logos/Oracle.png' },
        { name: 'Microsoft Dynamics', logo: '/logos/Microsoft-Dynamics-365.webp' },
        { name: 'ShipBob', logo: '/logos/shipbob.png' },
        { name: 'Extensiv', logo: '/logos/extensiv.png' },
        { name: 'Loop', logo: '/logos/Loop.svg' },
        { name: 'Narvar', logo: '/logos/Narvar.svg' },
        { name: 'Parcel Labs', logo: '/logos/parcel_labs.png' },
        { name: '+ More', logo: null }
      ]
    },
    {
      title: 'Refurbishment & Repair',
      description: 'Network of facilities across North America restore products to warranty-grade standards.',
      partners: []
    },
    {
      title: 'Multi-Channel Recovery',
      description: 'Sell refurbished products across marketplaces, D2C, trade-in programs, and warranty solutions.',
      partners: [
        { name: 'Amazon', logo: '/logos/Amazon.svg' },
        { name: 'eBay', logo: '/logos/ebay.png' },
        { name: 'Shopify', logo: '/logos/Shopify.svg' },
        { name: 'Target', logo: '/logos/Target.svg' },
        { name: 'Walmart', logo: '/logos/Walmart.svg' },
        { name: 'Best Buy', logo: '/logos/Best_Buy.webp' },
        { name: 'Mercari', logo: '/logos/Mercari.svg' },
        { name: '+ More', logo: null }
      ]
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-50 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header with Globe */}
        <div className="relative mb-12">
          
          {/* Globe positioned bottom-right of header area */}
          <div 
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{ transform: 'translate(18%, 50%)' }}
          >
            <div className="globe-mask-wrapper">
              <div className="globe-pattern">
                <svg className="connection-lines" viewBox="0 0 630 630" xmlns="http://www.w3.org/2000/svg">
                  <line x1="35" y1="35" x2="105" y2="35" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" className="connect-line" />
                  <line x1="140" y1="35" x2="210" y2="35" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" className="connect-line" />
                  <line x1="35" y1="87" x2="105" y2="87" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="0.5" className="connect-line" />
                  <line x1="175" y1="87" x2="245" y2="87" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="0.5" className="connect-line" />
                  <line x1="70" y1="35" x2="70" y2="105" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" className="connect-line" />
                  <line x1="175" y1="35" x2="175" y2="105" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" className="connect-line" />
                  <line x1="105" y1="70" x2="105" y2="140" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="0.5" className="connect-line" />
                  <line x1="35" y1="35" x2="87" y2="87" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="0.5" className="connect-line" />
                  <line x1="105" y1="35" x2="157" y2="87" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="0.5" className="connect-line" />
                  <line x1="175" y1="35" x2="227" y2="87" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="0.5" className="connect-line" />
                  <line x1="70" y1="70" x2="122" y2="122" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="0.5" className="connect-line" />
                  <line x1="210" y1="140" x2="280" y2="140" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" className="connect-line" />
                  <line x1="245" y1="175" x2="315" y2="175" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" className="connect-line" />
                  <line x1="280" y1="210" x2="350" y2="210" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="0.5" className="connect-line" />
                  <line x1="245" y1="105" x2="245" y2="175" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" className="connect-line" />
                  <line x1="315" y1="140" x2="315" y2="210" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="0.5" className="connect-line" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-cyan-500"></div>
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Ecosystem</p>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
              Built to integrate across your entire <span className="holographic-text">ecosystem</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Seamlessly connect with every platform in your returns journey—from customer-facing portals to backend logistics and resale channels.
            </p>
          </div>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="integration-category"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {integration.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {integration.description}
              </p>
              
              {/* Show map for Refurbishment & Repair */}
              {integration.title === 'Refurbishment & Repair' ? (
                <div>
                  <div className="relative h-20 rounded-xl overflow-hidden mb-6">
                    {/* North America Map Background */}
                    <div 
                      className="absolute opacity-20"
                      style={{
                        backgroundImage: 'url(/north-america.png)',
                        backgroundSize: '35%',
                        backgroundPosition: '45% 50%',
                        backgroundRepeat: 'no-repeat',
                        filter: 'brightness(0) saturate(100%) invert(69%) sepia(54%) saturate(1500%) hue-rotate(155deg) brightness(95%) contrast(101%)',
                        transform: 'rotate(-4deg)',
                        top: '-25%',
                        left: '-25%',
                        right: '-25%',
                        bottom: '-25%'
                      }}
                    />
                    
                    {/* Connection lines between pins - curved like flight paths */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }} viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Connect pins in a network pattern with curved paths */}
                      {/* Tijuana to California */}
                      <path d="M 33.4 75 Q 31 70, 33.4 65" stroke="rgb(6, 182, 212)" strokeWidth="0.3" opacity="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                      {/* California to Dallas */}
                      <path d="M 33.4 65 Q 35 64, 39.6 68.8" stroke="rgb(6, 182, 212)" strokeWidth="0.3" opacity="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                      {/* Dallas to Ohio */}
                      <path d="M 39.6 68.8 Q 41.5 66, 42.2 60" stroke="rgb(6, 182, 212)" strokeWidth="0.3" opacity="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                      {/* Ohio to Windsor */}
                      <path d="M 42.2 60 Q 40 53, 41.2 48.8" stroke="rgb(6, 182, 212)" strokeWidth="0.3" opacity="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                      {/* Windsor to Ontario */}
                      <path d="M 41.2 48.8 Q 44 50, 46.3 53.8" stroke="rgb(6, 182, 212)" strokeWidth="0.3" opacity="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                      {/* Ontario to Ohio (closing loop) */}
                      <path d="M 46.3 53.8 Q 45 58, 42.2 60" stroke="rgb(6, 182, 212)" strokeWidth="0.3" opacity="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                      {/* California to Ohio (cross connection) */}
                      <path d="M 33.4 65 Q 36 61, 42.2 60" stroke="rgb(6, 182, 212)" strokeWidth="0.3" opacity="0.4" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                    
                    {/* Location pins - LOCKED */}
                    <div className="relative w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                      {pins.map(pin => (
                        <div 
                          key={pin.id}
                          className="absolute"
                          style={{ 
                            top: `${pin.top}%`, 
                            left: `${pin.left}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <div className="w-1 h-1 bg-cyan-500 rounded-full shadow-md shadow-cyan-500/50"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* WMS/Inventory Partner logos */}
                  <div className="flex flex-wrap items-center gap-4">
                    {integration.partners.map((partner, idx) => (
                      <div 
                        key={idx}
                        className="partner-logo-item"
                      >
                        {partner.logo ? (
                          <div className="relative w-16 h-8">
                            <Image
                              src={partner.logo}
                              alt={partner.name}
                              fill
                              className="object-contain"
                              sizes="64px"
                              style={{ filter: 'brightness(0) saturate(0)' }}
                            />
                          </div>
                        ) : (
                          <span className="text-gray-900 font-semibold text-sm">
                            {partner.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Partner logos */
                <div className="flex flex-wrap items-center gap-4">
                  {integration.partners.map((partner, idx) => (
                    <div 
                      key={idx}
                      className="partner-logo-item"
                    >
                      {partner.logo ? (
                        <div className="relative w-16 h-8">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                            sizes="64px"
                            style={{ filter: 'brightness(0) saturate(0)' }}
                          />
                        </div>
                      ) : (
                        <span className="text-gray-900 font-semibold text-sm">
                          {partner.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Holographic text effect */
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

        .integration-category {
          will-change: transform, opacity;
        }

        .partner-logo-item {
          transition: transform 0.2s ease;
        }

        .partner-logo-item:hover {
          transform: scale(1.05);
        }

        .logo-black-wrapper,
        .logo-black-wrapper img,
        .logo-black-wrapper :global(img) {
          filter: brightness(0) saturate(0) !important;
        }

        .brand-logo-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .brand-logo {
          filter: grayscale(100%);
          opacity: 0.6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .brand-logo-container:hover .brand-logo {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }

        /* Globe styles */
        .globe-mask-wrapper {
          position: relative;
          width: 630px;
          height: 630px;
          border-radius: 50%;
          overflow: hidden;
          mask-image: 
            linear-gradient(to right, 
              transparent 0%, 
              rgba(0, 0, 0, 0.3) 15%,
              rgba(0, 0, 0, 0.7) 30%,
              black 45%, 
              black 100%
            ),
            linear-gradient(to bottom,
              black 0%,
              black 30%,
              rgba(0, 0, 0, 0.6) 50%,
              rgba(0, 0, 0, 0.2) 70%,
              transparent 85%
            ),
            radial-gradient(
              circle at center,
              black 0%,
              black 35%,
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 0.5) 70%,
              transparent 90%
            );
          -webkit-mask-image: 
            linear-gradient(to right, 
              transparent 0%, 
              rgba(0, 0, 0, 0.3) 15%,
              rgba(0, 0, 0, 0.7) 30%,
              black 45%, 
              black 100%
            ),
            linear-gradient(to bottom,
              black 0%,
              black 30%,
              rgba(0, 0, 0, 0.6) 50%,
              rgba(0, 0, 0, 0.2) 70%,
              transparent 85%
            ),
            radial-gradient(
              circle at center,
              black 0%,
              black 35%,
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 0.5) 70%,
              transparent 90%
            );
          mask-composite: intersect;
          -webkit-mask-composite: source-in;
        }

        .globe-pattern {
          position: relative;
          width: 630px;
          height: 630px;
          border-radius: 50%;
          background-image: 
            radial-gradient(circle, rgba(6, 182, 212, 0.5) 2px, transparent 2px),
            radial-gradient(circle, rgba(6, 182, 212, 0.3) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgba(6, 182, 212, 0.15) 1px, transparent 1px);
          background-size: 
            35px 35px,
            52px 52px,
            70px 70px;
          background-position: 0 0, 17.5px 17.5px, 35px 35px;
          opacity: 0.7;
          box-shadow: 
            inset 100px 0px 150px rgba(6, 78, 120, 0.5),
            inset 80px 40px 120px rgba(6, 120, 160, 0.4),
            inset -40px -40px 80px rgba(6, 182, 212, 0.25),
            0 20px 60px rgba(6, 182, 212, 0.15),
            0 0 80px rgba(6, 182, 212, 0.1);
          animation: simpleRotate 120s linear infinite;
        }

        .globe-pattern::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: 
            radial-gradient(
              ellipse 40% 80% at 0% 50%,
              rgba(6, 78, 120, 0.35) 0%,
              rgba(6, 120, 160, 0.25) 20%,
              transparent 50%
            ),
            radial-gradient(
              ellipse 60% 60% at 70% 70%,
              rgba(6, 182, 212, 0.35) 0%,
              rgba(14, 165, 233, 0.25) 15%,
              rgba(6, 182, 212, 0.15) 30%,
              transparent 50%
            );
          animation: gentleShimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .globe-pattern::after {
          content: '';
          position: absolute;
          inset: -15px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            transparent 48%,
            rgba(6, 182, 212, 0.06) 75%,
            rgba(6, 182, 212, 0.12) 88%,
            transparent 100%
          );
          animation: atmospherePulse 10s ease-in-out infinite;
          pointer-events: none;
          filter: blur(12px);
        }

        .connection-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          pointer-events: none;
        }

        .connect-line {
          animation: lineFlow 4s ease-in-out infinite;
        }

        @keyframes lineFlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes simpleRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gentleShimmer {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes atmospherePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}
