const Contenedor = require('./contenedor')
const express = require('express')
const app = express()
const PORT = 8080

const contenedor = new Contenedor('productos.txt')


const server = app.listen(PORT ,()=>{
    console.log(`Servidor escuchando ${server.address().port}`)
})

app.get('/', (req, res) =>{
    res.send('Servidor ok')
})

app.get('/productos', async(req, res) => {
    const productos = await contenedor.getAll()
    res.json(productos)
    
})
app.get('/productos', async(req, res) => {
    const productos = await contenedor.getAll()
    res.json(productos)
    
})
app.get('/productoRandom', async(req, res) => {
    const productosRandom = await contenedor.getRandom()
    console.log(productosRandom);
    res.json(productosRandom)
    
})