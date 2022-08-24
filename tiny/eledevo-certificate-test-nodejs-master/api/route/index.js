const controller = require('../controller/index')
const Item = (app)=>{
    app.get('/item',controller.getItem)
    app.post('/item',controller.addItem)
    app.post('/item/add',controller.addTiny)
    app.delete('/item/:id',controller.deleteItem)
    app.put('/item/:id',controller.updateItem)
    app.get('/item/paginate',controller.paginate)
    app.get('/item/search',controller.searchItem)
}
module.exports = Item