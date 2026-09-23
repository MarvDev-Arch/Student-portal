const sql = require("mssql");

console.log("DB_SERVER:", process.env.DB_SERVER);
console.log("DB_DATABASE:", process.env.DB_DATABASE);
console.log("DB_USER:", process.env.DB_USER);

let poolPromise;

function getPool() {
    if (!poolPromise) {
        const config = {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_SERVER,
            database: process.env.DB_DATABASE,
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        };

        poolPromise = sql.connect(config);
    }

    return poolPromise;
}

module.exports = {
    sql,
    getPool
};