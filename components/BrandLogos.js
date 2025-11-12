'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function BrandLogos() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const brands = [
    { name: 'Bissell', logo: '/logos/Logo_Bissell.svg' },
    { name: 'FOREO', logo: '/logos/Logo_FOREO.png' },
    { name: 'NZXT', logo: '/logos/Logo_NZXT.svg' },
    { name: 'Oliso', logo: '/logos/Logo_Oliso.webp' },
    { name: 'Ozlo', logo: '/logos/Logo_Ozlo_v2.png' },
    { name: 'Beauty By Imagination', logo: '/logos/Logo_Beauty_By_Imagination.png' }
  ]

  return (
    <section ref={sectionRef} className="pt-8 pb-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-6 text-center">
          Trusted by Leading Brands
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16" style={{ alignItems: 'center' }}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="brand-logo-container"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${300 + index * 80}ms, transform 0.6s ease-out ${300 + index * 80}ms`
              }}
            >
              <div className={`relative flex items-center justify-center ${brand.name === 'FOREO' ? 'w-40 h-20' : 'w-32 h-16'}`}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain brand-logo"
                  sizes={brand.name === 'FOREO' ? '160px' : '128px'}
                  style={{ 
                    objectPosition: 'center',
                    transform: brand.name === 'Oliso' ? 'translateY(-8px)' : 
                               brand.name === 'FOREO' ? 'translateY(3px)' : 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brand-logo-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .brand-logo {
          filter: grayscale(100%);
          opacity: 0.5;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .brand-logo-container:hover .brand-logo {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  )
}

