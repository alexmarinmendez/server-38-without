const getAll = require("../services/product.service")
const { success } = require("../utils/response")

const productController = (req, res) => {
    return success(res, getAll())
}

module.exports = productController