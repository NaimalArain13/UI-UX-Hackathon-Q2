import Navbar from '@/app/Component/header'
import ProductDetail from '@/app/Component/productDetails/productDetails'
import TopSection from '@/app/Component/productListPage/productTop'
import React from 'react'

function ProductDetails() {
  return (
    <div>
      <TopSection />
      <Navbar />
        <ProductDetail />
    </div>
  )
}

export default ProductDetails