import React from 'react';
import { Link } from 'react-router-dom';
import "./productCard.scss";
import { HiShoppingCart } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';

const ProductCard = ({ image, title, category, price, oldPrice, item }) => {
    const dispatch = useDispatch();

    return (
        <div data-aos="fade-up" className="product-card col-12 col-sm-6 col-md-3 mb-4">
            <div className="product-image">
                <Link to={`/shop/${item.id}`}>
                    <img src={image} alt={title} />
                </Link>

                {oldPrice && <span className="product-sale">Арзандатуу</span>}

                <div className="product-card-buttons">
                    <button onClick={() => dispatch(addToCart(item))} className='add-cart'>
                        <HiShoppingCart />
                        <span>Себетке кошуу</span>
                    </button>

                    <Link to={`/shop/${item.id}`} className='quick-view'>
                        <FaEye />
                        <span>Көрүү</span>
                    </Link>
                </div>
            </div>

            <div className="product-info">
                <span className='product-category'>{category}</span>

                <h3>
                    <Link to={`/shop/${item.id}`}>{title}</Link>
                </h3>

                <div className="product-prices">
                    {oldPrice && (
                        <del className='old-price'>{oldPrice}.00 сом</del>
                    )}
                    <span className='product-price'>{price}.00 сом</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;