import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    
    if(existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1 }
            : cartItem
        )};
        return [...cartItems, { ...productToAdd, quantity: 1 }];
        //createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    };

const delCartItem = (cartItems: CartItem[], productToDelete: CartItem): CartItem[] => {
    const isLastCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDelete.id && cartItem.quantity===1
    );
    
    if(!isLastCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToDelete.id
            ? {...cartItem, quantity: cartItem.quantity -1 }
            : cartItem
        );
        } else {
            return cartItems.filter((item) => item.id !== productToDelete.id);
        }
    };
    
const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem):CartItem[] => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
};

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export type SetCartIsOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type ClearCartItems = Action<CART_ACTION_TYPES.CLEAR_CART_ITEMS>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetCartIsOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const clearCartItems = withMatcher((): ClearCartItems => 
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEMS)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem)  => {
    const newCartItems= addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const delItemFromCart = (cartItems: CartItem[], productToDelete: CartItem) => {
    const newCartItems= delCartItem(cartItems, productToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems= removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
