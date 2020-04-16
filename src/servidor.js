const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados =  require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())//convertido para JSON

  app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
  })

  app.get('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
      nome: req.body.nome,
      preco: req.body.preco
    })
    res.send(produto)
  })

})
app.listen(porta, ()=> {
  console.log(`Servidor execuntado na porta ${porta}`)
})