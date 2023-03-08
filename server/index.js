require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const errorHandler = require('./middlewares/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')
const router = require("./routes");
const fs = require('fs').promises

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)

app.use(errorHandler)

// ------- for testing docker volumes ------- //
const logsPath = path.resolve(__dirname, 'volumes', 'logs.txt')


app.get('/log', async (req, res) =>{
    const data = await fs.readFile(logsPath, 'utf-8')
    const logs = data.split('\r\n').filter(i => !!i)
    res.send(logs)
})

app.post('/log', async (req, res) =>{
    const text = req.body.text
    await fs.appendFile(logsPath, `${text}\r\n`)
    res.send('done')
})
// ------- for testing docker volumes ------- //


const start = async () => {
    try {
        // await sequelize.authenticate()
        // await sequelize.sync()
        app.listen(5500, () => console.log('server has started on ' + PORT + ' port'))
    }catch (err){
        console.log(err)
    }
}

start()

