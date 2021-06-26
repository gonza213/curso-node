const {response} = require('express');

const getUsuario = (req, res = response) =>{
    const query = req.query;
    res.json({
        msg: 'get API - Controlador',
        query
    });
}

const putUsuarios = (req, res = response) =>{
    const {id} = req.params;
    res.json({
        msg: 'put API',
        id
    });
}

const postUsuarios = (req, res = response) =>{
    const body = req.body;

    res.status(201).json({
        msg: 'post API',
        body
    });
}

const deleteUsuarios = (req, res = response) =>{
    res.json({
        msg: 'delete API'
    });
}

module.exports = {
    getUsuario,
    putUsuarios,
    postUsuarios,
    deleteUsuarios
}