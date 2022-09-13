import React, {useState,useContext} from 'react';

const CartContext =React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState ([]);
    const addToCart = (producto, newQuantity) =>{
       let newCart= cart.filter( product => product.id !== producto.id )
       newCart.push ({...producto, quantity: newQuantity});
       setCart(newCart);
  
    };
    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find (prod => prod.id===id)? true: false;
    const removeFromCart = (id) => setCart(cart.filter (product => product.id !== id));
    const totalItems =() => cart.reduce((acum, item)=> acum + item.quantity,0);
    const totalPrice =() => cart.reduce((acum, item)=> acum + item.quantity * item.valor ,0);
    
    console.log("cart",cart);  
  return (
    <CartContext.Provider value ={{addToCart,clearCart,isInCart,removeFromCart,totalItems,totalPrice,cart}}>
        {children}    
    </CartContext.Provider>
  )
}
