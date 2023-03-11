import './stripeComp.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function StripeComp(){

    const stripe = useStripe()
    const elements = useElements()

    const handlePayments = async (e) => {
        e.preventDefualt();

        if(!stripe || !elements){
            return;
        }
        

    }

    return(
        <div className="stripeDiv">
            <form>
                <h1>Payment Method:</h1>
                <h2>Card</h2>
                <CardElement className="cardEl"></CardElement>
            </form>
        </div>
    )
}

export default StripeComp