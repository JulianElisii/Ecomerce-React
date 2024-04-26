import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const Jewelery = () => {

    const { items, filteredItems, searchByTitle, setSearchByTitle } = useContext(ShoppingCartContext);

    let searchByCategory = 'jewelery'
    const [categoryOfJewelery, setCategoryOfJewelery] = useState();

    //filtrando por nombre lo que viene filtrado de filteredItems
    const filterItemsJewelery = filteredItems?.filter((item) => {
        // Verificar si la categoría del elemento es "men's clothing" o "women's clothing"
        return item.category === searchByCategory;
    });

    const filteredItemsByCategoty = (items, searchByCategoryMen) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategoryMen.toLowerCase()))
    }
    useEffect(() => {
        if (searchByCategory) setCategoryOfJewelery(filteredItemsByCategoty(items, searchByCategory))
    }, [items, searchByCategory]);

    //Evaluando si pintamos lo filtrado por nombre o solo la categoria o categoria y nombre
    const filteredItemsToShow = searchByTitle?.length > 0 ? filterItemsJewelery : categoryOfJewelery;

    const searchingElectronics = filteredItemsToShow?.length > 0 ? (
        filteredItemsToShow.map((item, index) => (
            <Card key={index} data={item} />
        ))
    ) : (
        <p>No hay resultados que coincidan con la búsqueda.</p>
    )

    return (
        <Layout>
            <div className='flex flex-col items-center'>
                <h1 className='mb-4'>Jewelery</h1>
                <input type='text'
                    placeholder='Busque los productos'
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={(e) => setSearchByTitle(e.target.value)} />
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {searchingElectronics}
                </div>
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Jewelery