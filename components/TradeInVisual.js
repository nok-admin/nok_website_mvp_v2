'use client'

import { useEffect, useState } from 'react'

export default function TradeInVisual() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Submit Trade-In',
      description: 'Customer selects product, condition, and uploads photos through digital or in-store channels.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      number: 2,
      title: 'Ship or Drop-Off',
      description: 'Product is sent via provided shipping label or dropped off at a designated store location.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      number: 3,
      title: 'Evaluation',
      description: 'Nok team receives and evaluates the product to confirm details and condition.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      number: 4,
      title: 'Credit Issued',
      description: 'Customer receives credit options: in-store credit, NEW credit, or refurbished credit.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Workflow Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-200 hidden md:block" style={{ marginTop: '48px' }}></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              const isPast = activeStep > idx
              
              return (
                <div key={idx} className="relative">
                  {/* Connector Arrow - only show on desktop, between steps */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 right-0 transform translate-x-1/2 -translate-y-1/2 z-20" style={{ marginTop: '48px' }}>
                      <svg className="w-8 h-8 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Step Card */}
                  <div 
                    className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-500 ${
                      isActive 
                        ? 'border-cyan-400 shadow-xl scale-105 ring-4 ring-cyan-100' 
                        : isPast
                        ? 'border-cyan-200 shadow-md'
                        : 'border-gray-200 shadow-sm'
                    }`}
                    style={{
                      boxShadow: isActive 
                        ? '0 20px 25px -5px rgba(6, 182, 212, 0.2), 0 10px 10px -5px rgba(6, 182, 212, 0.1)' 
                        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    {/* Step Number Badge */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 ${
                      isActive ? 'scale-110 ring-4 ring-cyan-200 ring-opacity-50' : 'scale-100'
                    }`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <div className={`text-xs font-semibold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-cyan-600' : 'text-gray-500'
                      }`}>
                        Step {step.number}
                      </div>
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

