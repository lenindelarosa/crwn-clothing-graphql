import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from 'react-redux'
import { setIsCartOpen } from "../../store/cart/cart.action";
import { CartDropdownContainer, CartItems, EmtpyMessage } from './cart-dropdown.styles'

const CartDropdown = () => {
    const dispatch = useDispatch();

    // type cartItem = {
    //     id: number;
    //     name: string;
    //     quantity: number;
    //     imageUrl: string;
    //     price: number;
    // }

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(false));
        navigate('/checkout')
    };
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item}/>
                        ))
                    ) : (
                        <EmtpyMessage>Your cart is empty.</EmtpyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler} buttonType={BUTTON_TYPE_CLASSES.base}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;