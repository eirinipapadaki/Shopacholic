import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({ id, name, price, image}) {
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: name,
                price: price,
                image:image
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{name}</p>
                <p className="product__">
                    <small>£</small>
                    <strong>{price}</strong>
                </p> 
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button> 
        </div>
    )
}

export default Product
