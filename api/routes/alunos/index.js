const fs = require('fs')
const path = require('path')
const prisma = require('../../config/db')


function getAlunos(req, res) {
	prisma.aluno.findMany()
	.then((alunos) => res.send(alunos))
	.catch((error) => res.send("Error: " + error.message))
}

// TODO : >>   Fix image upload    <<
// Open INSOMNIA to test the endpoint ( http://localhost:3000/api/routes/alunos ),  use   sampleData.json
// Expected behaviour : write the image to File System and store the image relative path in the database
function insertAluno(req, res) {
	const { rg, nome, serie, classe, imageFormat, imageData } = req.body;

	const dir = './public/img/alunos/';
	const filename = "aluno999.jpg";
	const buffer = Buffer.from(imageData, 'base64');
	const filePath = path.resolve(`${dir}`, filename);
	console.log(`FilePath is ${filePath}`);
	fs.open(filePath, "w", (err, fd) => {
		fs.write(fd, buffer, 0, buffer.length, (err, writtenBytes, buffer) => {
			console.log(`Wrote ${writtenBytes} bytes to file`);
		});
	}); 

	const nextNumber = Math.round(Math.random() * 99999);
	const img = dir + filename;
	const newAluno = { rg: nextNumber.toString(), nome, serie, classe };

    prisma.aluno.create({ data: newAluno })
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
