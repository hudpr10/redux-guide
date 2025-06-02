// Usado em dados dinamicos que derivam de outros dados
// Quantidade total de produtos, preço total no carrinho...
export const selectProductsCount = (rootReducer) => {
  return rootReducer.cart.products.reduce((acc, curr) => acc + curr.quantity, 0);
}

export const selectTotalPriceOnCart = (rootReducer) => {
  return rootReducer.cart.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0.00);
}