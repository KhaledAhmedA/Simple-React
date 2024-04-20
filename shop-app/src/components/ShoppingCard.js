import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/CardContext";
import CartItem from "./CartItem";
import formatCurrency from "./formatCurrency";
import storeItems from "../data/storeItems.json";


const ShoppingCard = ({ isOpen }) => {

    const { cartItems, closeSideCart } = useShoppingCart();

    return (
        <Offcanvas show={isOpen} onHide={closeSideCart} placement="end">

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Stack gap={3}>

                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}

                    <div className="ms-auto fw-bold fs-5">
                        <span>
                            TOTAL {" "}
                        </span>
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(ele => ele.id === cartItem.id);
                                return total + (item?.price || 0) * cartItem.quantity;
                            }, 0)
                        )}

                    </div>

                </Stack>
            </Offcanvas.Body>

        </Offcanvas>
    )
}

export default ShoppingCard;