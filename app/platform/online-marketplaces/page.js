'use client'

import { useDemoModal } from '@/components/ClientLayout'
import { OnlineMarketplacesVisual } from '@/components/PlatformVisuals'

export default function OnlineMarketplaces() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section - Marketplace logos overlay */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24">
        <div className="absolute inset-0 background-gradient opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Marketplace Logos Overlay */}
          <div className="grid grid-cols-4 gap-4 mb-12 opacity-20">
            {['A', 'E', 'W', 'B'].map((logo, idx) => (
              <div key={idx} className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400">{logo}</span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Reach Millions Through Certified Marketplaces.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              Nok automates marketplace listings and compliance for every resale channel.
            </p>
            <button 
              onClick={openDemoModal}
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Expand Your Reach with Nok
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <OnlineMarketplacesVisual />
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Intelligent Channel Selection</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Not all products perform equally across all marketplaces. Our platform uses data-driven insights to determine the optimal channel for each product based on category performance, pricing dynamics, and customer preferences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Automated channel routing ensures products are listed where they'll achieve the highest recovery value in the shortest time, while maintaining brand protection and avoiding channel conflicts.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Unified Management</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Managing listings across multiple marketplaces can be complex, but <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> provides a unified dashboard that gives you complete visibility and control. Track performance, adjust pricing, and manage inventory across all channels from a single interface.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expand your marketplace presence
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> can help you maximize recovery through online marketplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openDemoModal}
              className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center justify-center shadow-lg"
            >
              Request a Demo
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a 
              href="mailto:sales@nokrecommerce.com"
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
