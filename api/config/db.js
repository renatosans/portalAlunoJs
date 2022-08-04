const { PrismaClient } = require('@prisma/client');


// dados da conexão com BD serverless
const host     = 'kep2xs6o673n.aws-sa-east-1-1.psdb.cloud';
const username = Buffer.from('NnVmZ3V2NTZiaGhk', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X3NKMFE1Y1BZalRXZmtKXzFoUFpPdDFkQzNGbmtSSklyelk4MmMzUldzT3M=', 'base64').toString('ascii');
const port     = 3306
const database = 'portal_aluno'
const ssl      = true
const setSSL   = 'sslaccept=strict&sslmode=require'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/portal_aluno"
let url = `mysql://${username}:${password}@${host}:${port}/${database}`;
if (ssl) {
    url = url + `?${setSSL}`;
}

const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
