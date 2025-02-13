const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Habilita o JSON no corpo da requisição



const Filme = mongoose.model('filme', { 
  nome: String,
  descricao: String,
  imagem_url: String,
  trailer_url: String
});

const port = 3000;

app.get("/", async (req, res) => {
  const filmes = await Filme.find()
  res.send(filmes);
  
});

app.delete("/:id", async(req , res) => {
   const filme = await Filme.findByIdAndDelete(req.params.id)
   res.send(filme)
})

app.put("/:id", async(req , res) => {
  const filme = await Filme.findByIdAndUpdate(req.params.id, {
    nome: req.body.nome,
    descricao: req.body.descricao,
    imagem_url: req.body.imagem_url,
    trailer_url: req.body.trailer_url
  })
  res.send(filme)
})


app.post("/", async (req, res) => {
   const filme = new Filme({
    nome: req.body.nome,
    descricao: req.body.descricao,
    imagem_url: req.body.imagem_url,
    trailer_url: req.body.trailer_url
   }, {
    new: true
   })

  await filme.save();
  res.send(filme);
});

app.listen(port, () => {
  console.log("App rodando");
  mongoose.connect('mongodb+srv://joao:vDl64FBdDCFuHS1n@cluster0.6igdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
});
