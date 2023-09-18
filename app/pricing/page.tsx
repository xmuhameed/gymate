import { Landing } from '@/Components/Landing';
import { PricingChart } from '@/Components/homePage/PricingChart';
import React from 'react'

const pricing = () => {
  return (
    <>
    <Landing mainHeading="Pricing"/>
    <div className="w-sreen mx-8">
      <PricingChart />
    </div>
  </>
  )
}
export default pricing;