const express = require("express")
const server = express()
const cors = require('cors');

server.use(cors())
// Query params = ?nome=NodeJS
// Route Params = /linguagens/2
// Request Body = { nome: "NodeJS", tipo: "Backend"}

const cursos = ["Node JS", "JavaScript", "React JS", "React Native JS", "Next JS", "Vue JS"]

server.get("/linguagens/:index", (req, res) => {

    const { index } = req.params;

    return res.json(cursos[index])

})

server.listen(3000)