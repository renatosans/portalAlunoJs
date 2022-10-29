const express = require('express');
// const { createRouter } = require('express-file-routing');
const { nextApi, nextRouter } = require('express-next-api');


const port = 3000;
const app = express();

app.use("/", express.static('../dist'));  // necessário efetuar o build do frontend   Ex.: NPM RUN BUILD
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// setHeader('Access-Control-Allow-Origin', '*')

// createRouter(app, { directory: apiDirectory, additionalMethods: null } )
app.use(nextApi({ base: '/api/routes', directory: 'routes', options: {caseSensitive: false} }))


// Redireciona para o react-router rotas não encontradas no Express
// No react-router ( frontend ) redirecionar rotas inexistentes para a raiz
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: '../dist' })
})

// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));
