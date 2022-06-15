import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';
import ShippingForm from '../../components/shipping-form/shipping-form.component';


const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    return(
        <CheckoutContainer>
            { cartItems.length ? (
                <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>             
            ) : (<h3> Your cart is empty.</h3>)}
                {cartItems.map((item) => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                ))}
            <Total>TOTAL: ${cartTotal}</Total>
            <h2> Shipping information</h2>
            <ShippingForm />
        </CheckoutContainer>
    );
};

export default Checkout;