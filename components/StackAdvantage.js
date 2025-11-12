'use client'

import { useEffect, useRef, useState } from 'react'

export default function StackAdvantage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [verticalOffset, setVerticalOffset] = useState(400) // Distance to move
  const [initialOffset, setInitialOffset] = useState(0) // Initial centering offset
  const containerRef = useRef(null)
  const beforeRef = useRef(null)
  const afterRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !beforeRef.current || !afterRef.current) return

      const beforeRect = beforeRef.current.getBoundingClientRect()
      const afterRect = afterRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportMiddle = viewportHeight / 2

      // Calculate which section is more centered in viewport
      const beforeDistance = Math.abs(beforeRect.top + beforeRect.height / 2 - viewportMiddle)
      const afterDistance = Math.abs(afterRect.top + afterRect.height / 2 - viewportMiddle)

      // Add bias: After NOK needs to be significantly closer to win
      // This makes it stay in Before state longer and switch back to Before sooner
      const bias = 150 // After needs to be 150px closer to trigger transition
      
      if (afterDistance + bias < beforeDistance) {
        setScrollProgress(1) // Collapsed state
      } else {
        setScrollProgress(0) // Expanded state
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate positioning to center stack with each section
  useEffect(() => {
    const calculateOffsets = () => {
      if (!beforeRef.current || !afterRef.current) return

      // Get positions using offsetTop (relative to document)
      const beforeTop = beforeRef.current.offsetTop
      const beforeHeight = beforeRef.current.offsetHeight
      const afterTop = afterRef.current.offsetTop
      const afterHeight = afterRef.current.offsetHeight
      
      // Calculate centers of each section
      const beforeCenter = beforeTop + beforeHeight / 2
      const afterCenter = afterTop + afterHeight / 2
      
      // Distance between the two centers
      const distance = afterCenter - beforeCenter
      
      // Initial offset to center stack with "Before NOK" section
      // Assumes stack container height is ~450px, so center is ~225px
        const stackCenterOffset = 225
        const cardPaddingAdjustment = 80 // Increased to push Before NOK stack up
        const beforeExtraAdjustment = 15 // Fine-tune Before NOK position
        const initialCentering = beforeCenter - stackCenterOffset - cardPaddingAdjustment - beforeExtraAdjustment
      
      // Apply upward adjustment only to the After NOK position
      const upwardAdjustment = 60 // Shift After NOK stack up (fine-tuned for alignment)
      const adjustedDistance = distance - upwardAdjustment
      
      console.log('Before NOK center:', beforeCenter, 'px')
      console.log('After NOK center:', afterCenter, 'px')
      console.log('Initial offset (to center with Before):', initialCentering, 'px')
      console.log('Movement distance:', adjustedDistance, 'px')
      
      setInitialOffset(initialCentering)
      setVerticalOffset(adjustedDistance)
    }

    // Calculate after a short delay to ensure DOM is fully rendered
    setTimeout(calculateOffsets, 100)
    window.addEventListener('resize', calculateOffsets)
    
    return () => window.removeEventListener('resize', calculateOffsets)
  }, [])

  // Smooth transitions with easing
  const middleLayersOpacity = 1 - scrollProgress
  const nokLayerOpacity = scrollProgress
  const nokLayerScale = 0.85 + (scrollProgress * 0.15)

  return (
    <section id="nok-advantage" ref={containerRef} className="relative pt-0 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Contained card with fabric texture and border */}
        <div 
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #dbeafe 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(14, 165, 233, 0.15)',
          }}
        >
          {/* Micro hexagonal pattern - reduced opacity for better readability */}
          <div 
            className="absolute inset-0 opacity-6 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='9.2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0L6 2.3L6 6.9L4 9.2L2 6.9L2 2.3Z' fill='none' stroke='rgba(14, 165, 233, 0.2)' stroke-width='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: '8px 9.2px'
            }}
          />
          
          {/* Fabric texture overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay'
            }}
          />
          
          {/* Subtle inner glow */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 0 60px rgba(14, 165, 233, 0.08)',
            }}
          />
          
          <div className="relative z-10 py-16 px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">The <span className="text-xl font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> Advantage</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Simplifying the returns stack
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8 overflow-x-auto lg:overflow-visible">
          
          {/* Left: Text sections that stack vertically */}
          <div className="space-y-16">
            
            {/* BEFORE NOK Section */}
            <div ref={beforeRef} className="bg-white/50 rounded-2xl p-6 border border-white/70 shadow-sm">
              <div className="inline-block px-3 py-1 bg-red-100 border border-red-200 rounded-full mb-4">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Before <span className="text-sm font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span></span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fragmented, expensive, manual
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-4">
                Brands either build their own facility and team or pay 3PLs. Then coordinate across warehousing, refurbishment, repair, and resale—all in disconnected systems that don't talk to each other.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Heavy capex or expensive 3PLs</span>
                    <p className="text-sm text-gray-700">Build your own or pay middlemen</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Disconnected systems</span>
                    <p className="text-sm text-gray-700">Nothing talks to each other—no intelligent routing</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Manual retailer recovery</span>
                    <p className="text-sm text-gray-700">Getting money back is all spreadsheets and emails</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* AFTER NOK Section */}
            <div ref={afterRef} className="bg-white/50 rounded-2xl p-6 border border-white/70 shadow-sm">
              <div className="inline-block px-3 py-1 bg-cyan-100 border border-cyan-200 rounded-full mb-4">
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">After <span className="text-sm font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span></span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                One unified platform. We do it all.
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-4">
                <span className="text-lg font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> handles everything—warehousing, refurbishment, repair, resale, and retailer recovery. One system that talks to itself and drives intelligent decisions at every step.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Zero capex, no 3PL fees</span>
                    <p className="text-sm text-gray-700">We handle the facility, team, and operations</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Unified intelligent system</span>
                    <p className="text-sm text-gray-700">AI-powered disposition engine routes every return optimally</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Automated recovery & insights</span>
                    <p className="text-sm text-gray-700">Real-time visibility, higher recovery, total control</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Right: Animated Stack Visual - centered with each section */}
          <div className="lg:self-start">
            <div 
              className="relative w-full overflow-visible" 
              style={{ 
                height: '450px', 
                minWidth: '600px',
                transform: `translateY(${initialOffset + (scrollProgress * verticalOffset)}px)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              
              {/* Stack Container - centered */}
              <div className="relative mx-auto" style={{ width: '320px', height: '450px' }}>
                
                {/* Labels with connecting lines - Only visible in "Before NOK" state */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    opacity: middleLayersOpacity,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                >
                  {/* Warehousing & Repair label and line - pointing to top gray layer */}
                  <div className="absolute" style={{ bottom: '248px', left: '-140px', right: '50px' }}>
                    <div className="h-px bg-gray-300 mb-1"></div>
                    <span className="text-xs font-medium text-gray-600">Warehousing & Repair</span>
                  </div>
                  
                  {/* Disconnected Systems label and line - pointing to middle gray layer */}
                  <div className="absolute" style={{ bottom: '198px', left: '-140px', right: '50px' }}>
                    <div className="h-px bg-gray-300 mb-1"></div>
                    <span className="text-xs font-medium text-gray-600">Disconnected Systems</span>
                  </div>
                  
                  {/* Manual Coordination label and line - pointing to bottom gray layer */}
                  <div className="absolute" style={{ bottom: '148px', left: '-140px', right: '50px' }}>
                    <div className="h-px bg-gray-300 mb-1"></div>
                    <span className="text-xs font-medium text-gray-600">Manual Coordination</span>
                  </div>
                  
                </div>

              {/* Layer 5 - Recovery Channels (Bottom - always visible) */}
              <div className="absolute inset-x-0" style={{ bottom: '20px', transform: 'scale(0.85)' }}>
                <div className="relative">
                  <svg viewBox="0 0 245 176" className="w-full h-auto">
                    <defs>
                      <linearGradient id="recovery-paint0" x1="246" x2="0" y1="165" y2="165" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" stopOpacity="0"></stop>
                        <stop offset=".681" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="recovery-paint1" x1="156" x2="20" y1="77" y2="77" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" stopOpacity="0"></stop>
                        <stop offset=".589" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                      </linearGradient>
                      <filter id="recovery-filter" width="245" height="160" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="16"></feGaussianBlur>
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
                        <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
                      </filter>
                    </defs>
                    <path fill="#12161E" fillRule="evenodd" d="M122.5 160c67.655 0 122.5-35.817 122.5-80v16c0 44.183-54.845 80-122.5 80S0 140.183 0 96V80c0 44.183 54.845 80 122.5 80z" clipRule="evenodd"></path>
                    <path fill="#fff" fillOpacity=".2" fillRule="evenodd" d="M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80z" clipRule="evenodd"></path>
                    <path fill="url(#recovery-paint0)" fillOpacity=".2" fillRule="evenodd" d="M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80z" clipRule="evenodd"></path>
                    <path fill="url(#recovery-paint1)" fillRule="evenodd" d="M122.5 160c67.655 0 122.5-35.817 122.5-80v16c0 44.183-54.845 80-122.5 80S0 140.183 0 96V80c0 44.183 54.845 80 122.5 80z" clipRule="evenodd" opacity=".3"></path>
                    <g filter="url(#recovery-filter)">
                      <path fill="#12161E" d="M245 80c0 44.183-54.845 80-122.5 80S0 124.183 0 80 54.845 0 122.5 0 245 35.817 245 80z"></path>
                    </g>
                  </svg>
                  {/* Recovery Channels label ON the black disk - visible in both states */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ top: '130px' }}>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Recovery Channels</h4>
                  </div>
                </div>
              </div>

              {/* Middle Layers - Fade out as scroll progresses */}
              <div 
                style={{ 
                  opacity: middleLayersOpacity,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              >
                {/* Layer 4 - Manual Processes */}
                <div className="absolute inset-x-0" style={{ bottom: '70px', transform: 'scale(0.85)' }}>
                  <div className="relative">
                    <svg viewBox="0 0 246 193" className="w-full h-auto">
                      <defs>
                        <linearGradient id="manual-paint" x1="157" x2="20" y1="77" y2="77" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#fff" stopOpacity="0"></stop>
                          <stop offset=".589" stopColor="#fff"></stop>
                          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                        <filter id="manual-filter" width="246" height="160" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="28"></feGaussianBlur>
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
                          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
                        </filter>
                      </defs>
                      <path fill="#383E4F" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" clipRule="evenodd"></path>
                      <path fill="#232730" fillRule="evenodd" d="M123 192c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 157.183 0 113v-1c0 44.183 55.069 80 123 80z" clipRule="evenodd" opacity=".3"></path>
                      <path fill="#fff" fillOpacity=".2" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 125.183 0 81v-1c0 44.183 55.069 80 123 80z" clipRule="evenodd"></path>
                      <path fill="url(#manual-paint)" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" clipRule="evenodd" opacity=".28"></path>
                      <g filter="url(#manual-filter)">
                        <path fill="#383E4F" d="M246 80c0 44.183-55.069 80-123 80S0 124.183 0 80 55.069 0 123 0s123 35.817 123 80z"></path>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Layer 3 - Warehouse */}
                <div className="absolute inset-x-0" style={{ bottom: '120px', transform: 'scale(0.85)' }}>
                  <div className="relative">
                    <svg viewBox="0 0 246 193" className="w-full h-auto">
                      <defs>
                        <linearGradient id="warehouse-paint" x1="157" x2="20" y1="77" y2="77" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#fff" stopOpacity="0"></stop>
                          <stop offset=".589" stopColor="#fff"></stop>
                          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                        <filter id="warehouse-filter" width="246" height="160" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="28"></feGaussianBlur>
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
                          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
                        </filter>
                      </defs>
                      <path fill="#383E4F" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" clipRule="evenodd"></path>
                      <path fill="#232730" fillRule="evenodd" d="M123 192c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 157.183 0 113v-1c0 44.183 55.069 80 123 80z" clipRule="evenodd" opacity=".3"></path>
                      <path fill="#fff" fillOpacity=".2" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 125.183 0 81v-1c0 44.183 55.069 80 123 80z" clipRule="evenodd"></path>
                      <path fill="url(#warehouse-paint)" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" clipRule="evenodd" opacity=".28"></path>
                      <g filter="url(#warehouse-filter)">
                        <path fill="#383E4F" d="M246 80c0 44.183-55.069 80-123 80S0 124.183 0 80 55.069 0 123 0s123 35.817 123 80z"></path>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Layer 2 - 3PLs */}
                <div className="absolute inset-x-0" style={{ bottom: '170px', transform: 'scale(0.85)' }}>
                  <div className="relative">
                    <svg viewBox="0 0 246 193" className="w-full h-auto">
                      <defs>
                        <linearGradient id="threepl-paint" x1="157" x2="20" y1="77" y2="77" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#fff" stopOpacity="0"></stop>
                          <stop offset=".589" stopColor="#fff"></stop>
                          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                        <filter id="threepl-filter" width="246" height="160" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="28"></feGaussianBlur>
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
                          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
                        </filter>
                      </defs>
                      <path fill="#383E4F" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" clipRule="evenodd"></path>
                      <path fill="#232730" fillRule="evenodd" d="M123 192c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 157.183 0 113v-1c0 44.183 55.069 80 123 80z" clipRule="evenodd" opacity=".3"></path>
                      <path fill="#fff" fillOpacity=".2" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 125.183 0 81v-1c0 44.183 55.069 80 123 80z" clipRule="evenodd"></path>
                      <path fill="url(#threepl-paint)" fillRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" clipRule="evenodd" opacity=".28"></path>
                      <g filter="url(#threepl-filter)">
                        <path fill="#383E4F" d="M246 80c0 44.183-55.069 80-123 80S0 124.183 0 80 55.069 0 123 0s123 35.817 123 80z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* NOK Platform Layer - Fades in and grows */}
              <div 
                className="absolute inset-x-0"
                style={{ 
                  bottom: '95px',
                  opacity: nokLayerOpacity,
                  transform: `scale(${nokLayerScale})`,
                  pointerEvents: nokLayerOpacity > 0 ? 'auto' : 'none',
                  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
              >
                <div className="relative">
                  <svg viewBox="0 0 245 168" className="w-full h-auto drop-shadow-2xl">
                    <defs>
                      {/* Fabric/Noise Texture Pattern - More visible */}
                      <filter id="nok-fabric-noise">
                        <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise"/>
                        <feColorMatrix in="noise" type="saturate" values="0"/>
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.5"/>
                        </feComponentTransfer>
                      </filter>
                      
                      {/* Enhanced Gradient with depth */}
                      <linearGradient id="nok-paint" x1="156.393" x2="20.833" y1="77.808" y2="77.808" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" stopOpacity="0"></stop>
                        <stop offset=".589" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                      </linearGradient>
                      
                      {/* Radial gradient for depth - stronger */}
                      <radialGradient id="nok-depth" cx="50%" cy="20%" r="70%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6"/>
                        <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1"/>
                      </radialGradient>
                      
                      {/* Stronger border effect */}
                      <filter id="nok-border-glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Deeper base shadow layer */}
                    <path fill="#0c4a6e" fillRule="evenodd" d="M122.5 160c67.655 0 122.5-35.817 122.5-80v8c0 44.183-54.845 80-122.5 80S0 132.183 0 88v-8c0 44.183 54.845 80 122.5 80z" clipRule="evenodd" opacity="0.8"></path>
                    
                    {/* Stronger highlight edge */}
                    <path fill="#fff" fillOpacity=".5" fillRule="evenodd" d="M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80z" clipRule="evenodd"></path>
                    
                    {/* Gradient overlay */}
                    <path fill="url(#nok-paint)" fillRule="evenodd" d="M122.5 160c67.655 0 122.5-35.817 122.5-80v8c0 44.183-54.845 80-122.5 80S0 132.183 0 88v-8c0 44.183 54.845 80 122.5 80z" clipRule="evenodd" opacity=".4"></path>
                    
                    {/* Main surface with fabric texture */}
                    <path fill="#06b6d4" d="M245 80c0 44.183-54.845 80-122.5 80S0 124.183 0 80 54.845 0 122.5 0 245 35.817 245 80z"></path>
                    <path fill="url(#nok-depth)" d="M245 80c0 44.183-54.845 80-122.5 80S0 124.183 0 80 54.845 0 122.5 0 245 35.817 245 80z"></path>
                    <rect width="245" height="168" filter="url(#nok-fabric-noise)" opacity="0.25" mix-blend-mode="overlay"/>
                    
                    {/* Prominent border with glow */}
                    <ellipse cx="122.5" cy="80" rx="121" ry="78.5" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.6" filter="url(#nok-border-glow)"/>
                    <ellipse cx="122.5" cy="80" rx="122.5" ry="80" fill="none" stroke="#0c4a6e" strokeWidth="1" opacity="0.4"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ top: '15px' }}>
                    <h4 className="text-white drop-shadow-lg">
                      <span className="text-4xl font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>
                      <span className="text-xl font-semibold ml-2">Platform</span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Layer 1 - Brands (Top - always visible) */}
              <div className="absolute inset-x-0" style={{ bottom: '220px', transform: 'scale(0.85)' }}>
                <div className="relative">
                  <svg viewBox="0 0 246 176" className="w-full h-auto">
                    <defs>
                      <linearGradient id="brands-a" x1="71" y1="225.5" x2="44.928" y2="112.214" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#ECEFF7" stopOpacity=".9"></stop>
                      </linearGradient>
                      <linearGradient id="brands-b" x1="157.031" x2="20.918" y1="74.534" y2="74.534" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" stopOpacity="0"></stop>
                        <stop offset=".589" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="brands-c" x1="232.5" y1="49.5" x2="-141.345" y2="238.297" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#ECEFF7" stopOpacity=".9"></stop>
                      </linearGradient>
                    </defs>
                    <path fillRule="evenodd" clipRule="evenodd" d="M.021 81H0v15c0 44.183 55.069 80 123 80s123-35.817 123-80V81h-.021c-1.238 43.214-55.823 78-122.979 78S1.259 124.214.021 81Z" fill="url(#brands-a)"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M.01 81H0c0 44.183 55.069 80 123 80s123-35.817 123-80h-.009c-.824 43.722-55.573 79-122.991 79S.833 124.722.01 81Z" fill="#fff" fillOpacity=".8"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M123 160c67.931 0 123-35.817 123-80v16c0 44.183-55.069 80-123 80S0 140.183 0 96V80c0 44.183 55.069 80 123 80Z" fill="url(#brands-b)"></path>
                    <path d="M246 80c0 44.183-55.069 80-123 80S0 124.183 0 80 55.069 0 123 0s123 35.817 123 80Z" fill="url(#brands-c)"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ top: '18px' }}>
                    <h4 className="text-base font-bold text-gray-800 uppercase tracking-wide">Brands</h4>
                  </div>
                </div>
              </div>

              </div> {/* End Stack Container */}
            </div> {/* End animated stack container (line 222) */}
          </div> {/* End lg:self-start (line 221) */}

        </div> {/* End grid (line 129) */}

          </div> {/* End inner padding container (line 119) */}
        </div> {/* End contained card (line 95) */}
      </div> {/* End max-w container (line 93) */}
    </section>
  )
}