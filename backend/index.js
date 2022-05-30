const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config({ path: './config/.env'})
const port = 8000


const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
});

app.use(cors());
app.use(express.json())

app.get("/users", (req,res) => {
  connection.query("SELECT * FROM users", (err,result) => {
      if(err) {
      console.log(err)
      } 
  res.send(result)
  });   
});

app.post('/user/create', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  connection.query("INSERT INTO users (username,password,email) VALUES (?,?,?)",
  [username,password,email], (err, result)=>{
    if(err) {
      console.log(err)
    }
    console.log(result)
  });
})
/*app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});*/

/*app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', function(req, res) {
  connection.getConnection(function(err, connction) {
    connection.query('SELECT * FROM users', function(error, results) {
      if (error) throw error;
      res.send(results)
  });
  });
});
app.get('/users-email', db.getAllUsersEmail)
app.get('/users/:id', db.getUserById)
app.get('/users-email/:email', db.getUserByEmail)
app.post('/users',(req, res) => {})
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
*/
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})