const mysql = require("mysql2");

// Connect to mySQL
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PASSWORD,
});

function Query(query, values) {
  return new Promise((resolve, reject) => {
    if (!query || typeof query !== "string")
      reject("Query func expect query argument");
    if (values !== undefined && !Array.isArray(values))
      reject(
        `Query func seconde argument expected to be an array, got ${typeof values}`
      );
    if (arguments.length > 2) reject("Query pass maximum 2 arguments");

    connection.query(query, values, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

module.exports = { Query };
