const express = require('express');
const routes = express.Router();
const multer = require('./config/multer');
const contaController = require('./controllers/contaController');
const perfilController = require('./controllers/perfilController');
const auth = require('./middlewares/auth');
    //Rotas da conta
routes.post('/conta',contaController.cadastrarConta);
routes.post('/conta/login',contaController.login);
routes.get('/conta/info',auth,contaController.BuscarContaLogada);
routes.put('/conta/editar/:id',auth,contaController.editarConta);
routes.delete('/conta/deletar/:id',auth,contaController.deletarConta);
    //Rotas das mensagens
routes.post('/perfil',auth,perfilController.cadastrarPerfil);
routes.get('/perfil',auth,perfilController.buscarPerfis);
routes.put('/perfil/editar/:id',auth,perfilController.editarPerfil);
routes.delete('/perfil/deletar/:id',auth,perfilController.deletarPerfil);
// routes.post('/usuarios/imagem',auth,multer.single('imagem'),contaController.uploadImage);
module.exports = routes;
