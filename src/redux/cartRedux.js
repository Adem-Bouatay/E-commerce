import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    frais: 10,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    decCart: (state, action) => {
      const index = action.payload[1];
      state.products[index].quantity -= 1;
      if ( state.products[index].quantity === 0 ){
        state.products.splice(index,1);
        state.quantity = state.products.length;
      }
      state.total -= action.payload[0];
    },
    incCart: (state, action) => {
      state.products[action.payload[1]].quantity += 1;
      state.total += action.payload[0];
    },
    reset: (state) => {
      state.products= [];
      state.quantity= 0;
      state.total= 0;
      state.frais= 10;
    }
  },
});

export const { addProduct, decCart, incCart, reset } = cartSlice.actions;
export default cartSlice.reducer;