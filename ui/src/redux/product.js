import { createSlice } from '@reduxjs/toolkit';
const product = createSlice({
    name: 'product',
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        addToCart(state, action) {
            state.products.push(action.payload);
            state.total += action.payload.price
            console.log(state.total)
        },
        moveTocart(state, action) {
            state.total -= state.products[action.payload].price
            state.products.splice(action.payload, 1);
        },
    },
});
console.log(product);
export const { addToCart, moveTocart } = product.actions;
export default product.reducer;
