const express = require ('express');
const res = require('express/lib/response');
const router = express.Router();
const visitados = require ('./data/datosProductos');
// const controladorHome = require ('./controller/homeController');

const app = express ()
const port = process.env.port


app.use(express.static('public'));
app.set ('view engine', 'ejs')

function leerTodos () {
    console.log('leo productos desde data')
    return visitados
}


app.get ('/', (req, res) => {
    const products = leerTodos();
    console.log('volvi del controlador')
    res.render('home', { products });
});

app.listen(port || 3000, () => {
    console.log('Example app listerning on port');
}); 


