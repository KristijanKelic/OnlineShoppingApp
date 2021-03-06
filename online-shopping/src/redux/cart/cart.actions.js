import { cartActionTypes } from './cart.types';

export const addItemToCart = item => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
});
