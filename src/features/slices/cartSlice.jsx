import { createSlice } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload;
            try {
                const exists = state.cart.find((product) => product.id === productId.id && product.size === productId.size && product.color === productId.color);
                if(exists){
                    exists.amount++;
                    exists.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }else{
                    state.cart.push({
                        id: productId.id,
                        name: productId.name,
                        color: productId.color,
                        price: productId.price,
                        size: productId.size,
                        img: productId.img,
                        text: productId.text,
                        totalPrice: productId.price,
                        amount: 1
                    })
                    state.totalAmount++;
                    state.totalPrice += productId.price
                }
                
            } catch (error) {
                return error
            }
        },
        removeFromCart (state, action) {
            const productId = action.payload
            try {
                const exists = state.cart.find((product) => product.id === productId.id && product.size === productId.size && product.color === productId.color);
                if(exists.amount === 1){
                    state.cart = state.cart.filter((product) => product.id !== productId.id || product.size !== productId.size || product.color !== productId.color)
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                }else{
                    exists.amount--;
                    exists.totalPrice -= productId.price;
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                }
            } catch (error) {
                return error
            }

        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;