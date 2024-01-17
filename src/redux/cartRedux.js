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
      for (let i=0; i < state.products.length; i++){
        if ( action.payload._id === state.products[i]._id ){
          state.products[i].quantity -= 1;
          if ( state.products[i].quantity === 0 )
            state.products.splice(i,1);
            state.quantity -= 1;
            break;
        }
      }
      state.total -= action.payload.price;
    },
    incCart: (state, action) => {
      for (let i=0; i < state.products.length; i++){
        if ( action.payload._id === state.products[i]._id ){
          state.products[i].quantity += 1;
          break;
        }
      }
      state.total += action.payload.price;
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