import axios from 'axios'

export default function doRequest({ method, url }) {

    return axios({
        method,
        url
    }).then(
        (data) => {
            console.log("Data is : ", data)
            return data
        },
        (error) => {
            var error = JSON.stringify(error)
            return { error: JSON.parse(error) }
        }
    )
}
