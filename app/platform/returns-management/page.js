'use client'

import { useDemoModal } from '@/components/ClientLayout'

const focusAreas = [
  {
    title: 'Returns Volume Tracking',
    bullets: [
      'Live counts for receiving, inspection, and routing queues',
      'Processing time and throughput metrics by facility',
      'Bottleneck alerts when SLA thresholds slip'
    ]
  },
  {
    title: 'Defect Reporting',
    bullets: [
      'Auto-tag defects down to SKU and component',
      'Trend lines to flag quality drift before it escalates',
      'Issue exports for OEM and supplier accountability'
    ]
  },
  {
    title: 'Fraud Detection',
    bullets: [
      'Suspicious pattern detection and serial returner IDs',
      'Geo/IP intelligence to stop abuse before refunds',
      'Configurable fraud alert center for ops teams'
    ]
  },
  {
    title: 'OEM Credits Management',
    bullets: [
      'Credits by manufacturer with outstanding balances',
      'Recovery timelines tied to inspection outcomes',
      'Workflow nudges when credits age past contractual windows'
    ]
  },
  {
    title: 'Retail Accountability',
    bullets: [
      'Return rates by retail partner with SLA compliance',
      'Scorecards that tie performance to contract terms',
      'Dispute packages generated directly from platform data'
    ]
  }
]

export default function ReturnsManagement() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-[0.3em]">Operational Returns Control</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
            Returns Management for Operators, Not Just Resale
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Move beyond resale dashboards. <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> gives operations teams live visibility into volume, quality, fraud, OEM credits, and retailer accountability—everything needed to run returns as a mission-critical workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button 
              onClick={openDemoModal}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center justify-center"
            >
              See the Returns Dashboard
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a 
              href="mailto:sales@nokrecommerce.com"
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all inline-flex items-center justify-center"
            >
              Talk with Operations
            </a>
          </div>
        </div>
      </section>

      {/* Operational Dashboard Visual */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Returns Command Center</p>
                <h3 className="text-2xl font-bold text-gray-900">Operational Dashboard</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Live</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'In Receiving', value: '5,482', sub: '↑ 6% vs last week', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
                { label: 'In Inspection', value: '2,140', sub: '34 hrs avg time', gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)' },
                { label: 'In Routing', value: '1,286', sub: 'SLA 97%', gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)' }
              ].map((metric) => (
                <div 
                  key={metric.label} 
                  className="rounded-2xl text-white p-4 shadow-lg"
                  style={{ backgroundImage: metric.gradient }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">{metric.label}</p>
                  <p className="text-3xl font-bold mt-2">{metric.value}</p>
                  <p className="text-xs mt-1 text-white/80">{metric.sub}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-100 p-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Processing Throughput</p>
              <div className="space-y-2">
                {[
                  { label: 'Inspection to Decision', value: '4h 12m', trend: '↑ 9%' },
                  { label: 'Decision to Route', value: '2h 05m', trend: '↑ 3%' },
                  { label: 'Credits Issued', value: '$482K outstanding', trend: '↓ 12%' }
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-sm text-gray-700">
                    <span>{row.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900">{row.value}</span>
                      <span className="text-xs text-emerald-600 font-semibold">{row.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gray-900 text-white p-4">
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">Fraud Alerts</p>
                <ul className="space-y-2 text-sm">
                  {['Serial returner flagged (6 items)', 'Mismatch on serial vs. purchase', 'High-dollar restock with no RMA'].map((alert) => (
                    <li key={alert} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 mt-1"></span>
                      {alert}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Retail Accountability</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center justify-between">
                    <span>Retailer A</span>
                    <span className="font-semibold text-gray-900">1.9% defect rate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Retailer B</span>
                    <span className="font-semibold text-gray-900">3.4% late returns</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Retailer C</span>
                    <span className="font-semibold text-gray-900">$112K chargebacks pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Every return accounted for</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The returns dashboard focuses on operational truth: volumes, bottlenecks, fraud, OEM credits, and retailer accountability. No resale vanity metrics—just the signals ops teams need to move faster and hold partners accountable.
            </p>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Operational Focus</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Live telemetry rolls up from facilities, RMAs, and channel partners into a single command center. Teams drill into root causes instantly—whether that is a manufacturing defect spike, a retailer missing SLAs, or a surge in fraudulent behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Operational Priorities</p>
            <h2 className="text-4xl font-bold text-gray-900">Five lenses that keep returns accountable</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Configure each focus area to mirror your KPIs and contracts. Data flows in automatically—teams act faster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-gray-50 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">{area.title}</h3>
                <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
                  {area.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Copy Emphasis */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Returns are an operations challenge first</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We treat disposition as the last step—not the first. Inspection quality, fraud prevention, OEM credits, and retail partner performance determine your P&amp;L long before resale happens. The platform enforces that discipline.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Accountability built in</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every workflow leaves an auditable trail: who inspected an item, which retailer sourced it, when credits were requested, and which partners missed SLAs. That evidence powers negotiations and closes the loop with finance and supply chain teams.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Put your returns ops on one dashboard
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Modern operations teams rely on <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> to see volume, quality, fraud, credits, and partners in one place—and act in minutes, not days.
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

