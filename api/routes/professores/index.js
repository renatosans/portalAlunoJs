const prisma = require('../../config/db');


function getProfessores(req, res) {
	prisma.professor.findMany()
	.then((professores) => res.send(professores))
	.catch((error) => res.send("Error: " + error.message))
}

function insertProfessor(req, res) {
	res.send('Registro salvo com sucesso');
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
