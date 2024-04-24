const express = require('express')
const productsRouter = require('./routes/product.router.js')
const cartsRouter = require('./routes/carts.router.js')
const PORT = 8080;
const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Rutas
app.use('/api', productsRouter)
app.use('/api', cartsRouter)


//Escuchando Puerto
app.listen(PORT,(req, res) => {
    console.log(`Server running on port ${PORT}`)
})