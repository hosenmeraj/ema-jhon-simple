import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCard} = props
    const {name,img,price,ratings,seller} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rating:{ratings} star</small></p>
            </div>
            <button onClick={()=> handleAddToCard(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;