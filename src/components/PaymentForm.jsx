import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'


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
            <form onSubmit={handleSubmit}>
                <div className='card'>
                    <div className="card-body">
                        <h1 className="card-title">Complete your payment here</h1>
                        <PaymentElement options={PaymentElementOptions} />
                        <div className="card-actions">
                            <button disabled={isLoading || !stripe || !elements}>
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