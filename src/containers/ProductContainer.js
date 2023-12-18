import React from "react";
import { useSelector } from "react-redux";
import './site.css';
import { Link } from "react-router-dom";

const ProductContainer = () => {
    const products = useSelector((state) => state.allProducts.products)

    const renderlist = products.map((prod) => {
        const { id, title, image, price, category } = prod;
        return (
            <div class="item-container" key={id}>
                <Link to={`product/${id}`}>
                    <div class="item-card">
                        <img src={image} alt={title} />
                        <div class="item-content">
                            <div class="item-title">{title}</div>
                            <div class="item-price">$ {price}</div>
                            <div class="content">{category}</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });

    return <>{renderlist}</>
};

export default ProductContainer;