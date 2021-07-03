import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'



function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
         <div className="checkout__left">
            <img className="checkout__ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            />
            {basket?.length === 0 ? (
               <div>
                  <h2>Your Shopping Basket is Empty</h2> 
                  <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the iteam</p>
               </div> 
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* */}
                    {basket?.map (item => (
                    <CheckoutProduct
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        rating={item.rating}
                    />
                        
                    ))}
                </div>
            )}
         </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <h1>Subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;