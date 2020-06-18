const mongoose = require('mongoose');
const PerfilSchema = mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Conta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conta'
    },
    ImagemUrl:{
        type: String,
        required: false
    },
    Restricao:{
        type: Boolean,
        required: false,
    }
    
},{timestamps:true});
mongoose.model('Perfil', PerfilSchema);
