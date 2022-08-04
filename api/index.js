const mysql = require('mysql2');
const express = require('express');
// const { nextApi, nextRouter } = require('express-next-api');


const port = 3000;
const app = express();

app.use("/", express.static('Public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));


const mysqlConnection = mysql.createConnection({ host: 'localhost', user: 'root', password: 'p@ssw0rd', port: '3306', database: 'portal_aluno' });

app.get('/professores', (req, res) => {
    const query = "SELECT * FROM professor";

    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
})
