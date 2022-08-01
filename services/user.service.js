const users = require('../models/user.model')

const login = (email, password) => {
    const user = users.find(user => user.email === email)
    if (!user || user.password!==password) return false
    return true
    // if ((email !== 'profe@coderhouse.com') || (password !== 'admin')) return false
    // return true
}

module.exports = login