import CartTypes from './cart-types'

const initialState = {
  products: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Adicionando produto novo
    case CartTypes.NEW:
      const productExists = state.products.some(item => item.id === action.payload.id);

      // Verificando se ele já está no carrinho
      if (productExists) {
        return {
          ...state,
          products: state.products.map(product => product.id === action.payload.id
            ? { ...product, quantity: product.quantity += 1 }
            : product
          )
        }
      } else {
        return { ...state, products: [...state.products, action.payload] };
      }

    // Removendo produto pelo botão
    case CartTypes.REMOVE:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }

    // Aumentando Quantidade pelo botão
    case CartTypes.INCREASE:
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload
          ? { ...product, quantity: product.quantity += 1 }
          : product
        )
      };

    // Diminuindo Quantidade pelo botão
    case CartTypes.DECREASE:
      // Se a quantidade for igual a 1, tira o produto da lista
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload
          ? { ...product, quantity: product.quantity -= 1 }
          : product
        ).filter(product => product.quantity > 0)
      };

    default:
      return state;
  }
}

export default cartReducer;
