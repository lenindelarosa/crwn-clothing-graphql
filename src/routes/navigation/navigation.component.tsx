import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles'

const Navigaton = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(signOutStart());
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
                        ):(
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigaton