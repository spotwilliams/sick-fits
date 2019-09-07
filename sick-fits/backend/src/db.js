// This file allows us to connect to the remote prisma DB
// and gives us the ability to guery it with JS
const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: './src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
});

module.exports = db;