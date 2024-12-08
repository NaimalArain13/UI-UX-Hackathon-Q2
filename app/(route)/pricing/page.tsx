import Navbar2 from '@/app/Component/header2'
import PriceCard from '@/app/Component/pricing/priceCard'
import PricingSection from '@/app/Component/pricing/pricingSection'
import React from 'react'

function Pricing() {
  return (
    <div>
        <Navbar2 />
        <PricingSection />
        <PriceCard />
    </div>
  )
}

export default Pricing