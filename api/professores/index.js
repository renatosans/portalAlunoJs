
module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getProfessores(req, res)
			case "POST": return insertProfessores(req, res)
		}
	},
    get: (req, res) => getProfessores(req, res),
    post: (req, res) => insertProfessores(req, res)
}
