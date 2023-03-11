
import { loadStripe } from "@stripe/stripe-js";

//insert publisher key 
export const getStripeItem = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISH_KEY
)
