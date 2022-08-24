export default function updateApi(data,form) {
 
 
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/${data.payload.id}`
        fetch(url, {
            method: 'PUT',
            body:form
         
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