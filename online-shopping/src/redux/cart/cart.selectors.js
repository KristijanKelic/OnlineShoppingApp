import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart;

// Creating selector for cartItems
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accuQuantity, cartItem) => accuQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accuQuantity, cartItem) =>
      accuQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
