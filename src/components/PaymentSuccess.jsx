import React from 'react'
import Navigation from './Navigation'

function PaymentSuccess() {
    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <div className="flex flex-col items-center justify-center min-h-[60vh] bg-green-50">
                {/* Animated Success SVG */}
                <svg
                    className="w-24 h-24 mb-6 animate-bounce"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="36" cy="36" r="34" stroke="#22c55e" strokeWidth="4" fill="#bbf7d0" />
                    <path
                        d="M22 37L32 47L50 29"
                        stroke="#22c55e"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
                <h2 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h2>
                <p className="text-gray-700 text-lg text-center">
                    Thank you for your purchase.<br />Your payment has been processed successfully.
                </p>
            </div>
        </>
    )
}

export default PaymentSuccess