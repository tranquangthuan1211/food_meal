import { configureStore, combineReducers } from '@reduxjs/toolkit';
import product from './product';

const reducer = combineReducers({
    cart: product,
});

export default configureStore({
    reducer,
});
