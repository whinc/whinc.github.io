const knex = require('knex');
const db = knex({ client: 'mysql' });
const p = (builder) => {
    const sql = builder.toSQL()
    console.log(sql.toNative ? sql.toNative() : sql)
}