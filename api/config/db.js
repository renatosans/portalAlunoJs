const { PrismaClient } = require('@prisma/client');


// dados da conexão com BD serverless
const host     = 'aws-sa-east-1.connect.psdb.cloud'
const port     = 3306
const username = Buffer.from('NmkzeXY2bGZzYm04ZG01N2t3MHY=', 'base64').toString('ascii')
const password = Buffer.from('cHNjYWxlX3B3Xzd5OUpzdlJOam9MMU56dWpBUHVrZHViRnZCc0hvNFo1SXVlRUthRmI4czg=', 'base64').toString('ascii')
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
