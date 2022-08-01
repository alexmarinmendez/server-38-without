const express = require('express')
// const userRouter = require('./routes/user.route')
// const productRouter = require('./routes/product.route')
const { userRouter, productRouter } = require('./routes')

const app = express()
const PORT = 3000
app.use(express.json())
app.listen(PORT, () => console.log('Server up'))

// app.post('/users', userController)
userRouter(app)
productRouter(app)
