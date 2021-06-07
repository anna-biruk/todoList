const express = require('express');
const todoRoutes = require('./routes/todo')
const path = require('path')
const sequilize = require('./utils/database')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use('/api/todo', todoRoutes)


app.use((req, res, next) => {
    res.sendFile('/index.html')
})

async function start() {
    try {
        await sequilize.sync()
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

start()
