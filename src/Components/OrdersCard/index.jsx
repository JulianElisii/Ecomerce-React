import React from 'react';

const OrdersCard = ({ totalPrice, totalProducts, date }) => {
  return (
    <div className="bg-gray-300 rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2 gap-2">
        <div className='flex flex-col items-center'>
        <p className="text-gray-700 text-md font-bold">Fecha de compra:</p>
        <p className="text-gray-700 text-sm">{formatDate(date)}</p>
        </div>
        <div className='flex flex-col items-center'>
        <p className="text-gray-700 text-md font-bold">Precio de la compra:</p>
        <p className="text-gray-700 text-sm">{formatCurrency(totalPrice)}</p>
        </div>
        <div className='flex flex-col items-center'>
        <p className="text-gray-700 text-md font-bold">Total de productos:</p>
        <p className="text-gray-700 text-sm">{totalProducts}</p>
        </div>
        
      </div>
      {/* Opcional: Agregar más detalles o acciones aquí */}
    </div>
  );
};

// Función para formatear la fecha (puedes usar una librería de formato de fechas como date-fns)
const formatDate = (date) => {
  // Ejemplo: formatear 'date' a un formato legible
  return new Date(date).toLocaleDateString();
};

// Función para formatear el precio (puedes ajustarla según tus necesidades)
const formatCurrency = (amount) => {
  // Ejemplo: formatear 'totalPrice' a un formato de moneda (USD)
  return `$${amount.toFixed(2)}`;
};

export default OrdersCard;
