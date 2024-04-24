import React, { useContext } from 'react'
import './CheckOutSideMenu.css'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';
import { Link } from 'react-router-dom';

const CheckOutSideMenu = () => {

  const { isCheckOutSideMenuOpen, closeCheckOutSideMenu, cartProducts, setCartProducts, count, setCount, order, setOrder } = useContext(ShoppingCartContext);

  //Cerrar carrito de compras 
  const handlecloseProductDetail = () => {
    closeCheckOutSideMenu();
  }

  //Eliminar Productos del carrito de compras 
  const handleDelete = (id) => {
    const dontDeleteProduct = cartProducts.filter(product => product.id != id);
    setCartProducts(dontDeleteProduct);
    setCount(count - 1)
    if (count === 1) {
      closeCheckOutSideMenu()
    }
  }
  const handleCheckOut = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    //setCount(0)
  }

  return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-gray-200`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <XMarkIcon onClick={handlecloseProductDetail} className='h-6 w-6 text-black'></XMarkIcon>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 mb-6 '>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>{totalPrice(cartProducts)}</span>
        </p>
      </div>
      <div className='flex justify-center'>
        <Link to='/MyOrders/last'>
          <button className='bg-black py-3 mb-4 text-white w-80 rounded-lg ' onClick={() => handleCheckOut()}>CheckOut</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckOutSideMenu