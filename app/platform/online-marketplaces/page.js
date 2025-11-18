'use client'

import Image from 'next/image'
import { useDemoModal } from '@/components/ClientLayout'

export default function OnlineMarketplaces() {
  const { openDemoModal } = useDemoModal()

  const categories = [
    {
      title: 'Off-Price Retailers',
      description: 'National, regional, and specialty partners that demand consistent brand presence.',
      bullets: [
        'National chains with strict merchandising standards',
        'Regional partners that absorb seasonal overstock fast',
        'Discount outlets that protect pricing guardrails',
        'Department store off-price divisions with brand guidelines'
      ]
    },
    {
      title: 'Alternative Channels',
      description: 'Programs that extend reach beyond marketplaces while keeping narrative control.',
      bullets: [
        'Corporate gifting programs with curated assortments',
        'Subscription box partnerships for targeted discovery',
        'Employee purchase programs that move volume quietly',
        'Specialty retail programs aligned to niche audiences'
      ]
    }
  ]

  const marketplaceBreakdown = [
    {
      heading: 'Major Marketplaces',
      items: ['Amazon', 'Walmart', 'eBay']
    },
    {
      heading: 'Specialty Marketplaces',
      items: ['Rebel', 'Good Buy Gear', 'Woot']
    },
    {
      heading: 'International Partners',
      items: ['Canadian marketplaces', 'UK/EU refurb partners', 'LATAM expansion pilots']
    },
    {
      heading: 'Emerging Platforms',
      items: ['Sustainable boutique platforms', 'Live shopping pilots', 'Category-specific drops']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-12">
        <div className="absolute inset-0 background-gradient opacity-30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Marketplace Reach with Brand-Level Control
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
            <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> routes every return into the right channel—at scale—while keeping your brand narrative intact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openDemoModal}
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Expand Your Reach with Nok
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="mailto:sales@nokrecommerce.com"
              className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all inline-flex items-center justify-center"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Mass Distribution Network */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
              Mass Distribution Network with Brand Control
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Brand-first infrastructure for massive channel reach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Competitive marketplaces only list. <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> orchestrates intelligent disposition across six channel types so every product lands in the venue that protects your story and maximizes recovery.
            </p>

            <div className="space-y-10">
              {categories.map((category, idx) => (
                <div key={category.title}>
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {idx === 0 ? 'Retail Network' : 'Channel Expansion'}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 mb-3">{category.description}</p>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside leading-relaxed">
                    {category.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Online Marketplaces (Expanded)</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {marketplaceBreakdown.map((group) => (
                    <div key={group.heading}>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{group.heading}</p>
                      <ul className="space-y-1 text-gray-700 list-disc list-inside">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-gray-900 text-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-300">Mass Distribution + Brand Control</p>
                <p className="text-xl font-semibold mt-2">Intelligent disposition across 6+ channel types</p>
              </div>
              <div className="text-sm text-gray-300">
                Right product → Right channel → Right recovery timeline.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-gray-200 shadow-2xl p-4 bg-white">
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <Image
                  src="/images/nok_resale_infra.svg"
                  alt="Mass distribution network diagram showing your brand controlling distribution across multiple channels"
                  width={900}
                  height={900}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  'Direct to Consumer',
                  'Wholesale Partners',
                  'Market Testing / New Markets',
                  'Alternative Channels',
                  'Off-Price Retailers',
                  'Online Marketplaces'
                ].map((node) => (
                  <div key={node} className="flex items-center gap-2 rounded-xl bg-gray-50 border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {node}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Copy */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Control narrative at marketplace scale</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Brands stay in command of product copy, imagery, warranties, and pricing guardrails—even when items move across dozens of channels. Compliance automation ensures listings stay accurate, meet retailer requirements, and reflect the experience customers expect from your flagship store.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Intelligent disposition, not generic listing</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our routing engine evaluates condition, demand, and contractual rules before syndicating a single SKU. That means premium inventory never lands in bargain bins, overstocks move quickly without brand damage, and every transaction feeds data back into the model for smarter channel selection.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Brand Control</p>
              <p className="text-gray-700">
                Central hub enforces copy, imagery, packaging, and support requirements before anything publishes to a marketplace.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Intelligent Reach</p>
              <p className="text-gray-700">
                Automated disposition chooses from off-price, alternative, wholesale, and marketplace networks—putting the right product in the right channel every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Deploy your distribution network in days
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Partner with <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> to orchestrate intelligent disposition across off-price, alternative, and marketplace channels without sacrificing control.
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
