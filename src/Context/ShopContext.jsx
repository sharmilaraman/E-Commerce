 import React,{createContext, useState} from "react";
import all_product from '../Components/Assets/all_product';
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext('');
const getDefaultCart=()=>{
   let cart={};
   for(let index=0;index<all_product.length+1;index++){
      cart[index]=0;
   }
   return cart;
}
function ShopContextProvider(props){
   const [cartItems,setCartItems]=useState(getDefaultCart());
   const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   } 
   console.log(cartItems);
   const removeFromCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }   
 const getTotalCartAmount =()=>{
   let totalamount=0;
   for(const item in CartItems){
    if(CartItems[item]>0){
      let itemInfo=all_product.find((product)=>product.id===Number(item))

         totalamount += itemInfo.new_price * CartItems[item]
    }
    return totalamount;
   }
 }


 const contextValue={getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

     return(
            <ShopContext.Provider value={contextValue}>
               {props.children}
            </ShopContext.Provider>
     )
}
export default ShopContextProvider;