import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { CheckIcon, PlusIcon } from '@heroicons/react/16/solid';


const Card = ({ data }) => {
  const { count, setCount, openProductDetail, closeProductDetail, setProductToShow, cartProducts, setCartProducts, openCheckOutSideMenu, closeCheckOutSideMenu } = useContext(ShoppingCartContext);
  const { category, title, price, image, description, id } = data;
  // console.log(data)

  const handleAddToCart = (event, dataProduct) => {
    event.stopPropagation()
    setCount(count + 1); // Actualiza el estado del contador del carrito
    const newProduct = {
      category: dataProduct.category,
      title: dataProduct.title,
      price: dataProduct.price,
      image: dataProduct.image,
      description: dataProduct.description,
      id: dataProduct.id
    };
    setCartProducts([...cartProducts, newProduct]);
    console.log(cartProducts)
    closeProductDetail()
    openCheckOutSideMenu()
  };

  const handleOpenProductDetail = (detailProduct) => {
    //console.log(detailProduct.title)
    openProductDetail();
    setProductToShow({
      category: detailProduct.category,
      title: detailProduct.title,
      price: detailProduct.price,
      image: detailProduct.image,
      description: detailProduct.description
    })
    closeCheckOutSideMenu();
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.some(product => product.id === id);
  
    const handleClick = (event) => {
      if (isInCart) {
        // No hacer nada si el producto ya está en el carrito y se hace clic en el icono de check
        event.stopPropagation();
      } else {
        // Manejar el evento de agregar al carrito si el producto no está en el carrito
        handleAddToCart(event, data);
      }
    };
  
    return (
      <button
        className={`absolute top-0 right-0 flex justify-center items-center ${isInCart ? 'bg-black' : 'bg-white'} w-6 h-6 rounded-full m-2 p-1`}
        onClick={handleClick}
      >
        {isInCart ? <CheckIcon className='text-white' /> : <PlusIcon className='text-black' />}
      </button>
    );
  };
  

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={() => handleOpenProductDetail(data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt="Product" />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{price}</span>
      </p>
    </div>
  );
};

export default Card;
