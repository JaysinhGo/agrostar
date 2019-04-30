import React from 'react';
import Product from './../components/Product'
import Message from './../components/Message';

const ProductList = (props)=>{
    let productList = props.filterProducts.map((product, i) => {
        return <Product key={i} productData={product}/>
    })
    console.log(productList);
    return(
        <div className="row">
            {productList && productList.length ? productList : <Message message={"We're Sorry! No product matched your search, please try again"} type={"info"}/>}
        </div>
    )
}

export default ProductList;