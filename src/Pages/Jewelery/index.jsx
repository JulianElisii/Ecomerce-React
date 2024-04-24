import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const Jewelery = () => {

    const { items } = useContext(ShoppingCartContext);

    let searchByCategory = 'jewelery'
    const [categoryOfJewelery, setCategoryOfJewelery] = useState();


    const filteredItemsByCategoty = (items, searchByCategoryMen) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategoryMen.toLowerCase()))
    }
    useEffect(() => {
        if (searchByCategory) setCategoryOfJewelery(filteredItemsByCategoty(items, searchByCategory))
    }, [items, searchByCategory]);

    return (
        <Layout>
            <div className='flex flex-col items-center'>
                <h1 className='mb-4'>Jewelery</h1>
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        categoryOfJewelery?.map((item, index) => (
                            <Card key={index} data={item} />
                        ))}
                </div>
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Jewelery