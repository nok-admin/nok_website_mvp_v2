'use client'

import { useDemoModal } from '@/components/ClientLayout'

const conditionPaths = [
  {
    condition: 'Like New',
    channel: 'Premium Channels',
    details: 'Certified refurb, branded D2C, premium partners'
  },
  {
    condition: 'Good',
    channel: 'Mid-tier Channels',
    details: 'Trusted marketplaces, select off-price retailers'
  },
  {
    condition: 'Fair',
    channel: 'Off-price & Alternative',
    details: 'Alternative distribution, corporate gifting, marketplaces'
  },
  {
    condition: 'Parts Only',
    channel: 'Component Recovery',
    details: 'Harvest parts, recycle responsibly, OEM returns'
  }
]

const benefits = [
  'Optimizes every unit for margin, speed, and contractual rules',
  'Eliminates manual spreadsheets and gut-based routing',
  'Keeps brand guardrails intact no matter the channel',
  'Feeds data back into planning, CX, and finance automatically'
]

const processSteps = [
  { label: '1. Intake & Condition', detail: 'Computer vision + technician input score every return instantly.' },
  { label: '2. Decision Engine', detail: 'AI weighs recovery value, SLAs, channel health, and compliance.' },
  { label: '3. Channel Assignment', detail: 'Routes item to optimal disposition with workflows triggered automatically.' },
  { label: '4. Feedback Loop', detail: 'Sell-through, recovery, and quality data train the model continuously.' }
]

const detailBlocks = [
  {
    title: 'Decision logic everyone can see',
    copy: 'Operators inspect, finance reviews recovery, and brand teams approve guardrails within the same interface. Every recommendation comes with transparent rationale so teams can override with context.'
  },
  {
    title: 'Real-time sensitivity',
    copy: 'Routing adjusts as market pricing, capacity, or compliance rules change. If a marketplace backlog grows or a retailer needs more inventory, the engine reacts in minutes—not days.'
  },
  {
    title: 'Before / After',
    copy: 'Before: Random routing, clogged warehouses, low recovery. After: Structured pathways that keep premium goods out of bargain bins and ensure parts, donations, or recycling earn their full credit.'
  }
]

export default function IntelligentDisposition() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-[0.35em] mb-4">Intelligent Routing</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
            Every return finds the right channel automatically
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> evaluates condition, demand, regulations, and partner rules within seconds—so you never waste another high-value unit on the wrong disposition path.
          </p>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Decision tree built for operators</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The routing canvas shows exactly how the engine evaluates each condition state and which channels receive inventory. Operators can drag rules, add constraints, or approve overrides without calling engineering.
            </p>
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed list-disc list-inside">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white border border-gray-200 shadow-2xl p-6">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Routing Logic</div>
            <div className="space-y-4">
              {conditionPaths.map((path) => (
                <div key={path.condition} className="border border-gray-200 rounded-2xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Condition</p>
                      <p className="text-2xl font-bold text-gray-900">{path.condition}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Channel</p>
                      <p className="text-lg font-semibold text-gray-900">{path.channel}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{path.details}</p>
                  <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500"></div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gray-900 text-white p-5">
              <p className="text-sm font-semibold tracking-[0.35em] uppercase text-white/80">With Intelligent Routing</p>
              <p className="text-lg font-semibold mt-2">Optimized placement, higher recovery, controlled brand experience.</p>
              <p className="text-sm text-white/70 mt-2">
                Without it: random listings, eroded margins, inconsistent CX.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">How it works</p>
            <h2 className="text-4xl font-bold text-gray-900">From intake to disposition in four steps</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div key={step.label} className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-gray-50">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{step.label}</p>
                <p className="text-gray-800 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed explanation */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-5xl mx-auto grid gap-6">
          {detailBlocks.map((block) => (
            <div key={block.title} className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{block.title}</h3>
              <p className="text-gray-700 leading-relaxed">{block.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Put routing on autopilot
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Pair AI decisioning with your brand guardrails and channel strategy. <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> gets every product to the right outcome without extra headcount.
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

