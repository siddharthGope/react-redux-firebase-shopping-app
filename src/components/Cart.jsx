import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increaseQuantity,
    decreaseQuantity,
    selectedTotalPrice,
    deleteProduct,
} from "../store/cartSlice";
import { Link } from "react-router";
import Navigation from "../components/Navigation";

function Cart() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector(selectedTotalPrice);

    const increaseQuantityHandler = (id) => dispatch(increaseQuantity(id));
    const decreaseQuantityHandler = (id) => dispatch(decreaseQuantity(id));
    const deleteItem = (id) => dispatch(deleteProduct(id));

    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <div className="container mx-auto px-4 py-8">
                {!products ? (
                    <p className="text-center text-gray-500 text-lg">
                        Your cart is empty
                    </p>
                ) : (
                    <div className="space-y-6">
                        {" "}
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white shadow-md rounded-lg p-4"
                            >
                                <div className="flex justify-center">
                                    <img
                                        className="w-32 h-32 object-cover rounded-lg"
                                        src={product.src}
                                        alt={product.id}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {product.name}
                                    </h3>
                                    <h3 className="text-gray-600">₹{product.price}</h3>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => decreaseQuantityHandler(product.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                                        >
                                            -
                                        </button>
                                        <span className="text-gray-800 font-medium">
                                            {product.quantity}
                                        </span>
                                        <button
                                            onClick={() => increaseQuantityHandler(product.id)}
                                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => deleteItem(product.id)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {totalPrice ? (
                            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mt-2">
                                <span className="text-2xl font-bold text-green-700"><span className="block text-xl font-semibold text-gray-800">
                                    Total
                                </span>

                                    ₹{totalPrice}
                                </span>
                                <Link
                                    to="/payment"
                                    className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow"
                                >
                                    Checkout
                                </Link>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
