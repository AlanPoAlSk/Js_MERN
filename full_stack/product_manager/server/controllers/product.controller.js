
const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Welcome to AS store"
    });
}
    
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.getAllProducts = (req,res) => {
    Product.find()
    .then((allProducts) => {
        res.json({products: allProducts})
    })
    .catch((err) => {
        res.json(err)
    });
}

