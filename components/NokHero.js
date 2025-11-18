'use client'

import CodeBlock from './CodeBlock'
import RotatingWords from './RotatingWords'
import { useState } from 'react'

export default function NokHero({ onRequestDemo }) {
  return (
    <section className="relative overflow-hidden bg-white pb-12 px-4 sm:pb-16" style={{ marginTop: '-64px', paddingTop: '192px' }}>
      {/* Background gradient */}
      <div className="absolute z-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <div className="background-gradient" style={{ width: '100%', height: '100%' }}></div>
      </div>
      
      {/* White fade overlay at bottom */}
      <div 
        className="absolute z-1 pointer-events-none" 
        style={{ 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: '50%',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 1) 100%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-3xl pb-4">
          {/* Main headline with rotating words */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.12] sm:leading-[1.1]">
            The platform that turns returns into <RotatingWords words={['revenue', 'cost savings', 'retailer accountability', 'insights']} />
          </h1>

          {/* Subheading - no typing effect, line break after "their" */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
            <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>'s platform is built for brands to take control of their <br className="hidden sm:block" />
            reverse supply chain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onRequestDemo}
              className="btn-primary px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 inline-flex items-center justify-center"
            >
              Request a Demo
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => {
                document.getElementById('nok-advantage')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-white border-2 border-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-lg"
            >
              How it Works
            </button>
          </div>
        </div>

        {/* Visual section with dashboard */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Resale Dashboard - Dark Themed */}
          <div className="relative sm:absolute sm:top-0 sm:right-0 sm:w-1/2 lg:w-[45%] z-20 mb-8 sm:mb-0 sm:-mt-16">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-3xl p-4 border border-gray-800 overflow-hidden" style={{ boxShadow: '0 -10px 40px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)' }}>
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
              
              {/* Dashboard Header */}
              <div className="relative flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-white tracking-tight">Resale Dashboard</h3>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-semibold text-emerald-300">Live</span>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="relative grid grid-cols-3 gap-2 mb-3">
                <div className="bg-gradient-to-br from-blue-500/15 via-blue-500/5 to-transparent border border-blue-500/25 rounded-xl p-2.5">
                  <div className="text-[10px] font-semibold text-blue-300 mb-0.5">Recovery</div>
                  <div className="text-2xl font-bold text-white tracking-tight">87%</div>
                  <div className="text-[10px] text-blue-400 font-semibold mt-0.5">↑ 12.4%</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/25 rounded-xl p-2.5">
                  <div className="text-[10px] font-semibold text-emerald-300 mb-0.5">Revenue</div>
                  <div className="text-2xl font-bold text-white tracking-tight">$284K</div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 28.2%</div>
                </div>
                <div className="bg-gradient-to-br from-violet-500/15 via-violet-500/5 to-transparent border border-violet-500/25 rounded-xl p-2.5">
                  <div className="text-[10px] font-semibold text-violet-300 mb-0.5">Items</div>
                  <div className="text-2xl font-bold text-white tracking-tight">3.8K</div>
                  <div className="text-[10px] text-violet-400 font-semibold mt-0.5">↑ 15.8%</div>
                </div>
              </div>

              {/* Chart */}
              <div className="relative bg-black/40 border border-gray-800 rounded-xl p-3 mb-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">Recovery Trend</div>
                <div className="h-20 flex items-end justify-center gap-2">
                  <div className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg shadow-blue-500/50" style={{ height: '35px' }}></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg shadow-blue-500/50" style={{ height: '44px' }}></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg shadow-blue-500/50" style={{ height: '41px' }}></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg shadow-blue-500/50" style={{ height: '51px' }}></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg shadow-blue-500/50" style={{ height: '55px' }}></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg shadow-blue-500/50" style={{ height: '65px' }}></div>
                  </div>
                </div>
              </div>

              {/* Recovery Channels */}
              <div className="relative bg-black/30 border border-gray-800 rounded-xl p-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">Recovery Channels</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-blue-500/40">T</div>
                      <span className="text-xs font-semibold text-gray-200">Trade-In</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-white w-10 text-right">$142K</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-emerald-500/40">D</div>
                      <span className="text-xs font-semibold text-gray-200">Branded D2C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full" style={{ width: '76%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-white w-10 text-right">$98K</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-orange-500/40">A</div>
                      <span className="text-xs font-semibold text-gray-200">Amazon Renewed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-white w-10 text-right">$87K</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-violet-500/40">E</div>
                      <span className="text-xs font-semibold text-gray-200">eBay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-600 to-violet-500 rounded-full" style={{ width: '52%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-white w-10 text-right">$63K</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-cyan-500/40">O</div>
                      <span className="text-xs font-semibold text-gray-200">Offline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full" style={{ width: '44%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-white w-10 text-right">$48K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Returns Feed Table */}
          <div className="relative w-full mt-16 md:mt-24 ml-0">
            <div className="bg-white rounded-3xl p-5 border border-gray-100 overflow-hidden" style={{ boxShadow: '0 -10px 30px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)' }}>
              {/* Table Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-100">
                <h3 style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }} className="text-lg font-bold text-gray-900 tracking-tight">Returns Feed - Bissell</h3>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }} className="text-xs font-semibold text-emerald-700">Live Updates</span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="pb-2 pr-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Image</th>
                      <th className="pb-2 pr-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">SKU</th>
                      <th className="pb-2 pr-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="pb-2 pr-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="pb-2 pr-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Value</th>
                      <th className="pb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 - Fraud (RED) */}
                    <tr className="border-b border-gray-100 bg-red-50/50 hover:bg-red-50 transition-colors">
                      <td className="py-3 pr-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 bg-white">
                          <img 
                            src="/bissell/Crosswave-Cordless-Max-Multi-Surface-Wet-Dry-Vaccum_cf8fdffa-e317-4df9-bc09-a8886aa8a143_1.0ebeb2db6717ed6e9553575950356200.avif" 
                            alt="CrossWave Cordless Max" 
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-gray-900 font-mono font-bold">BIS-2998</td>
                      <td className="py-3 pr-4 text-sm text-gray-900 font-semibold">CrossWave Cordless Max</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 border border-red-200 rounded-lg text-[10px] font-bold text-red-700">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                          Fraud
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-sm text-gray-900 font-bold">$329</td>
                      <td className="py-3">
                        <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-colors">
                          Cancel Refund
                        </button>
                      </td>
                    </tr>

                    {/* Row 2 - Sold */}
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 bg-white">
                          <img 
                            src="/bissell/0001112024291.webp" 
                            alt="SpinWave Robot Vacuum" 
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-gray-700 font-mono font-medium">BIS-1847</td>
                      <td className="py-3 pr-4 text-sm text-gray-900 font-semibold">SpinWave Robot Vacuum</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 border border-emerald-200 rounded-lg text-[10px] font-bold text-emerald-700">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          Sold
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-sm text-emerald-600 font-bold">$249</td>
                      <td className="py-3">
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-400 rounded-lg text-xs font-semibold">
                          N/A
                        </span>
                      </td>
                    </tr>

                    {/* Row 3 - Did Not Arrive (YELLOW) */}
                    <tr className="border-b border-gray-100 bg-amber-50/50 hover:bg-amber-50 transition-colors">
                      <td className="py-3 pr-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 bg-white">
                          <img 
                            src="/bissell/little green.jpg" 
                            alt="Little Green Cleaner" 
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-gray-900 font-mono font-bold">BIS-4521</td>
                      <td className="py-3 pr-4 text-sm text-gray-900 font-semibold">Little Green Cleaner</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-100 border border-orange-200 rounded-lg text-[10px] font-bold text-orange-700">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                          Did Not Arrive
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-sm text-gray-900 font-bold">$124</td>
                      <td className="py-3">
                        <button className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold transition-colors">
                          Contact Retailer
                        </button>
                      </td>
                    </tr>

                    {/* Row 4 - Defective (YELLOW) */}
                    <tr className="border-b border-gray-100 bg-amber-50/50 hover:bg-amber-50 transition-colors">
                      <td className="py-3 pr-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 bg-white">
                          <img 
                            src="/bissell/B0188_Secondary_01.webp" 
                            alt="Pet Hair Eraser Turbo" 
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-gray-900 font-mono font-bold">BIS-7639</td>
                      <td className="py-3 pr-4 text-sm text-gray-900 font-semibold">Pet Hair Eraser Turbo</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 border border-amber-200 rounded-lg text-[10px] font-bold text-amber-700">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                          Defective
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-sm text-gray-900 font-bold">$199</td>
                      <td className="py-3">
                        <button className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold transition-colors">
                          Contact Manufacturer
                        </button>
                      </td>
                    </tr>

                    {/* Row 5 - Recovery */}
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 bg-white">
                          <img 
                            src="/bissell/BISSELL-PowerForce-Helix-Bagless-Upright-Vacuum-3313_b4d59d70-b5ea-4712-a4ce-37763ea7887d.96f446b511bbb59bb090205518f7b1b1.avif" 
                            alt="PowerForce Helix Bagless" 
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-gray-700 font-mono font-medium">BIS-3204</td>
                      <td className="py-3 pr-4 text-sm text-gray-900 font-semibold">PowerForce Helix Bagless</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 border border-blue-200 rounded-lg text-[10px] font-bold text-blue-700">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          Recovery
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-sm text-blue-600 font-bold">$89</td>
                      <td className="py-3">
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-400 rounded-lg text-xs font-semibold">
                          N/A
                        </span>
                      </td>
                    </tr>

                    {/* Row 6 - Sold */}
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 bg-white">
                          <img 
                            src="/bissell/ICONpet_Pro_2746A_Secondary1.webp" 
                            alt="IconPet Pro Cordless" 
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-xs text-gray-700 font-mono font-medium">BIS-5892</td>
                      <td className="py-3 pr-4 text-sm text-gray-900 font-semibold">IconPet Pro Cordless</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 border border-emerald-200 rounded-lg text-[10px] font-bold text-emerald-700">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          Sold
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-sm text-emerald-600 font-bold">$379</td>
                      <td className="py-3">
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-400 rounded-lg text-xs font-semibold">
                          N/A
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

