
module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getAlunos(req, res)
			case "POST": return insertAlunos(req, res)
		}
	},
    get: (req, res) => getAlunos(req, res),
    post: (req, res) => insertAlunos(req, res)
}
