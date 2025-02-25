import express from "express";
import mongoose from "mongoose";

const server = express();
server.use(express.json());

const Filme = mongoose.model("filme", {
  nome: String,
  descricao: String,
  imagem_url: String,
  trailer_url: String,
});

const port = 3000;

// Conecta ao MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://joao:1234jkl0op@cluster0.6igdz.mongodb.net/meuBanco?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err)); 

server.get("/", async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.json(filmes); // Envia a resposta como JSON
  } catch (error) {
    res.status(500).send({ error: "Erro ao buscar filmes" });
  }
});

server.delete("/:id", async (req, res) => {
  try {
    const filme = await Filme.findByIdAndDelete(req.params.id);
    if (!filme) return res.status(404).send({ error: "Filme não encontrado" });
    res.json(filme);
  } catch (error) {
    res.status(500).send({ error: "Erro ao deletar filme" });
  }
});

server.put("/:id", async (req, res) => {
  try {
    const filme = await Filme.findByIdAndUpdate(
      req.params.id,
      {
        nome: req.body.nome,
        descricao: req.body.descricao,
        imagem_url: req.body.imagem_url,
        trailer_url: req.body.trailer_url,
      },
      { new: true }
    ); // Retorna o documento atualizado
    if (!filme) return res.status(404).send({ error: "Filme não encontrado" });
    res.json(filme);
  } catch (error) {
    res.status(500).send({ error: "Erro ao atualizar filme" });
  }
});

server.post("/", async (req, res) => {
  try {
    const filme = new Filme({
      nome: req.body.nome,
      descricao: req.body.descricao,
      imagem_url: req.body.imagem_url,
      trailer_url: req.body.trailer_url,
    });

    await filme.save();
    res.json(filme);
  } catch (error) {
    res.status(500).send({ error: "Erro ao salvar filme" });
  }
});

server.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});

export { server }; // facita muito esse export 

//mudei o nome de app. para server. nao posso me esquecer disso 
