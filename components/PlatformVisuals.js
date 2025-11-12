'use client'

import { useState, useEffect } from 'react'

// Branded Resale Visual - Archive-inspired
export function BrandedResaleVisual() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const brandExamples = [
    { name: 'Ember Renewed', gradient: 'from-orange-50 to-amber-50', border: 'border-orange-200' },
    { name: 'Bissell Refurbished', gradient: 'from-blue-50 to-cyan-50', border: 'border-blue-200' },
    { name: 'NZXT Certified', gradient: 'from-purple-50 to-pink-50', border: 'border-purple-200' },
  ]

  return (
    <div className="space-y-16">
      {/* Brand Examples Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Branded Resale Storefronts</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {brandExamples.map((brand, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${brand.gradient} rounded-2xl p-8 border-2 ${brand.border} transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="h-32 bg-white rounded-xl mb-4 flex items-center justify-center shadow-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                  <div className="text-xs font-semibold text-gray-600">{brand.name}</div>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Fully branded experience with native design, pricing control, and customer trust.
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Diagram */}
      <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Nok Resale Infrastructure</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {['Brand', 'Nok RMS', 'Customer'].map((item, idx) => (
            <div key={idx} className="flex-1 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-cyan-600">{item[0]}</span>
              </div>
              <div className="font-semibold text-gray-900 mb-2">{item}</div>
              {idx < 2 && (
                <div className="hidden md:block absolute left-1/2 transform translate-x-12">
                  <svg className="w-16 h-2 text-cyan-300" fill="currentColor">
                    <path d="M0 1 L16 1 L12 0 L16 2 L12 4 L16 3 L0 3 Z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          Seamless integration from brand identity to customer delivery
        </div>
      </div>
    </div>
  )
}

// Trade-In Visual - Trove-inspired
export function TradeInVisual() {
  const steps = [
    { icon: '📱', title: 'Submit', desc: 'Digital or in-store' },
    { icon: '📦', title: 'Ship', desc: 'Free shipping label' },
    { icon: '💳', title: 'Get Credit', desc: 'Instant valuation' },
    { icon: '🔄', title: 'Resell', desc: 'Automated processing' },
  ]

  return (
    <div className="space-y-16">
      {/* Flow Sequence */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Trade-In Flow</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl shadow-md border border-gray-100">
                {step.icon}
              </div>
              <div className="font-bold text-gray-900 mb-1">{step.title}</div>
              <div className="text-sm text-gray-600">{step.desc}</div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <svg className="w-full h-1 text-cyan-300" fill="currentColor">
                    <path d="M0 0.5 L100% 0.5" stroke="currentColor" strokeWidth="2" />
                    <path d="M95% 0 L100% 0.5 L95% 1" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dual Channel Visualization */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-900">Digital Trade-In</div>
              <div className="text-sm text-gray-600">Online experience</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <div>• Instant valuation</div>
            <div>• Free shipping label</div>
            <div>• Credit in 24 hours</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-900">In-Store Trade-In</div>
              <div className="text-sm text-gray-600">Physical drop-off</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <div>• Immediate credit</div>
            <div>• In-person inspection</div>
            <div>• Same-day processing</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Online Marketplaces Visual
export function OnlineMarketplacesVisual() {
  const marketplaces = [
    { name: 'Amazon Renewed', logo: 'A', bgClass: 'bg-orange-100', textClass: 'text-orange-600' },
    { name: 'eBay', logo: 'E', bgClass: 'bg-blue-100', textClass: 'text-blue-600' },
    { name: 'Walmart Restored', logo: 'W', bgClass: 'bg-cyan-100', textClass: 'text-cyan-600' },
    { name: 'Best Buy Outlet', logo: 'B', bgClass: 'bg-yellow-100', textClass: 'text-yellow-600' },
  ]

  return (
    <div className="space-y-16">
      {/* Marketplace Logos Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certified Marketplace Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketplaces.map((mkt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-300 transition-all hover:shadow-lg text-center"
            >
              <div className={`w-16 h-16 ${mkt.bgClass} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${mkt.textClass}`}>{mkt.logo}</span>
              </div>
              <div className="text-sm font-semibold text-gray-900">{mkt.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Diagram */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
        <h3 className="text-2xl font-bold mb-10 text-center">Nok RMS → Marketplace APIs → Customer</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-cyan-400/30">
              <span className="text-2xl">📊</span>
            </div>
            <div className="font-semibold">Nok RMS</div>
            <div className="text-sm text-gray-400 mt-1">Inventory Management</div>
          </div>
          <div className="hidden md:block">
            <svg className="w-12 h-2 text-cyan-400" fill="currentColor">
              <path d="M0 1 L12 1 L8 0 L12 2 L8 4 L12 3 L0 3 Z" />
            </svg>
          </div>
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-cyan-400/30">
              <span className="text-2xl">🔌</span>
            </div>
            <div className="font-semibold">APIs</div>
            <div className="text-sm text-gray-400 mt-1">Automated Sync</div>
          </div>
          <div className="hidden md:block">
            <svg className="w-12 h-2 text-cyan-400" fill="currentColor">
              <path d="M0 1 L12 1 L8 0 L12 2 L8 4 L12 3 L0 3 Z" />
            </svg>
          </div>
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-cyan-400/30">
              <span className="text-2xl">👤</span>
            </div>
            <div className="font-semibold">Customer</div>
            <div className="text-sm text-gray-400 mt-1">Direct Purchase</div>
          </div>
        </div>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Automation', value: '95%', desc: 'Listings automated' },
          { title: 'Compliance', value: '100%', desc: 'Platform requirements met' },
          { title: 'Performance', value: '3.2x', desc: 'Faster inventory turnover' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
            <div className="text-4xl font-bold text-cyan-600 mb-2">{card.value}</div>
            <div className="font-bold text-gray-900 mb-1">{card.title}</div>
            <div className="text-sm text-gray-600">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Excess Sales Visual - Spoiler Alert-inspired
export function ExcessSalesVisual() {
  return (
    <div className="space-y-16">
      {/* Recovery Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: 'Cost Recovery', value: '78%', textClass: 'text-green-600' },
          { label: 'Environmental Impact', value: '2.4M', unit: 'lbs diverted', textClass: 'text-cyan-600' },
          { label: 'Time to Market', value: '14', unit: 'days', textClass: 'text-blue-600' },
        ].map((metric, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <div className={`text-5xl font-bold ${metric.textClass} mb-2`}>{metric.value}</div>
            {metric.unit && <div className="text-sm text-gray-500 mb-2">{metric.unit}</div>}
            <div className="font-semibold text-gray-900">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Trusted Buyers */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted Resale Network</h3>
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {['Buyer 1', 'Buyer 2', 'Buyer 3', 'Buyer 4', 'Buyer 5', 'Buyer 6'].map((buyer, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">{buyer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Impact */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border-2 border-green-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Sustainable Recovery</h3>
            <p className="text-lg text-gray-700 mb-6">
              Nok helps brands recover value from excess inventory while reducing environmental impact through responsible resale channels.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Carbon footprint reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Waste diversion from landfills</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Circular economy participation</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-green-200">
            <div className="text-center">
              <div className="text-6xl font-bold text-green-600 mb-2">2.4M</div>
              <div className="text-sm text-gray-600 mb-4">Pounds diverted from landfills</div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
