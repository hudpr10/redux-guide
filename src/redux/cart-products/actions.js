import CartTypes from "./cart-types";

export const NewItem = (product) => ({
  type: CartTypes.NEW,
  payload: { ...product }
});

export const RemoveItem = (id) => ({
  type: CartTypes.REMOVE,
  payload: id
});

export const IncreaseItem = (id) => ({
  type: CartTypes.INCREASE,
  payload: id
});

export const DecreaseItem = (id) => ({
  type: CartTypes.DECREASE,
  payload: id
});
