import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: "Sony Headphones",
            image_url: "https://cdn.pixabay.com/photo/2018/09/07/23/58/headphone-3661771_1280.jpg",
            price: 2499
        },
        {
            id: 2,
            name: "Black Smart Watch",
            image_url: "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
            price: 4799
        },
        {
            id: 3,
            name: "Black Office Chair",
            image_url: "https://cdn.moglix.com/p/djsrKBRPVjQIC-xxlarge.jpg",
            price: 8499
        },
        {
            id: 4,
            name: "Wireless Mouse",
            image_url: "https://www.hp.com/ca-en/shop/Html/Merch/Images/c06932121_1750x1285.jpg",
            price: 599
        },
        {
            id: 5,
            name: "Gaming Keyboard RGB",
            image_url: "https://cdns3.thecosmicbyte.com/wp-content/uploads/Artimis-1.jpg",
            price: 2599
        },
        {
            id: 6,
            name: "Full HD Monitor 24 inch",
            image_url: "https://www.tpstech.in/cdn/shop/products/Dell_s2421hn_Monitor_-_From_tpstech.in_-main3.jpg?v=1652703185&width=1445",
            price: 10999
        },
        {
            id: 7,
            name: "Noise Cancelling Earbuds",
            image_url: "https://m.media-amazon.com/images/I/61qIEvCy6+L.jpg",
            price: 3999
        },
        {
            id: 8,
            name: "Smartphone Tripod Stand",
            image_url: "https://5.imimg.com/data5/SELLER/Default/2022/5/CC/XF/RJ/114542219/tripod.jpg",
            price: 799
        },
        {
            id: 9,
            name: "External SSD 1TB",
            image_url: "https://www.onlyssd.com/wp-content/uploads/2024/06/SanDisk-E81-1TB-Extreme-Pro-Portable-SSD-SDSSDE81-1T00-G25.jpg",
            price: 8999
        },
        {
            id: 10,
            name: "Portable Bluetooth Speaker",
            image_url: "https://cdn.moglix.com/p/BWYTyuYBqacng-xxlarge.jpg",
            price: 2999
        }
    ]


}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        openProduct(state, action) {
            const item = state.products.find(product => product.id === action.payload)
            if (item) {
                return item
            }
        },
        filterProduct(state, action) {
            const searchItem = action.payload;
            state.products = initialState.products.filter(item =>
                item.name.toLowerCase().includes(searchItem.toLowerCase())
            );
        },
        resetFilter(state) {
            state.products = initialState.products
        }
    }
})

export const { openProduct, filterProduct, resetFilter } = productSlice.actions
export const productsReducer = productSlice.reducer