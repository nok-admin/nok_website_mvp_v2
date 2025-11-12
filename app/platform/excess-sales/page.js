'use client'

import { useDemoModal } from '@/components/ClientLayout'
import { ExcessSalesVisual } from '@/components/PlatformVisuals'

export default function ExcessSales() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Excess Sales
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-light">
            Transform excess inventory, overstock, and slow-moving products into revenue through strategic liquidation channels.
          </p>
        </div>
      </section>

      {/* Visual Section */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <ExcessSalesVisual />
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Inventory Management</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Excess inventory represents a significant opportunity cost. Whether it's overstock from seasonal campaigns, discontinued products, or slow-moving SKUs, holding excess inventory ties up capital and warehouse space while products depreciate in value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> provides intelligent excess sales solutions that help you identify inventory that should be liquidated, determine optimal pricing strategies, and route products to the most profitable sales channels.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Maximize Recovery Value</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Not all excess inventory should be sold through the same channels. Our platform analyzes product characteristics, market conditions, and brand considerations to determine whether items should be sold through branded channels, marketplaces, bulk liquidation, or specialized excess sales platforms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This data-driven approach ensures you maximize recovery value while protecting brand integrity and avoiding channel conflicts with your primary sales channels.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Automated Workflows</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Excess sales shouldn't require manual intervention for every SKU. <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> automates the entire process—from identifying excess inventory in your system to listing products on appropriate channels and managing fulfillment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Set rules based on inventory age, velocity, and profitability, and let the platform automatically route excess products to the most profitable disposition channels while maintaining full visibility and control.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Protect Brand Value</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Excess sales can impact brand perception if not managed carefully. Our platform includes brand protection features that ensure excess inventory is sold through appropriate channels at appropriate price points, maintaining brand integrity while maximizing recovery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn excess inventory into revenue
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> can help you maximize value from excess inventory.
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

