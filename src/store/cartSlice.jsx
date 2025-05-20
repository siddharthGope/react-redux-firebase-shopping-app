import { createSelector, createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [{ id: 100, name: 'Iphone', price: 100000, quantity: 1, src: 'https://inspireonline.in/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605206' }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: 1,
                src: action.payload.image_url
            }
            state.cart.push(newItem)
        },
        deleteProduct(state, action) {
            console.log(action.payload);
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseQuantity(state, action) {
            const item = state.cart.find(product => product.id === action.payload)
            if (item) {
                item.quantity += 1
            }
        },
        decreaseQuantity(state, action) {
            const item = state.cart.find(product => product.id === action.payload)
            if (item.quantity > 1 && item) {
                item.quantity -= 1
            }
        }
    }
})

const selectedCartItems = (state) => state.cart.cart;
const selectedTotalPrice = createSelector(
    [selectedCartItems],
    (items) => items.reduce((total, item) => total + item.price * item.quantity, 0)
)

export const { increaseQuantity, decreaseQuantity, addToCart, deleteProduct } = cartSlice.actions
export const cartReducer = cartSlice.reducer
export { selectedTotalPrice }