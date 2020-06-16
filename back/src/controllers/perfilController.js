const mongoose = require("mongoose");
const Perfil = mongoose.model("Perfil");
//Nome,Conta,Descricao,ImagemUrl,Restricao
module.exports = {
  async cadastrarPerfil(req, res) {
    try {
      const ContaId = res.locals.auth_data.id;
      req.body.Conta = ContaId;
      const perfil = await Perfil.create(req.body);
      // console.log('perfilCadas:',perfil);
      return res.status(201).json({
        perfil,
      });
    } catch (err) {
      return res.json({
        erro: err,
      });
    }
  },
  async buscarPerfis(req, res) {
    //{_id: {$gt: lastViewedMessage._id}}

    const ContaId = res.locals.auth_data.id;
    try {
      const perfil = await Perfil.find({}, (err, perfil) => {
        return res.status(201).json({
          perfil,
        });
      }).populate("Conta");
    } catch (err) {
      return res.json({
        erro: err,
      });
    }
  },
  async editarPerfil(req, res) {
    try {
      const perfil = await Perfil.updateOne(
        { _id: req.params.id },
        {
          $set: {
            Nome: req.body.Nome,
            Descricao: req.body.Descricao,
            ImagemUrl: req.body.ImagemUrl,
            Restricao: req.body.Restricao,
          },
        }
      );
      return res.status(201).json({
        perfil,
      });
    } catch (err) {
      return res.json({
        erro: err,
      });
    }
  },
  async deletarPerfil(req, res) {
    try {
      const perfil = await Perfil.findOne({ _id: req.params.id })
        .remove()
        .exec();
      perfil.save();
      return res.status(200).json({
        perfil: "Sucesso ao deletar o Perfil",
      });
    } catch (err) {
      return res.json({
        erro: err,
      });
    }
  },
};
