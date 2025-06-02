import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // Adicionando produto novo
    newItem: (state, action) => {
      const productExists = state.products.some(item => item.id === action.payload.id);

      // Verificando se ele já está no carrinho
      if (productExists) {
        state.products = state.products.map(product => product.id === action.payload.id
          ? { ...product, quantity: product.quantity += 1 }
          : product
        )
      } else {
        state.products = [...state.products, { ...action.payload, quantity: 1 }];
      }
    },

    // Removendo produto pelo botão
    removeItem: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },

    // Aumentando Quantidade pelo botão
    increaseItem: (state, action) => {
      state.products = state.products.map(product => product.id === action.payload
        ? { ...product, quantity: product.quantity += 1 }
        : product
      )
    },

    // Diminuindo Quantidade pelo botão
    decreaseItem: (state, action) => {
      state.products = state.products.map(product => product.id === action.payload
        ? { ...product, quantity: product.quantity -= 1 }
        : product
      ).filter(product => product.quantity > 0)
    }
  }
})

export const { newItem, removeItem, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
