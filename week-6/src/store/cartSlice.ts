import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../type/type";
const CART_LOCAL = "local-user-cart";

interface CartItem {
  item: Product;
  count: 0;
}
interface Cart {
  items: Array<CartItem>;
}

const getCartFromLocalStorage = () => {
  const value = localStorage.getItem(CART_LOCAL);

  if (typeof value === "string") {
    return JSON.parse(value); // ok
  }
  return { items: [] };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage() as Cart,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (i) => i.item.id === action.payload.item.id
      );
      if (itemIndex < 0) {
        state.items.push(action.payload);
      } else {
        state.items[itemIndex].count += action.payload.count;
      }
      localStorage.setItem(CART_LOCAL, JSON.stringify(state));
    },
    setItemCount(state, action) {
      const itemIndex = state.items.findIndex(
        (i) => i.item.id === action.payload.item.id
      );
      state.items[itemIndex].count = action.payload.count;
      localStorage.setItem(CART_LOCAL, JSON.stringify(state));
    },
    deleteItem(state, action) {
      const itemIndex = state.items.findIndex(
        (i) => i.item.id === action.payload.item.id
      );
      state.items.splice(itemIndex, 1);
      localStorage.setItem(CART_LOCAL, JSON.stringify(state));
    },
  },
});
const { actions, reducer } = cartSlice;
export const { addItem, setItemCount, deleteItem } = actions;
export default reducer;
