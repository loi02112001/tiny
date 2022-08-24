import * as types from '../constants'
export default function searchApi(data) {
    
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/search?activePage=${data.payload.activePage}&limit=${types.LIMIT}&textSearch=${data.payload.nameSearch}`
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