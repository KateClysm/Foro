import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mirror_image_830',
    database: 'forodbprototipe'
})

export default db;