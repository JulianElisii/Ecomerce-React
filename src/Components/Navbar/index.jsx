import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/16/solid';

const Navbar = () => {

    const activeStyle = "underline underline-offset-4"
    const { count, openCheckOutSideMenu, closeProductDetail } = useContext(ShoppingCartContext);


    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to="/"
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => closeProductDetail()}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => closeProductDetail()}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => closeProductDetail()}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/jewelery"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => closeProductDetail()}
                    >
                        Jewelery
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    julian@gmail.com
                </li>
                <li>
                    <NavLink
                        to="/MyAccount"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/MyOrders"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/SingIn"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        SingIn
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black' onClick={() => openCheckOutSideMenu()} />
                    <div>{count}</div>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar