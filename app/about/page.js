'use client'

import { useDemoModal } from '@/components/ClientLayout'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const { openDemoModal } = useDemoModal()
  const [xaviImageError, setXaviImageError] = useState(false)

  return (
    <>
      {/* Hero Section - Elegant */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        {/* Subtle background */}
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Built by operators.<br />
            <span className="text-gray-400">Built for brands.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We're transforming returns from a cost center into a revenue driver.
          </p>
        </div>
      </section>

      {/* Story Section - Refined */}
      <section className="relative bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                The problem was obvious.
              </h2>
              <div className="space-y-5 text-xl text-gray-600 leading-relaxed">
                <p>
                  <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> was founded by reverse supply chain operators who lived the pain every day.
                </p>
                <p>
                  Traditional 3PLs treat returns as an afterthought. Products disappear into black holes. Recovery rates hover around 30%. Brands lose control, visibility, and millions in potential value.
                </p>
                <p>
                  We knew there was a better way. So we built it—a platform that gives brands complete control over their reverse supply chain.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-10">
              <div className="border-l-2 border-gray-300 pl-8">
                <div className="text-6xl font-bold text-gray-900 mb-2">95%+</div>
                <p className="text-lg text-gray-600">Average Recovery Rate</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-8">
                <div className="text-6xl font-bold text-gray-900 mb-2">6</div>
                <p className="text-lg text-gray-600">Facilities Across North America</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-8">
                <div className="text-6xl font-bold text-gray-900 mb-2">$100M+</div>
                <p className="text-lg text-gray-600">Returns Processed Annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Clean */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        {/* Subtle diagonal gradient accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Our team
            </h2>
          </div>

          {/* Top Row - 4 members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 max-w-5xl mx-auto mb-10">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200 relative group-hover:border-gray-400 transition-all">
                <Image 
                  src="/team/Maddy McIntyre.jpeg"
                  alt="Maddy McIntyre"
                  fill
                  className="object-cover"
                  sizes="128px"
                  quality={95}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Maddy McIntyre</h3>
              <p className="text-gray-600 font-medium mb-2 text-sm">CEO</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fmr. Managing Partner, eGateway Capital
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200 relative group-hover:border-gray-400 transition-all">
                <Image 
                  src="/team/Nick Salgado.jpeg"
                  alt="Nick Salgado"
                  fill
                  className="object-cover"
                  sizes="128px"
                  quality={95}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Nick Salgado</h3>
              <p className="text-gray-600 font-medium mb-2 text-sm">President</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fmr. Global Head, Finance @ Rappi
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200 relative group-hover:border-gray-400 transition-all">
                <Image 
                  src="/team/Sam Brzowski.jpg"
                  alt="Sam Brzowski"
                  fill
                  className="object-cover"
                  sizes="128px"
                  quality={95}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Sam Brzowski</h3>
              <p className="text-gray-600 font-medium mb-2 text-sm">Head of Commercial</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fmr. Head, Data @ PriceSpider
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200 relative group-hover:border-gray-400 transition-all">
                <Image 
                  src="/team/Marc Everds.jpeg"
                  alt="Marc Everds"
                  fill
                  className="object-cover"
                  sizes="128px"
                  quality={95}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Marc Everds</h3>
              <p className="text-gray-600 font-medium mb-2 text-sm">Head of Product</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fmr. Product @ CaseStack
              </p>
            </div>
          </div>

          {/* Bottom Row - 4 members centered */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 max-w-5xl mx-auto">
            {/* Team Member 5 - Xavi Facon */}
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200 relative group-hover:border-gray-400 transition-all">
                {xaviImageError ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-500">X</span>
                  </div>
                ) : (
                  <Image 
                    src="/team/Xavi Headshot.jpg"
                    alt="Xavi Facon"
                    fill
                    className="object-cover"
                    sizes="128px"
                    quality={95}
                    onError={() => setXaviImageError(true)}
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Xavi Facon</h3>
              <p className="text-gray-600 font-medium mb-2 text-sm">Head of Engineering</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fmr. Global Product @ NielsenIQ
              </p>
            </div>

            {/* Team Member 6 - Griffin Parrill */}
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200 relative group-hover:border-gray-400 transition-all">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-500">G</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Griffin Parrill</h3>
              <p className="text-gray-600 font-medium mb-2 text-sm">Operations Lead</p>
            </div>

            {/* Team Member 7 */}
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200 relative group-hover:border-gray-400 transition-all">
                <Image 
                  src="/team/Corbett Morgan.jpeg"
                  alt="Corbett Morgan"
                  fill
                  className="object-cover"
                  sizes="128px"
                  quality={95}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Corbett Morgan</h3>
              <p className="text-gray-600 font-medium mb-2 text-sm">Product Advisor</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Technical Co-Founder, Loop Returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Refined */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's talk
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> can transform your returns into revenue.
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




