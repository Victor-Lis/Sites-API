const express = require("express");
const server = express();
const cors = require('cors');

server.use(cors());

const sites = [
    
    {

        nome: "MidJourney",
        imagem: "data:image/jpeg;base64,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",
        site: "https://www.midjourney.com/",
        tipo: "IA"
        
    },
    {

        nome: "Chat GPT",
        imagem: "data:image/png;base64,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",
        site: "https://chat.openai.com/",
        tipo: "IA"

    },
    {

        nome: "Udemy",
        imagem: "data:image/png;base64,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",
        site: "https://www.udemy.com/",
        tipo: "Curso"

    },
    {

        nome: "GitHub",
        imagem: "data:image/png;base64,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",
        site: "https://github.com/",
        tipo: "Codigo"

    },
    {

        nome: "Bitbucket",
        imagem: "data:image/jpeg;base64,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",
        site: "https://bitbucket.org/",
        tipo: "Codigo"

    },
    {

        nome: "Hotmart",
        imagem: "data:image/png;base64,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",
        site: "https://hotmart.com/",
        tipo: "Curso"

    },
    {

        nome: "Vercel",
        imagem: "data:image/png;base64,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",
        site: "https://vercel.com/",
        tipo: "Deploy"

    },
    {

        nome: "Netlify",
        imagem: "data:image/png;base64,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",
        site: "https://netlify.com/",
        tipo: "Deploy"

    },
]

const tipos = []
sites.map(site => {

    if(!tipos.includes(site.tipo)){

        tipos.push(site.tipo)

    }

})

const methods = [
    {

        metodo: `/sites/{${sites.map((site, index) => {return " "+index})} }`,
        resultado: "Retora o site do index recorrente",

    },
    {

        metodo: `/sites?tipo={${
            
            tipos.map(tipo => {
                return " "+tipo
            })
        
        } }`,
        resultado: "Retorna todos os sites que tem seu tipo igual ao pedido na url"

    },
    {

        metodo: `/sites?all=True`,
        resultado: `Retorna todos os sites, não compatível com 'tipo'`

    },
    {

        metodo: `/sites?length=True`,
        resultado: "Retorna o tamanho do array que contém os sites"

    },
    {

        metodo: `/sites?tipos=True`,
        resultado: "Retorna todos os tipos de sites"

    },
]

server.get("/", (req, res) => {

    return res.json(methods)

})

// server.get("/sites/", (req, res) => {
//     return res.json(sites);
// });

server.get("/sites/:index", (req, res) => {
  const { index } = req.params;
  console.log(index)
  return res.json(sites[index]);
});

server.get("/sites", (req, res) => {
    const { tipos } = req.query;
    const { tipo } = req.query;
    const { all } = req.query;
    const { length } = req.query;
    let response = {

        sites: [],
        tipos: [],
        length: sites.length,

    }

    if(tipo){

        sites.map((site) => {

            if(site.tipo == tipo){

                response.sites.push(site)

            }

        })

    }
    
    if(all == "True"){

        response.sites = sites;

    }

    if(tipos == "True"){

        sites.map((site) => {

            if(!response.tipos.includes(site.tipo)){
                response.tipos.push(site.tipo)
            }

        })

    }
    
    if(!all && !tipo){

        delete response.sites

    }

    if(!length){

        delete response.length

    }

    if(!tipos){

        delete response.tipos

    }

    return res.json(response);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
