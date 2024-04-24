import { createContext, useState } from "react";


 export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Estado de suma de productos en carrito
    const [count, setCount] = useState(0);

    // Estados del detalle del producto... abierto/cerrado
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

      // Estados del carrito... side abierto/cerrado
      const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
      const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
      const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

    // Estado para ver detalles del producto
    const [productToShow, setProductToShow] = useState({});

    //Estado para agregar producto al carrito 
    const [cartProducts, setCartProducts] = useState([]);

    //Estado para orden de compra 
    const [order, setOrder] = useState([]);

    
    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail, 
            closeProductDetail, 
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            order,
            setOrder
            }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}