import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Navigation from "./Navigation";
import { filterProduct, resetFilter } from "../store/allProducts";

const Home = () => {
    const products = useSelector((state) => state.products.products);

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    //search fun
    function handleSearch() {
        console.log(searchTerm);
        dispatch(filterProduct(searchTerm));
    }
    useEffect(() => {
        handleSearch()
    }, [searchTerm]);
    function handleReset() {
        setSearchTerm("");
        dispatch(resetFilter());
    }

    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <div className="flex items-center justify-between py-6 px-[5%] bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
                <div className="flex  items-center">
                    <h5 className="mr-3 text-lg font-semibold text-gray-700 text-center">Search Products</h5>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
                            title="Clear search"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div >

            <main className="container mx-auto px-4 py-8">
                {!products ? (
                    <p className="text-center text-gray-500 text-lg">
                        No products to show
                    </p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                >
                                    <Link to={`/products/${product.id}`}>
                                        <img
                                            className="w-full h-64 object-cover"
                                            src={product.image_url}
                                            alt={product.name}
                                        />
                                        <div className="p-4">
                                            <h3 className="  text-gray-800">{product.name}</h3>
                                            <p className="text-gray-600 mt-2">₹{product.price}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </>
    );
};

export default Home;
