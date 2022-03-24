import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart, setcart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCard = (product)=>{
        console.log(product);
        const newCart = [...cart, product]
        setcart(newCart)
    }
    return (
        <div className='shop'>
            <div className="products-container">
             {
                 products.map(product => <Product key={product.id} product={product} handleAddToCard={handleAddToCard}></Product>)
             }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;