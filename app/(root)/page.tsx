import ProductList from '@/components/shared/ProductList'
import { getLatestProducts } from '@/lib/actions/product.actions'
import React from 'react'

const Home = async () => {
  const latest = await getLatestProducts()
  return (
    <div className='space-y-8'>
     
      <ProductList data={latest} title='Latest Products' />
    </div>
  )
}

export default Home
