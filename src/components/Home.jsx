import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Navigation from "./Navigation";


const Home = () => {
    const products = useSelector((state) => state.products.products);

    return (
        <>
            <nav>
                <Navigation />
            </nav>

            <main className="container mx-auto px-4 py-8">
                {products.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">No products to show</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <Link to={`/products/${product.id}`}>
                                    <img className="w-full h-64 object-cover" src={product.image_url} alt={product.name} />
                                    <div className="p-4">
                                        <h3 className="  text-gray-800">{product.name}</h3>
                                        <p className="text-gray-600 mt-2">₹{product.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </main>

        </>
    );
};

export default Home;
