import * as types from '../constants'
export default function paginateApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/paginate?activePage=${data.payload.activePage}&limit=${types.LIMIT}`
        fetch(url, {
            method: 'GET',
        })
            .then((respone) => respone.json())
    
            .then((res) => {
                resolve(res)
             
            })
            .catch((err) => {
                reject(err)
            })
    })
}