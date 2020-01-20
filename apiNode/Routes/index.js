const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    return res.send({ message: "tudo ok com o método GET da rota raiz!" });
});

route.post('/', (req, res) => {
    return res.send({ message: "tudo ok com o método POST da rota raiz!" });
});

module.exports = route;