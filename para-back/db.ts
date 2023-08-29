import mysql from 'mysql2';

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mirror_image_830",
  database: "forodb"
});

export default dbConnection;