import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

const Home = () => {

  const { items, setSearchByTitle, filteredItems, searchByTitle } = useContext(ShoppingCartContext);

  const filteredItemsToShow = searchByTitle?.length > 0 ? filteredItems : items;

  const searchingTitle = filteredItemsToShow?.length > 0 ? (
    filteredItemsToShow.map((item, index) => (
      <Card key={index} data={item} />
    ))
  ) : (
    <p>There are no results matching your search.</p>
  )

  return (
    <>
      <Layout>
        <div className='flex flex-col items-center'>
          <h1 className='mb-4'>Exclusive products</h1>
        </div>

        <input type='text'
          placeholder='Search products'
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(e) => setSearchByTitle(e.target.value)} />

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {searchingTitle}
        </div>
        <ProductDetail />
      </Layout>
    </>
  )
}

export default Home