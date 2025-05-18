import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY)

function Payment() {
    const [clientSecret, setClientSecret] = useState('');
    const products = useSelector(state => state.cart.cart)
    console.log("Cart", products);


    useEffect(() => {
        if (products && products.length > 0) {
            console.log("Sending products to backend:", JSON.stringify(products, null, 2));
            // create PaymentIntent as soon as page loads
            fetch("http://localhost:4242/create-payment-intent", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: products })
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`)
                    }
                    return res.json()
                })
                .then((data) => {
                    console.log("Received clientSecret:", data.clientSecret);
                    setClientSecret(data.clientSecret)
                })
                .catch((error) => console.error("Error fetching payment intent:", error));
        } else {
            console.warn("No products in cart. Skipping payment intent creation.");
        }

    }, [products]);


    const appearance = {
        theme: 'stripe'
    }
    const loader = 'auto'

    return (
        clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret, appearance, loader }}>
                <PaymentForm />
            </Elements>
        )
    )
}

export default Payment