import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCard from "../components/ShoppingCard";


const ShoppingCartContext = createContext({});

const initItems = localStorage.getItem("shopping-cart") ?
    JSON.parse(localStorage.getItem("shopping-cart")) : [];

const ShoppingCartProvider = ({ children }) => {

    const [isOpen, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState(initItems);

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const openSideCart = () => {
        setOpen(true);
    };

    const closeSideCart = () => {
        setOpen(false);
    };


    const getItemsQuantity = (id) => {

        return cartItems.find(item => item.id === id)?.quantity || 0;
    };

    const cartQuantity = cartItems.reduce(
        (quantity, item) =>
            item.quantity + quantity, 0);

    const increaseQuantity = (id) => {

        setCartItems((currentItem) => {
            if (currentItem.find(item => item.id === id) == null) {
                return [...currentItem, { id, quantity: 1 }]
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else { return item; }
                })
            }
        })
    };

    const decreaseQuantity = (id) => {

        setCartItems(currentItem => {
            if (currentItem.find(item => item.id === id) == null) {
                return currentItem.filter(item => item.id !== id);
            } else {
                return currentItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else { return item }
                })
            }
        })
    };

    const removeItem = (id) => {
        setCartItems(currentItem => currentItem.filter(item => item.id !== id))
    };


    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            getItemsQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeItem,
            openSideCart,
            closeSideCart,
            cartQuantity,
        }}>
            {children}
            <ShoppingCard isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}


export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}