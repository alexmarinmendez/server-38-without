const login = require('../services/user.service')
const { success, error } = require('../utils/response')

const userController = (req, res) => {
    const { email, password } = req.body
    // if (!email) return res.status(400).send({ message: 'Email is required'})
    if (!email) return error(res, 'Email is required', 400)
    // if (!password) return res.status(400).send({ mensaje: 'Password is required'})
    if (!password) return error(res, 'Password is required', 400)

    const isLoggedIn = login(email, password)
    // if (!isLoggedIn) return res.status(400).send({ message: 'Invalid email or password' })
    if (!isLoggedIn) return error(res, 'Invalid email or password', 400)
    // return res.status(200).send({ message: 'Successfully logged in' })
    return success(res, 'Successfully logged in')
}

module.exports = userController