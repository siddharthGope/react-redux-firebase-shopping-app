import React from 'react'
import { Link } from "react-router";
import { logoutUser } from '../store/auth/authActions';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { setError, setLoading, setUser } from "../store/auth/authSlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';


function Navigation() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const productInCart = useSelector((state) => state.cart.cart.length)
    console.log(productInCart);
    const handleSubmit = () => {
        dispatch(logoutUser(navigate))
    }

    return (
        <nav className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold">
                    <Link to="/" className="hover:text-gray-300">
                        ShopApp
                    </Link>
                </div>
                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/login"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        Register
                    </Link>
                    <Link
                        to="/cart"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        Cart <span className='bg-red-500 text-white text-sm font-bold rounded-full px-2 py-1 ml-2'>{productInCart}</span>
                    </Link>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleSubmit}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
                >
                    LogOut
                </button>
            </div>
        </nav>
    )
}

export default Navigation