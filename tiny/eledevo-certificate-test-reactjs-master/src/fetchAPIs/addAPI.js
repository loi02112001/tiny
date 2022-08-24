
export default function addApi(data) {
    console.log(data, 'day la dataaaaa');
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/item/add`
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "content": data.content,
                'arrImg': data.arrImg,
                'title': data.title
            })
            //hoac co the dung
            // body: JSON.stringify({data
            //     
            // })
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