import ProductList from '@/components/shared/ProductList'
import sampleData from '@/lib/data'
import React from 'react'

const Home = () => {
  return (
    <div className='space-y-8'>
      <h2>Latest Products</h2>
      <ProductList data={sampleData.products} />
    </div>
  )
}

export default Home
