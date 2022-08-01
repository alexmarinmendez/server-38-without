const productController = require('../controllers/product.controller')

const routes = server => {
    server.use('/products', productController)
}

module.exports = routes