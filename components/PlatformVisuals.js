'use client'

import { useState, useEffect } from 'react'

// Reusable Section: 3-Card Grid
export function ThreeCardGrid({ title, cards, className = '', columns = 3 }) {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}
        <div className={`grid gap-8 ${columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                card.className || 'bg-white border-gray-200'
              }`}
              style={{ boxShadow: card.className ? 'var(--shadow-md)' : 'var(--shadow-sm), var(--shadow-border)' }}
            >
              {card.icon && (
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
              )}
              {card.image && (
                <div className="h-32 bg-white rounded-xl mb-4 flex items-center justify-center shadow-sm border border-gray-100">
                  {card.image}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Reusable Section: Flow Diagram
export function FlowDiagram({ title, steps, className = '' }) {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}
        <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10 flex-1">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 shadow-md border border-cyan-200 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                {step.description && (
                  <p className="text-sm text-gray-600 text-center">{step.description}</p>
                )}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 z-0" style={{ left: 'calc(50% + 48px)', width: 'calc(100% - 96px)' }}>
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                        <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Branded Resale Visual Components
export function BrandedResaleVisual() {
  const brandExamples = [
    {
      title: 'Ember Renewed',
      description: 'Fully branded storefront with native design, pricing control, and customer trust.',
      gradient: 'from-orange-50 to-amber-50',
      border: 'border-orange-200'
    },
    {
      title: 'Bissell Refurbished',
      description: 'Seamless integration maintaining brand identity across all customer touchpoints.',
      gradient: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200'
    },
    {
      title: 'Hatch Restored',
      description: 'Premium resale experience that matches new product quality and presentation.',
      gradient: 'from-purple-50 to-pink-50',
      border: 'border-purple-200'
    },
    {
      title: 'NZXT Certified',
      description: 'Specialized gaming hardware resale with warranty-grade refurbishment standards.',
      gradient: 'from-indigo-50 to-blue-50',
      border: 'border-indigo-200'
    }
  ]

  const infrastructureSteps = [
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Brand',
      description: 'Your brand identity'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Nok RMS',
      description: 'Resale management system'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Customer',
      description: 'Branded experience'
    }
  ]

  return (
    <>
      <FlowDiagram
        title="Nok Resale Infrastructure"
        steps={infrastructureSteps}
        className="bg-white"
      />
    </>
  )
}

// Trade-In Visual Components
export function TradeInVisual() {
  const flowSteps = [
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Submit',
      description: 'Digital or in-store'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      title: 'Ship',
      description: 'Free shipping label'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Get Credit',
      description: 'Instant valuation'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Resell',
      description: 'Automated processing'
    }
  ]

  return (
    <FlowDiagram
      title="Trade-In Flow"
      steps={flowSteps}
      className="bg-gray-50"
    />
  )
}

// Online Marketplaces Visual Components
export function OnlineMarketplacesVisual() {
  const contentTiles = [
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Smart Listing Automation',
      description: 'Automatically sync inventory, create listings, and manage pricing across all marketplace channels with intelligent rules and workflows.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Certified Refurbished Standards',
      description: 'Meet marketplace requirements for certified refurbished products with automated quality checks and compliance documentation.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Performance Analytics',
      description: 'Track sales performance, inventory velocity, and recovery rates across all marketplace channels from a unified dashboard.'
    }
  ]

  const integrationSteps = [
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Nok RMS',
      description: 'Inventory management'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Marketplace APIs',
      description: 'Automated sync'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Customer',
      description: 'Direct purchase'
    }
  ]

  return (
    <>
      <ThreeCardGrid
        title=""
        cards={contentTiles}
        className="bg-white"
      />
      <FlowDiagram
        title="Integration Architecture"
        steps={integrationSteps}
        className="bg-gray-50"
      />
    </>
  )
}

// Excess Sales Visual Components
export function ExcessSalesVisual() {
  const metrics = [
    {
      value: 'MAX',
      label: 'Cost Recovery',
      description: null
    },
    {
      value: '2.4M',
      label: 'Lbs Diverted',
      description: 'From landfills annually'
    },
    {
      value: 'MIN',
      label: 'Time to Market',
      description: null
    }
  ]

  return (
    <div className="space-y-12">
      {/* Recovery Performance */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">
          Recovery Performance
        </h2>
        <div className="space-y-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 text-center"
              style={{ boxShadow: 'var(--shadow-sm), var(--shadow-border)' }}
            >
              <div className="text-4xl font-bold text-cyan-600 mb-2">{metric.value}</div>
              <div className="text-base font-semibold text-gray-900 mb-1">{metric.label}</div>
              {metric.description && (
                <div className="text-sm text-gray-600">{metric.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Resale Network */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">
          Trusted Resale Network
        </h2>
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <div className="space-y-8">
            {/* Domestic Buyers */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-cyan-200 shadow-md mb-4">
                <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Domestic</h3>
              <p className="text-sm text-gray-600">North American buyers across all regions</p>
            </div>

            {/* International Buyers */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center border-2 border-blue-200 shadow-md mb-4">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">International</h3>
              <p className="text-sm text-gray-600">Global buyers across multiple continents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
