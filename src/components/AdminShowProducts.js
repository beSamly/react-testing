import React from 'react'
import { useProducts } from "../hooks/useProducts"


export default function AdminShowProducts() {

    const { loading, products } = useProducts()


    if (loading) return (<div > Admin Product loading..</div >)

    return (
        <div>
            {console.log("AdminShowProducts rerendered")}
            <div>Admin show product components</div>
            {JSON.stringify(products)}
        </div>
    )
}
