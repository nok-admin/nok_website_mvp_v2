'use client'

import { useDemoModal } from '@/components/ClientLayout'

export default function OnlineMarketplaces() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Online Marketplaces
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-light">
            Expand your reach and maximize recovery through supplemental selling channels across major online marketplaces.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Supplemental Selling Channels</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Online marketplaces serve as powerful supplemental channels for moving refurbished inventory at scale. By listing products across multiple platforms—from Amazon and eBay to specialized marketplaces—you can reach broader audiences and optimize pricing based on platform-specific demand.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> integrates with leading marketplace platforms, enabling automated listing, inventory synchronization, and order management across all your sales channels. This multi-channel approach ensures maximum exposure and faster inventory turnover.
            </p>
          </div>

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
              className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center justify-center"
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

