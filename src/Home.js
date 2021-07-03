import React from 'react';
import './Home.css';
import  Product from './Product';



function Home() {
    return (
        <div className="home">
           <img className="home__image" 
           src={require('./priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg')} alt="clothes hanging"
           /> 


           {/*Product id, name, price, rating, image */}
           <div className="home__row">
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={50}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />

            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
           </div>

           <div className="home__row">
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image ='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            />
            
            </div>

            <div className="home__row">
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
                id="12345"
                name='Brown Leather Jacket'
                price={49.99}
                image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            </div>
            
           
           
           {/*Product*/}
        </div>
        
    )
}

export default Home;

