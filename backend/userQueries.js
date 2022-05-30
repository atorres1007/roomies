require('dotenv').config({ path: './config/.env'})
const connection = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQPASSWORD,
    database: process.env.MYSQLDATABASE
});

const getAllUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getAllUsersEmail = (request, response) => {
    pool.query('SELECT email FROM users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}
const getUserByEmail = (request, response) => {
    const email = request.params.email
    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const { email, username, password } = request.body 
    pool.query('INSERT INTO users (email, username, password) VALUES ($1, $2, $3)', 
    [email, username, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { email, username, password } = request.body
  
    pool.query(
        'UPDATE users SET email = $1, username = $2, password = $3, phone_number = $4 WHERE id = $5',
        [email, username, password, id],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});
module.exports = {
    getAllUsers,
    getAllUsersEmail,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
}