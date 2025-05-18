import React from 'react'
import Navigation from './Navigation'

function PaymentCancelled() {
    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <div className="flex flex-col items-center justify-center min-h-[60vh] bg-red-50">
                {/* Animated Cancel SVG */}
                <svg
                    className="w-24 h-24 mb-6 animate-pulse"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="36" cy="36" r="34" stroke="#ef4444" strokeWidth="4" fill="#fecaca" />
                    <path
                        d="M26 26L46 46M46 26L26 46"
                        stroke="#ef4444"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
                <h2 className="text-2xl font-bold text-red-700 mb-2">Payment Cancelled</h2>
                <p className="text-gray-700 text-lg text-center">
                    Your payment was not completed.<br />Please try again or contact support if you need help.
                </p>
            </div>
        </>
    )
}

export default PaymentCancelled