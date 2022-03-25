const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());

app.use(cors());
app.get('/', (req, res) => {
    db.select('*')
        .from('users')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});
app.post('/add-user', (req, res) => {
    const { email, username, password} = req.body;
    db('roomies')
        .insert({
            email: email,
            username: username,
            pasword: password,
        })
        .then(() => {
            console.log('User Added');
            return res.json({ msg: 'User Added' });
        })
        .catch((err) => {
            console.log(err);
        });

});

app.delete('/delete-user', (req, res) => {
    const userId = req.body;
    const userIdToDelete = Number(userId.userId);
    console.log(userIdToDelete);
    db('roomies')
        .where('user_id', '=', userIdToDelete)
        .del()
        .then(() => {
            console.log('User Deleted');
            return res.json({ msg: 'User Deleted' })
        })
        .catch((err) => {
            console.log(err);
        });
});
app.put('/update-users', (req, res) => {
    db('roomies')
        .where('user_id', '=', 1)
        .update({ username : 'AndyToto' })
        .then(() => {
            console.log('User Updated');
            return res.json({ msg: 'User Updated' });
        })
        .catch((err) => {
            console.log(err);
        });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));