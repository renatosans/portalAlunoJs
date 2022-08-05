const prisma = require('../../config/db');


function getAlunos(req, res) {
	prisma.aluno.findMany()
	.then((alunos) => res.send(alunos))
	.catch((error) => res.send("Error: " + error.message))
}

function insertAluno(req, res) {
	// const { rg, nome, serie, classe } = req.body;

	prisma.aluno.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getAlunos(req, res)
			case "POST": return insertAluno(req, res)
		}
	},
    get: (req, res) => getAlunos(req, res),
    post: (req, res) => insertAluno(req, res)
}
