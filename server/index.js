require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();
app.use(express.json());
const ctrl = require('./controllers/controller')


massive(CONNECTION_STRING)
.then(db => {
    app.set("db", db)
    console.log('connected to db')
})

// endpoints
app.get('/api/houses', ctrl.getHouses)
app.post('/api/newhouse', ctrl.addHouse)
app.delete('/api/delete/:id', ctrl.deleteHouse)

app.listen(SERVER_PORT, () => console.log(`Servin' up some 🔥 🔥 🔥 on port ${SERVER_PORT}`));