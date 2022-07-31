const express = require('express')

const app = express()
const PORT = 3000
app.use(express.json())
app.listen(PORT, () => console.log('Server up'))

app.post('/users', (req, res) => {
    const { email, password } = req.body
    if (!email) return res.status(400).send({ message: 'Email is required'})
    if (!password) return res.status(400).send({ message: 'Password is required'})
    if ((email !== 'profe@coderhouse.com') || (password !== 'admin')) return res.status(400).send({ message: 'Invalid email or password' })
    return res.status(200).send({ message: 'Successfully logged in' })
})
