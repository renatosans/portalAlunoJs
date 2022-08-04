const fs = require('fs');
const path = require('path');

function sayHello(req, res) {
    if ( !req.query.sampleText ) {
        res.send('Erro: parametro precisa ser informado!');
        return;
    }

    const dir = path.resolve('../public', 'images');
    const filenames = fs.readdirSync(dir);
    const images = filenames.map(name => path.join('/', 'images', name));
    // res.json(images);

    res.status(200).json({
        message: Buffer.from(req.query.sampleText).toString('base64')
    })
}

module.exports = {
	default: (req, res) => sayHello(req, res),
    get: (req, res) => sayHello(req, res),
}
