import { CheckoutItemContainer, ImageContainer, BaseSpan, Value, ButtonContainer, Quantity, Arrow } from './checkout-item.styles';
import { removeItemFromCart, addItemToCart, delItemFromCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';
import { CartItem } from '../../store/cart/cart.types';
import { selectCartItems } from '../../store/cart/cart.selector';

type CheckoutItemProps = {
    cartItem: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const deleteItemHandler = () => dispatch(delItemFromCart(cartItems, cartItem));


    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            
            <Quantity>
                <Arrow onClick={deleteItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <ButtonContainer onClick={removeItemHandler}>&#10005;</ButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;