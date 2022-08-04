
function getAlunos(req, res) {
	res.send('Listagem de alunos');
}

function insertAluno(req, res) {
	res.send('Registro salvo com sucesso');
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
