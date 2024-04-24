import React, { useContext } from 'react'
import './styleProductDetail.css'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {

  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);

  const handlecloseProductDetail = () => {
    closeProductDetail();
  }
  //console.log(`PRODUCT TO SHOW: ${productToShow.title}`) //Hay que pedir individualmente cada propiedad del producto
  //console.log(isProductDetailOpen)

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-gray-200`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <XMarkIcon onClick={handlecloseProductDetail} className='h-6 w-6 text-black'></XMarkIcon>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg'
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-md '>${productToShow.title}</span>
        <span className='font-medium text-sm'>${productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail