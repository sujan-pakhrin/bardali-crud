import mysql, { createConnection } from "mysql2";

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "crud",
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database");
    }
});

export default db;
