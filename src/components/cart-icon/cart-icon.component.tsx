import { CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles';
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { useSelector} from 'react-redux';


const CartIcon = () => {

    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIcon/>   
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;