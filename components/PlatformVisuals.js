'use client'

import { useState, useEffect } from 'react'

// Branded Resale Visual Component
export function BrandedResaleVisual() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <div className="my-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Stats Cards */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <div className="text-5xl font-bold text-blue-600 mb-2">45%</div>
            <div className="text-sm font-semibold text-gray-700">Higher Recovery Rate</div>
            <div className="text-xs text-gray-600 mt-1">vs. generic marketplaces</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <div className="text-5xl font-bold text-purple-600 mb-2">2.3x</div>
            <div className="text-sm font-semibold text-gray-700">Price Premium</div>
            <div className="text-xs text-gray-600 mt-1">Branded vs. unbranded channels</div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Branded Resale Flow</h3>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Return Received', colorClass: 'bg-blue-100', textClass: 'text-blue-600', gradientClass: 'from-blue-400 to-blue-600' },
              { step: '2', title: 'Quality Inspection', colorClass: 'bg-purple-100', textClass: 'text-purple-600', gradientClass: 'from-purple-400 to-purple-600' },
              { step: '3', title: 'Refurbishment', colorClass: 'bg-cyan-100', textClass: 'text-cyan-600', gradientClass: 'from-cyan-400 to-cyan-600' },
              { step: '4', title: 'Branded Listing', colorClass: 'bg-green-100', textClass: 'text-green-600', gradientClass: 'from-green-400 to-green-600' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${item.colorClass} flex items-center justify-center flex-shrink-0`}>
                  <span className={`${item.textClass} font-bold`}>{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.gradientClass} rounded-full transition-all duration-1000 ${animated ? 'w-full' : 'w-0'}`}
                      style={{ transitionDelay: `${idx * 200}ms` }}
                    ></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 mt-2">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Trade-In Visual Component
export function TradeInVisual() {
  return (
    <div className="my-16">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6">Trade-In Performance</h3>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">68%</div>
              <div className="text-sm text-gray-300">Conversion Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">$142</div>
              <div className="text-sm text-gray-300">Avg. Trade Value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">24hr</div>
              <div className="text-sm text-gray-300">Processing Time</div>
            </div>
          </div>
          
          {/* Dual Channel Visualization */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="font-semibold">Digital Trade-In</div>
              </div>
              <div className="text-sm text-gray-300">Instant valuation and seamless online experience</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="font-semibold">In-Store Trade-In</div>
              </div>
              <div className="text-sm text-gray-300">Physical drop-off with immediate credit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Online Marketplaces Visual Component
export function OnlineMarketplacesVisual() {
  const marketplaces = [
    { name: 'Amazon', revenue: 45, gradientClass: 'from-orange-500 to-orange-400' },
    { name: 'eBay', revenue: 28, gradientClass: 'from-blue-500 to-blue-400' },
    { name: 'Shopify', revenue: 15, gradientClass: 'from-green-500 to-green-400' },
    { name: 'Other', revenue: 12, gradientClass: 'from-gray-500 to-gray-400' }
  ]

  return (
    <div className="my-16">
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Multi-Channel Revenue Distribution</h3>
        
        {/* Chart Visualization */}
        <div className="mb-8">
          <div className="flex items-end gap-3 h-48 mb-4">
            {marketplaces.map((mkt, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div 
                  className={`w-full bg-gradient-to-t ${mkt.gradientClass} rounded-t-lg shadow-lg transition-all duration-1000`}
                  style={{ 
                    height: `${mkt.revenue * 4}px`,
                    animationDelay: `${idx * 150}ms`
                  }}
                ></div>
                <div className="mt-2 text-xs font-semibold text-gray-700">{mkt.name}</div>
                <div className="text-xs text-gray-500">{mkt.revenue}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketplace Icons Grid */}
        <div className="grid grid-cols-4 gap-4">
          {['Amazon', 'eBay', 'Shopify', 'Target'].map((name, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">{name[0]}</span>
              </div>
              <div className="text-xs font-medium text-gray-700">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Excess Sales Visual Component
export function ExcessSalesVisual() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <div className="my-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Inventory Health Score */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Inventory Health</h3>
          <div className="relative">
            <div className="w-48 h-48 mx-auto relative">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={animated ? `${2 * Math.PI * 88 * 0.35}` : `${2 * Math.PI * 88}`}
                  className="text-red-500 transition-all duration-2000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">65%</div>
                  <div className="text-sm text-gray-600">Healthy</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Excess Inventory</span>
              <span className="font-semibold text-red-600">35%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full transition-all duration-1000"
                style={{ width: animated ? '35%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Recovery Comparison */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recovery Comparison</h3>
          <div className="space-y-6">
            {[
              { label: 'Bulk Liquidation', value: 32, gradientClass: 'from-red-400 to-red-600' },
              { label: 'Marketplace Sales', value: 58, gradientClass: 'from-blue-400 to-blue-600' },
              { label: 'Branded Channels', value: 78, gradientClass: 'from-green-400 to-green-600' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.gradientClass} rounded-full transition-all duration-1000`}
                    style={{ 
                      width: animated ? `${item.value}%` : '0%',
                      transitionDelay: `${idx * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

