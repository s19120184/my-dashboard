import { CartCounter } from '../../../components/shopping-cart/CartCounter';
import React from 'react'


export const metadata = {
 title: 'Shopping Cart',
 description: 'Un simple contador',
};


export default function CounterPage() {
 return (
    <div className="flex flex-col items-center bg-black justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={ 20 } />
      
    </div>
  );
}
