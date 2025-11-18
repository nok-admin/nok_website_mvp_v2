'use client'

import { useDemoModal } from '@/components/ClientLayout'
import { ExcessSalesVisual } from '@/components/PlatformVisuals'
import InventoryTransform from '@/components/InventoryTransform'

export default function ExcessSales() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section - Warehouse/Secondary Buyer Visual */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pt-32 pb-24">
        <div className="absolute inset-0 background-gradient opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded-3xl bg-white/80 backdrop-blur border border-orange-100 shadow-xl p-6 sm:p-8">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest mb-2">Unified partner</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Excess &amp; Returns Require ONE Unified Partner</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Fragmented vendor networks create friction that erodes value long before items hit secondary markets. We eliminate the gaps that create:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 text-base">
              {[
                'Brand narrative inconsistency',
                'Recovery inefficiency across channels',
                'Data silos between partners',
                'Lost optimization opportunities'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Turn Excess Into Opportunity.
          </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Nok helps brands recover value from surplus and open-box inventory through trusted resale networks.
              </p>
              <button 
                onClick={openDemoModal}
                className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center shadow-lg hover:shadow-xl"
              >
                Recover Value Responsibly
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right: Inventory Transform Visual */}
            <div className="relative">
              <InventoryTransform />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Visual Sidebar */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content Paragraphs */}
            <div className="space-y-16">
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Protect Brand Value</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Excess sales can impact brand perception if not managed carefully. Our platform includes brand protection features that ensure excess inventory is sold through appropriate channels at appropriate price points, maintaining brand integrity while maximizing recovery.
                </p>
              </div>
            </div>

            {/* Right: Metrics & Network Visual */}
            <div className="lg:sticky lg:top-24">
              <ExcessSalesVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Markets Section */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Secondary Markets Matter</p>
          <h2 className="text-4xl font-bold text-gray-900">Secondary Markets Deserve Primary Focus</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Excess management is not an afterthought—it is a direct reflection of your brand. Treating secondary channels with the same rigor as primary sales preserves equity, boosts recovery, and extends customer experience beyond the initial transaction.
          </p>
          <ul className="grid md:grid-cols-2 gap-6 text-left">
            {[
              'Secondary channels require the same strategic attention as your DTC or retail programs.',
              'Excess management directly impacts how customers perceive your quality standards.',
              'Recovery rates climb when liquidation, donation, and resale share one operating model.',
              'Customer journeys extend beyond the first purchase—secondary touchpoints must deliver.'
            ].map((item) => (
              <li key={item} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm text-gray-700 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Strategic Opportunities */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Strategic Opportunities</p>
            <h2 className="text-4xl font-bold text-gray-900">Turn Excess Into Strategic Advantage</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Reference your excess one-pager inside <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> to unlock use cases that go far beyond basic liquidation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'New Customer Acquisition', body: 'Lower CAC by introducing customers to your brand in trusted off-price environments with full storytelling control.' },
              { title: 'Market Testing', body: 'Pilot new geographies or retailers with reclaimed goods before risking full-price distribution.' },
              { title: 'Channel Expansion', body: 'Spin up new distribution relationships using unified workflows without disrupting primary partners.' },
              { title: 'Segment Access', body: 'Reach price-conscious segments who ultimately convert into full-price, high-LTV customers.' },
              { title: 'Brand Building', body: 'Extend reach on your terms—consistent packaging, messaging, and service even in secondary channels.' },
              { title: 'Operational Intelligence', body: 'Feed disposition and sell-through data back into planning to improve forecasting and procurement.' }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
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
