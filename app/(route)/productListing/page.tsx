import Navbar from '@/app/Component/header'
import ProductTopSection from '@/app/Component/productListPage/productTop'
import Shop from '@/app/Component/productListPage/shop'
import React from 'react'

function ProductListing() {
  return (
    <div>
        <ProductTopSection />
        <Navbar />
        <Shop />
    </div>
  )
}

export default ProductListing