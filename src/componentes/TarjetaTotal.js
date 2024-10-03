import React from 'react';

const TarjetaTotal = ({ total, onCheckout }) => {
  return (
    <div className="tarjeta-total border p-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">Resumen del Carrito</h3>
      <p className="text-lg mb-4">Total: <span className="font-bold text-primary">${total.toFixed(2)}</span></p>
      <button 
        onClick={onCheckout}
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Proceder al Pago
      </button>
    </div>
  );
}

export default TarjetaTotal;
