import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import doRequest from '../api/doRequest'

const getProduct = () => {

    // var validateFailed = true
    // if (validateFailed) return { error: { message: "Invalid input" } }

    return doRequest({ url: 'https://jsonplaceholder.typicode.com/todos', method: 'get' })
}

export function useProducts() {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    useEffect(async () => {
        // products 조회 로직 ...
        console.log("fetching product data...")
        var result = await getProduct()
        console.log("result is : ", result)
        if (result.data) {
            console.log("Result data : ", result.data)
            setProducts(result.data.slice(0, 3))
            setLoading(false)
        }

        if (result.error) {
            console.log("Result error : ", result.error)
            setLoading(false)
            setError(result.error)
        }

    }, [])

    const removeProduct = () => {
        setProducts(products.slice(0, 1))
        /* 결제 로직 ... */
    }

    return { loading, products, removeProduct, error };
}
