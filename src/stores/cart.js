import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')): [],
    statusTab: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const {productId, quantity, size, generatedId} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId && item.size === size)
            if (indexProductId >= 0 ) {
                //if product is already in cart
                state.items[indexProductId].quantity += quantity  
            } else {
                state.items.push({productId, quantity, size, generatedId})
            }
            
            localStorage.setItem("carts", JSON.stringify(state.items));

        },
        changeQuantity(state, action){
            const {productId, quantity, size, generatedId} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.generatedId === generatedId);
            if (quantity > 0){
                state.items[indexProductId].quantity = quantity;
            } else {
               state.items = (state.items).filter(item => item.generatedId !== generatedId)
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state){
            if (state.statusTab === false){
                state.statusTab = true
            }else {
                state.statusTab = false
            }
        }
    }
})

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions
export default cartSlice.reducer;