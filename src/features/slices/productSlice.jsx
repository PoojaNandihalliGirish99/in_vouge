import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
        singleProduct: JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
        error: false
    },
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload)
                console.log("after filter: ", filter)
                state.filteredProducts = filter;
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filteredData", saveState);
                state.error = false;
            } catch (error) {
                return error;
            }
        },
        singleProduct(state, action) {
            try {
                const product = storeData.filter((item) => action.payload === item.id);
                state.singleProduct = product;
                const saveState = JSON.stringify(product);
                sessionStorage.setItem("singleProduct", saveState);
                // console.log(product)
            } catch (error) {
                return error;
            }
        },
        filterByGender(state, action) {
            console.log(action.payload)
            try {
                const gender = state.filteredProducts.filter((item) => item.gender === action.payload);
                state.error = false;
                state.filteredProducts = gender;
                const oneGenderType = gender.length > 0;
                if (oneGenderType) {
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    sessionStorage.setItem("filteredData", saveState)
                } else {
                    state.error = true;
                    state.filteredProducts = []
                }
            } catch (error) {
                return error;
            }
        },
        sortByPrice(state) {
            try {
                const price = state.filteredProducts.sort((a, b) => a.price > b.price ? -1 : 1)
                state.filteredProducts = price;
                let count = price.length;
                if (count > 1) {
                    const noError = false;
                    state.error = noError
                    if (!noError) {
                        state.filteredProducts = price
                        const saveState = JSON.stringify(price);
                        sessionStorage.setItem("filteredData", saveState)
                    }
                } else {
                    state.error = true;
                    state.filteredProducts = []
                }
            } catch (error) {
                return error;
            }
        },
        filterByColor(state, action) {
            console.log(action.payload)
            try {
                const color = state.filteredProducts.filter((item) => item.color.includes(action.payload));
                console.log("filtered by color: ",color)
                state.error = false;
                state.filteredProducts = color;
                if (color.length <= 0) {
                    state.error = true;
                    state.filteredProducts = []
                } else {
                    state.error = false;
                    state.filteredProducts = color;
                    const saveState = JSON.stringify(color);
                    sessionStorage.setItem("filteredData", saveState)
                }

            } catch (error) {
                return error;
            }

        },
        filterBySize(state, action) {
            try {
                const size = state.filteredProducts.filter((item) => item.size.includes(action.payload));
                state.error = false;
                state.filteredProducts = size;
                if (size.length <= 0) {
                    state.error = true;
                    state.filteredProducts = []
                } else {
                    state.error = false;
                    state.filteredProducts = size;
                }
                const saveState = JSON.stringify(size);
                sessionStorage.setItem("filteredData", saveState);
            } catch (error) {
                return error;
            }
        }
    },
})

export const { filterProducts, singleProduct, filterByGender, sortByPrice, filterByColor, filterBySize } = productSlice.actions;
export default productSlice.reducer