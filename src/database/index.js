const sql = require('mssql');
const config = require('./config.js');

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

module.exports = {
  pool,
  poolConnect,
  sql
};
