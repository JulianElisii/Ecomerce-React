import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const Clothes = () => {

    const { items } = useContext(ShoppingCartContext);

    let searchByCategoryMen = 'clothing'
    const [categoryOfMen, setCategoryOfMen] = useState();


    const filteredItemsByCategoty = (items, searchByCategoryMen) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategoryMen.toLowerCase()))
    }
    useEffect(() => {
        if (searchByCategoryMen) setCategoryOfMen(filteredItemsByCategoty(items, searchByCategoryMen))
    }, [items, searchByCategoryMen]);

    return (
        <Layout>
            <div className='flex flex-col items-center'>
                <h1 className='mb-4'>Clothes</h1>
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        categoryOfMen?.map((item, index) => (
                            <Card key={index} data={item} />
                        ))}
                </div>
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Clothes