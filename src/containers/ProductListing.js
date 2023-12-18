import React, { useEffect } from "react";
import ProductContainer from "./ProductContainer";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchData = async () => {
        const pp = await fetch('https://fakestoreapi.com/products')
            .then((data) => { return data.json() });
        dispatch(setProducts(pp))
    };


    useEffect(() => {
        fetchData()
    }, []);

    // console.log('products', products)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingTop:'100px' }} >
            <ProductContainer />
        </div>
    )
};

export default ProductListing;