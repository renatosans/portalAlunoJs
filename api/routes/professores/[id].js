const prisma = require('../../config/db');


function getProfessor(req, res) {
	const { id } = req.params || req.query;

	prisma.professor.findUnique({ where: { id: Number(id) } })
	.then((professor) => res.send(professor))
	.catch((error) => res.send("Error: " + error.message))
}

function deleteProfessor(req, res) {
	const { id } = req.params || req.query;

	prisma.professor.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

function updateProfessor(req, res) {
	// Serverless Database does not suport foreign keys, bug detected
	const { id } = req.params || req.query;

	prisma.professor.update({ where: { id: Number(id) }, data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getProfessor(req, res)
			case "DELETE": return deleteProfessor(req, res)
			case "PUT": return updateProfessor(req, res)
		}
	},
    get: (req, res) => getProfessor(req, res),
    del: (req, res) => deleteProfessor(req, res),
    put: (req, res) => updateProfessor(req, res),
}
