const prisma = require('../../config/db');


function getProfessores(req, res) {
	prisma.professor.findMany()
	.then((professores) => res.send(professores))
	.catch((error) => res.send("Error: " + error.message))
}

function insertProfessor(req, res) {
    // const { id, nome, email, foto, formatoImagem } = req.body;

	prisma.professor.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getProfessores(req, res)
			case "POST": return insertProfessor(req, res)
		}
	},
    get: (req, res) => getProfessores(req, res),
    post: (req, res) => insertProfessor(req, res)
}
