import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

const OrderCard = props => {

    const { title, imageUrl, price, id, handleDelete } = props
    return (
        <div className='flex justify-between items-center mb-3 bg-slate-50 rounded-lg'>
            <div className='flex items-center gap-2 p-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
               {handleDelete ? <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon> : null} 
            </div>
        </div>
    )
}

export default OrderCard