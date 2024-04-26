import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const Clothes = () => {

    const { items, setSearchByTitle, filteredItems, searchByTitle } = useContext(ShoppingCartContext);

    let searchByCategoryClothes = 'clothing'

    const [categoryOfClothes, setCategoryOfClothes] = useState();

    //filtrando por nombre lo que viene filtrado de filteredItems
    const filterItemsClothes = filteredItems?.filter((item) => {
        // Verificar si la categoría del elemento es "men's clothing" o "women's clothing"
        return item.category === "men's clothing" || item.category === "women's clothing";
    });

    //Filtrando por categoria 
    const filteredItemsByCategoty = (items, searchByCategoryClothes) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategoryClothes.toLowerCase()))
    }
    useEffect(() => {
        if (searchByCategoryClothes) setCategoryOfClothes(filteredItemsByCategoty(items, searchByCategoryClothes))
    }, [items, searchByCategoryClothes]);

    //Evaluando si pintamos lo filtrado por nombre o solo la categoria o categoria y nombre
    const filteredItemsToShow = searchByTitle?.length > 0 ? filterItemsClothes : categoryOfClothes;

    const searchingClothes = filteredItemsToShow?.length > 0 ? (
        filteredItemsToShow.map((item, index) => (
            <Card key={index} data={item} />
        ))
    ) : (
        <p>No hay resultados que coincidan con la búsqueda.</p>
    )

    return (
        <Layout>
            <div className='flex flex-col items-center'>
                <h1 className='mb-4'>Clothes</h1>
                <input type='text'
                    placeholder='Busque los productos'
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={(e) => setSearchByTitle(e.target.value)} />
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {searchingClothes}
                </div>
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Clothes