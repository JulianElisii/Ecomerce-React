import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { data } from 'autoprefixer'
import ProductDetail from '../../Components/ProductDetail'

const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setItems(data); // Actualiza el estado con los datos recibidos
       // console.log(data); // Muestra los datos en la consola
      }) 
  }, []);

  return (
    <>
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item,index) => (
            <Card key={index} data={item} />
          ))
        }
        </div>
        <ProductDetail/>

      </Layout>

    </>
  )
}

export default Home