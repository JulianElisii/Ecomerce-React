import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';

const MyOrder = () => {


  const { isCheckOutSideMenuOpen, closeCheckOutSideMenu, cartProducts, setCartProducts, count, setCount, order, setOrder } = useContext(ShoppingCartContext);

const location = useLocation()

// Obtener el pathname desde la location
const { pathname } = location;

// Separar la pathname por '/' y obtener el último segmento
let orderId = pathname.split('/').pop();

if(orderId === 'last') orderId = order.length -1;

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-5'>
        <Link to='/MyOrders' className='absolute left-0'>
        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
      <h1>My Order</h1>
      </div>
    
      <div className='flex flex-col w-80'>
        {
          order?.[orderId]?.products?.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder