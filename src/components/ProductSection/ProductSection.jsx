import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'


function ProductSection() {

  return (
    <div>
        <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
            <h2 className='text-red-600 text-center text-lg font-inter tracking-normal leading-none'>Summer t-Shirt Sale 30%</h2>
        </div>
        <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
            {storeData.slice(0, 6).map((product, index)=>(
                <div key={index}>
                    <ProductSectionItem id={product.id} img={product.img} name={product.name} text={product.text} size={product.size} color={product.color} price={product.price} totalPrice={product.totalPrice}/>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default ProductSection
