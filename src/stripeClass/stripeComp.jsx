import './stripeComp.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useContext, useState, useEffect } from 'react';
import {CartContext} from '../context/cartContext'
import CARD from '../images/card.png'

function StripeComp({client}){
    const {costItems} = useContext(CartContext)

    const stripe = useStripe()
    const elements = useElements()


    function dollarsToInteger(){
        var integerValue = costItems * 100
        return integerValue
    }

    const handlePayments = async (e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const response = await fetch('/.netlify/functions/paymentIntent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: dollarsToInteger() })
        }).then(res => res.json());
        console.log(response)

        const clientSecret = response.paymentIntent.client_secret
        console.log(clientSecret)

        const paymentResponse = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: client
                }
            }
        })
        if(paymentResponse.error){
            alert(paymentResponse.error)
            alert("Error")
        }else{
            if(paymentResponse.paymentIntent.status === 'succeeded'){
                alert('Purchase Successful')
            }
        }
    }

    return(
            <form onSubmit={handlePayments}>
                <CardElement className="cardEl"></CardElement>
                <button>Pay</button>
            </form>
    )
}

export default StripeComp