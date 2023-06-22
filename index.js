const express = require("express");
const server = express();
const cors = require('cors');

server.use(cors());

const cursos = ["Node JS", "JavaScript", "React JS", "React Native JS", "Next JS", "Vue JS"];

server.get("/linguagens/:index", (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
