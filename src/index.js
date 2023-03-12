import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/userContext';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import { ProductProvider } from './context/productContext';
import {Elements} from '@stripe/react-stripe-js'
import { getStripeItem } from './utils/stripe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Elements stripe={getStripeItem}>
              <App />
            </Elements>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
