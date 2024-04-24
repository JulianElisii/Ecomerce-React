import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';

const MyOrders = () => {

  const { order } = useContext(ShoppingCartContext);


  return (
    <Layout>
      <div className='flex flex-col items-center'>
       <div className='mb-4'>My Orders</div> 
        {order.map((singleOrder, index) => (
          <Link key={index} to={`/MyOrders/${index}`}>
            <OrdersCard
              totalPrice={singleOrder.totalPrice}
              totalProducts={singleOrder.totalProducts}
              date={singleOrder.date.toISOString()}
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default MyOrders