import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../store/cartSlice";
import Navigation from "./Navigation";

const Products = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const product = useSelector((state) =>
        state.products.products.find((product) => product.id === Number(productId))
    );

    const isProductOnCart = useSelector((state) =>
        state.cart.cart.find((productOnCart) => productOnCart.id === product.id)
    );

    const addItemToCart = () => {
        const selectedProduct = {
            id: product.id,
            name: product.name,
            image_url: product.image_url,
            price: product.price,
        };
        dispatch(addToCart(selectedProduct));
    };

    return (
        <>
            <nav>
                <Navigation />
            </nav>
            {!product ? (
                <p className="text-center text-gray-500 text-lg mt-8">
                    No product available to show
                </p>
            ) : (
                <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <img
                            style={{ width: "400px", height: "400px" }}
                            src={product.image_url}
                            alt={product.name}
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                        <h5 className="text-xl font-semibold text-gray-600">₹{product.price}</h5>
                        {isProductOnCart ? (
                            <p className="text-green-600 font-medium">
                                Product is added to the Cart
                            </p>
                        ) : (
                            <button
                                onClick={addItemToCart}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200"
                            >
                                Add to cart
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
