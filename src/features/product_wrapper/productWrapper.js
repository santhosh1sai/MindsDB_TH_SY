import React, { useEffect, useState } from 'react'

import { Product } from '../product/product'
import PRODUCTS from '../../data/product.json';

export function ProductWrapper() {

    const [display, setDisplay] = useState([]);
    const [offset, setOffset] = useState(0);
    // eslint-disable-next-line
    const [limit, setLimit] = useState(10); //setLimit is for future use cases


    const addItems = (offset, limit) => {
        const items = [...display];
        const len = PRODUCTS.length < offset + limit ? PRODUCTS.length : offset + limit;
        for (let index = offset; index < len; index++) {
            items.push(PRODUCTS[index]);
        }
        setOffset(offset);
        setDisplay(items);
    }

    useEffect(() => {
        addItems(offset, limit);
        // eslint-disable-next-line
    }, []);

    return (
        <div class="product-wrapper container">
            <h2>Select your datasource</h2>
            <span class="dashboard-text">Don’t see what you’re looking for? <a href="https://github.com/mindsdb/mindsdb/discussions/">Make a request</a></span>
            {/* tip block start */}
            <div class="tip-block">
                <div class="tip-heading">
                    <i class="icon-tip"></i>
                    <h2>Pro tip!</h2>
                </div>
                <p>Write datasource name in the editor to print the form template.</p>
            </div>
            {/* tip block end */}
            {/* search wrapper start */}
            <div class="search-wrapper">
                <div class="search-bar">
                    <i class="icon-search"></i>
                    <input type="search" name="search" id="search" placeholder="Search" />
                </div>
                <div class="filter-wrapper">
                    <select name="product" id="lang">
                        <option value="select">Filter by</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                        <option value="c#">C#</option>
                        <option value="C++">C++</option>
                        <option value="erlang">Erlang</option>
                    </select>
                </div>
            </div>
            {/* search wrapper end */}
            {/* product block start */}
            <div class="product-block">
                {display.map(p => {
                    console.log('display : ', display)
                    return (
                        <Product src={require(`../../images/${p.src}`)} alt={p.alt} name={p.name} />
                    )
                })}

            </div>
            {offset + limit < PRODUCTS.length ?
                <button class="loadmore-button" onClick={() => addItems(offset + limit, limit)}>Load More</button> :
                null}
            {/* product block end */}
        </div>
    )
}