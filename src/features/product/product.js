import React from 'react'
import { setPage1, setProduct } from '../home/homeSlice'
import { useDispatch } from 'react-redux';

export function Product(props) {
    const { src, alt, name } = props;
    const dispatch = useDispatch()

    const productClick = () => {
        dispatch(setProduct(props));
        dispatch(setPage1());
    }

    return (
        <div class="product-list" onClick={productClick}>
            <span class="badge"></span>
            <i class="icon-hover"></i>
            <div class="product-image">
                <img src={src} alt={alt} />
            </div>
            <h2>{name}</h2>
        </div>
    )
}