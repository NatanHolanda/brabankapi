const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '34.238.125.255',
    port: 3306,
    user:'natan',
    password:'bcd127',
    database:'brabank'
})

module.exports = conexao 