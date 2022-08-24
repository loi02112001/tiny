const moogose = require('mongoose')

const ItemModel = new moogose.Schema(
    {
        img: Array,
        title:String,
        content: String
    }
)

module.exports = moogose.model('item', ItemModel)
