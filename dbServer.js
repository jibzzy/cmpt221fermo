const express = require("express")
const app = express()
const mysql = require("mysql")
const db = mysql.createPool({
    connectionLimit:100,
    host: "127.0.0.1",
    user: "newuser2",
    password: "7GqkvgL3",
    database: "userDB",
    port: "3306"
}) 
db.getConnection ( (err, connection)=> { if (err) throw (err)
    console.log ("DB connected successful: " + connection.threadId)})
