'use client'

import { useDemoModal } from '@/components/ClientLayout'
import Image from 'next/image'

export default function CaseStudies() {
  const { openDemoModal } = useDemoModal()

  const caseStudies = [
    {
      company: 'NZXT',
      logo: '/logos/NZXT Case Study Hero.png?v=1',
      productImage: '/products/NZXT Product.png',
      industry: 'PC Gaming Hardware',
      location: 'Cincinnati, OH',
      challenge: 'NZXT\'s previous 3PL couldn\'t handle specialized gaming PC repairs while meeting tight SLAs. Operating costs were high and visibility was limited across retail and DTC channels.',
      solution: '**nok** unified NZXT\'s entire returns operation—from RMA intake through repair to resale—into one intelligent platform. Full ERP integration with Accumatica enabled automated workflows, serialized tracking, and condition-based pricing across all sales channels.',
      details: [
        { label: 'Speed', value: 'Sub-72 hour turnaround from receipt to repair and return—meeting tight SLAs while maintaining quality' },
        { label: 'Technical Expertise', value: 'Warranty-grade repairs on complex gaming hardware including PSU, motherboard, GPU, and liquid cooling systems' },
        { label: 'Cost Reduction', value: '30% reduction in operating costs through unified platform and intelligent workflows' },
        { label: 'Revenue Recovery', value: 'Multi-channel resale across NZXT D2C and marketplaces with automated condition-based pricing' }
      ],
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      company: 'Bissell',
      logo: '/logos/Bissell Case Study Hero.png?v=1',
      productImage: '/products/Bissell Product.png',
      industry: 'Home Appliances',
      location: 'Two returns nodes across Canada',
      challenge: 'Bissell was losing money on every return. Disconnected systems across 2 warehouses, 4 CX platforms, and 4 marketplace systems meant manual coordination, slow processing, and zero visibility into recovery opportunities.',
      solution: '**nok** replaced Bissell\'s fragmented operation with one unified platform. Intelligent triage routes units to the highest-value outcome, while deep integrations across WMS, CX, and marketplace systems enable automated workflows and multi-channel resale—turning returns profitable for the first time in company history.',
      details: [
        { label: 'Speed', value: 'Sub-72 hour processing from receipt to final disposition across two Canadian facilities' },
        { label: 'Scale', value: 'Processing 1,500+ units weekly with consistent quality and rapid turnaround' },
        { label: 'Profitability', value: 'First profitable returns operation in company history through intelligent triage and value optimization' },
        { label: 'Integration', value: 'Unified platform connecting 2 WMS systems, 4 CX platforms, and 4 marketplace order management systems' },
        { label: 'Revenue Recovery', value: 'Multi-channel resale strategy with condition-based pricing that avoids brand cannibalization' }
      ],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      company: 'Ozlo',
      logo: '/logos/Ozlo Case Study Hero.png',
      productImage: '/products/Ozlo Sleepbuds Product.webp',
      industry: 'Consumer Electronics',
      location: 'North America',
      challenge: 'Ozlo\'s subscription model was unsustainable—warranty replacements cost $70+ per unit using new inventory. Without a refurbishment operation, unit economics didn\'t work.',
      solution: '**nok** built a rapid refurbishment process in partnership with Ozlo\'s engineering team, cutting refurb time by 50% and replacement costs by 71%. Full RMS integration into Ozlo\'s RMA and ERP systems provides real-time visibility and automated workflows—making the subscription model profitable.',
      details: [
        { label: 'Speed', value: '50% reduction in refurbishment time through optimized workflows and engineering partnership' },
        { label: 'Unit Economics', value: 'Reduced replacement costs from $70+ to under $20 per unit—making subscription model viable' },
        { label: 'Cost Savings', value: '71% reduction in warranty fulfillment costs through rapid refurbishment vs. new inventory' },
        { label: 'Integration', value: 'Real-time visibility across RMA support and ERP systems with automated workflows' }
      ],
      gradient: 'from-[#5B4F8C] to-[#6B5FA0]'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Success stories from<br />
            <span className="text-gray-400">leading brands</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            See how brands are transforming returns into revenue with <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span>
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-white px-12 py-8">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className={`grid ${index % 2 === 0 ? 'lg:grid-cols-[30%_70%]' : 'lg:grid-cols-[70%_30%]'}`}>
              {/* Hero Product Image Panel - alternates left/right */}
              <div className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} overflow-hidden flex items-center justify-center`}>
                <div className="relative w-full h-full">
                  <Image 
                    src={study.logo}
                    alt={`${study.company} Case Study`}
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="30vw"
                    priority
                    unoptimized
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
              </div>

              {/* Text Content Panel - alternates right/left */}
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} bg-white flex items-center py-6 ${index % 2 === 0 ? 'pl-0 pr-12' : 'pr-0 pl-12'}`}>
                <div className="w-full">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Case Study
                  </p>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {study.company === 'Ozlo' ? 'Warranty & Subscription Management' : 
                     study.company === 'NZXT' ? 'Specialized Gaming PC Repairs' :
                     'Multi-Channel Returns Processing'}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">The Challenge</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">The Solution</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {study.solution.split('**nok**').map((part, i) => (
                        i === 0 ? part : <><span key={i} className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>{part}</>
                      ))}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Results</p>
                    {study.details.map((detail, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-900 mt-1.5 mr-2"></div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-900 leading-relaxed">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Join leading brands transforming returns into revenue with <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span>
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

