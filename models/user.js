const {Schema, model} =  require('mongoose');

const UsuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required: true,
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },
});

UsuarioSchema.methods.toJSON = function(){
    const {__v, password, ...user} = this.toObject();
    return user;
}

module.exports = model('Usuario', UsuarioSchema);