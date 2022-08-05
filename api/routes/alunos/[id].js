const prisma = require('../../config/db');


function getAluno(req, res) {
	const { id } = req.params || req.query;

	prisma.aluno.findUnique({ where: { id: Number(id) } })
	.then((aluno) => res.send(aluno))
	.catch((error) => res.send("Error: " + error.message))
}

function deleteAluno(req, res) {
	const { id } = req.params || req.query;

	prisma.aluno.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

function updateAluno(req, res) {
	// Serverless Database does not suport foreign keys, bug detected
	const { id } = req.params || req.query;

	prisma.aluno.update({ where: { id: Number(id) }, data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getAluno(req, res)
			case "DELETE": return deleteAluno(req, res)
			case "PUT": return updateAluno(req, res)
		}
	},
    get: (req, res) => getAluno(req, res),
    del: (req, res) => deleteAluno(req, res),
    put: (req, res) => updateAluno(req, res),
}
