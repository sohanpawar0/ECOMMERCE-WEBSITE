import React from "react";
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    console.log(params);

    return (
    <div>
        <h1>More details about this product</h1>
        <h1>{params.productId}</h1>
        <h2>Images</h2>
        <div>
        <h2>Reviews</h2>
        <ul>
            <li>Good product</li>
            <li>very nice product</li>
            <li>best quality product</li>
        </ul>
        </div>
    </div>
    )
}

export default ProductDetails;