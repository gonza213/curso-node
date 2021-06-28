const {response} = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/user');

const getUsuario = async (req, res = response) =>{
    const {limite = 5, desde = 0} = req.query;
    const query = {estado:true};

    // const usuarios = await Usuario.find(query)
    //   .skip(Number(desde))
    //   .limit(Number(limite));

    //   const total = await Usuario.countDocuments(query);

      const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
      ])

    res.json({
        total,
       usuarios
    });
}

const putUsuarios = async (req, res = response) =>{
    const {id} = req.params;
    const {_id, password, google, email, ...resto} = req.body;

    if(password){
        //encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.json(usuario);
}

const postUsuarios = async (req, res = response) =>{
  
    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol});
   
    //encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.json({
        usuario
    });
}

const deleteUsuarios = async (req, res = response) =>{
    const {id} = req.params;

    // const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id, {estado:false})

    res.json(usuario);
}

module.exports = {
    getUsuario,
    putUsuarios,
    postUsuarios,
    deleteUsuarios
}