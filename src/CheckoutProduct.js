import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, name, price, image}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket =() => {
       //remove item from basket...
       dispatch({
           type: "REMOVE_FROM_BASKET",
           id: id,
       });
    }
    
    return (
        <div className="chekcoutProduct">
           <img className="checkoutProduct__image" src={image} alt="" /> 

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__name">{name}</p>
                <p className="checkoutProduct__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>  
        </div>
    )
} 

export default CheckoutProduct;