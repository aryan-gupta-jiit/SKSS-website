import {createContext,useState} from 'react'
import {products} from '../assets/assets'

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency = '₹';

    const delivery_fee=0;

    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({})

    const addToCart=async(itemId)=>{
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId].quantity+=1;
        }
        else{
            cartData[itemId] = { quantity: 1 };
        }
        setCartItems(cartData);
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];
                    }
                }catch(error){
                    console.log(error)
                }
            }
        }
        return totalCount;
    }

    const value={
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,setCartItems,addToCart,getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;