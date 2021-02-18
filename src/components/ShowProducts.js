import React from 'react'
import { useProducts } from "../hooks/useProducts"


export default function ShowProducts() {

    const { loading, products, error, removeProduct } = useProducts()


    if (loading) return (<div > Admin Product loading..</div >)
    if (error) return (<div>{error.message}</div>)

    return (
        <div>
            {console.log("showProducts rerendered")}
            <div>show producst components</div>
            <div>
                {JSON.stringify(products)}
            </div>
            <button onClick={removeProduct}>Remove products</button>
        </div>
    )
}
