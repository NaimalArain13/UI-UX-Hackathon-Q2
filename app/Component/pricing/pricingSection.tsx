import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import React from 'react'

function PricingSection() {
  return (
    <div className='py-7'>
        <div className='flex justify-center items-center'>
         <div className="mb-8 flex flex-col justify-center items-center w-full space-y-9 text-center max-w-[463px]">
          <p>PRICING</p>
          <h1 className="font-bold text-Text2 text-3xl">Simple Pricing</h1>
          <div >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Pricing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        </div>
        </div>
    </div>
  )
}

export default PricingSection