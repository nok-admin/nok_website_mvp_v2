'use client'

import { useDemoModal } from '@/components/ClientLayout'
import NokHero from '@/components/NokHero'
import BrandLogos from '@/components/BrandLogos'
import StackAdvantage from '@/components/StackAdvantage'

export default function ReturnsManagement() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      <NokHero onRequestDemo={openDemoModal} />
      <BrandLogos />
      <StackAdvantage />
    </>
  )
}

