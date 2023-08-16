import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../pages/Products/type";

interface CartItem {
  item: Product;
  count: 0;
}
interface Cart {
  items: Array<CartItem>;
}
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] } as Cart,
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
    },
  },
});
const { actions, reducer } = cartSlice;
export const { addItem } = actions;
export default reducer;
