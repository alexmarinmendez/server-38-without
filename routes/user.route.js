const userController = require('../controllers/user.controller')

const routes = server => {
    server.use('/users', userController)
}

module.exports = routes