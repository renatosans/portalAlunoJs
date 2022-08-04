
function getProfessores(req, res) {
	res.send('Listagem de professores');
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
