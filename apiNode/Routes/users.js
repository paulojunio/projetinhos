const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    return res.send({ message: "tudo ok com o método GET da rota de usuarios!" });
});

route.post('/', (req, res) => {
    return res.send({ message: "tudo ok com o método POST da rota de usuarios!" });
});

route.post('/create', (req, res) => {
    return res.send({ message: "Seu usuário foi criado." });
});

module.exports = route;