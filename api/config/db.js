const { PrismaClient } = require('@prisma/client');


// dados da conexão com BD serverless
const host     = 'localhost'
const username = 'root'
const password = 'p@ssw0rd'
const port     = 3306
const database = 'portal_aluno'
const ssl      = false
const setSSL   = 'sslaccept=strict&sslmode=require'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/portal_aluno"
let url = `mysql://${username}:${password}@${host}:${port}/${database}`;
if (ssl) {
    url = url + `?${setSSL}`;
}

const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
