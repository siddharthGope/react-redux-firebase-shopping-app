import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity } from '../store/cartSlice'

function Cart() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.cart) || []

    const increaseQuantityHandler = (id) => dispatch(increaseQuantity(id))
    const decreaseQuantityHandler = (id) => dispatch(decreaseQuantity(id))


    return (
        <div className="container mx-auto px-4 py-8">
            {products.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
            ) : (
                <div className="space-y-6"> {
                    products.map((product) => (
                        <div key={product.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white shadow-md rounded-lg p-4">
                            <div className="flex justify-center">
                                <img className="w-32 h-32 object-cover rounded-lg" src={product.src} alt={product.id} />

                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                                <h3 className="text-gray-600">₹{product.price}</h3>
                                <div className="flex items-center space-x-4">
                                    <button onClick={() => decreaseQuantityHandler(product.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200">-</button>
                                    <span className="text-gray-800 font-medium">{product.quantity}</span>
                                    <button onClick={() => increaseQuantityHandler(product.id)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200">+</button>
                                </div>
                            </div>

                        </div>
                    ))
                }</div>)}
        </div>
    )
}

export default Cart