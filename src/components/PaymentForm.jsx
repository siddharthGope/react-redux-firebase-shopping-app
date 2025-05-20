import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import Navigation from './Navigation';


function PaymentForm() {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        // stripe has not loaded
        if (!stripe || !elements) {
            console.log('stripe has not loaded');
            return
        }
        setIsLoading(true)

        setMessage("Payment in Progress")

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:5173/payment-success"
            }
        })

        // This point will only be reached if there is an immediate error when confirming the payment. Otherwise, your customer will be redirected to `return_url`
        if (error) {
            console.error("Stripe error:", error);

            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message)
            } else {
                setMessage("An unexpected error occurred.")
            }
            setIsLoading(false)
        }
    }
    const PaymentElementOptions = {
        layout: "accordion"
    }


    return (
        <div>
            <nav>
                <Navigation />
            </nav>
            <form onSubmit={handleSubmit} className='mx-[5%]'>
                <div className='card'>
                    <div className="card-body">
                        <h1 className="my-3 text-gray-700 text-lg">Complete your payment here</h1>
                        <PaymentElement options={PaymentElementOptions} />
                        <div className="card-actions">
                            <button disabled={isLoading || !stripe || !elements} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow">
                                {isLoading ? "Loading..." : "Pay now"}
                            </button>
                        </div>
                    </div>
                    {message && <div>{message}</div>}
                </div>
            </form>
        </div>
    )
}

export default PaymentForm