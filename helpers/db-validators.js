const Role = require('../models/role');
const Usuario = require('../models/user');

const esRolValido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
}

const emailExiste = async(email = '') =>{
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El email ${email} ya esta registrado por otro usuario`);
    }

}

const existeUsuarioId = async(id) =>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id: ${id} no existe`);
    }

}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioId
}