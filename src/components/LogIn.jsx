import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/auth/authActions";
import { Link, useNavigate } from "react-router";


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(email, password, navigate))
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

                {/* <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e)=> set}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div> */}

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoComplete="none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 transition duration-200 rounded-lg"
                >
                    Sign In
                </button>
            </form>
            <div className="mt-5">Don't have an account? <Link to="/register" className="underline">Register</Link> here</div>
        </div>
    )
}

export default SignIn
