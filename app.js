const express = require('express')
const mongoose = require('mongoose')
const app = express()
const personRoutes = require('./routes/personRoutes')
const cardRoutes = require('./routes/cardRoutes')
require('dotenv').config()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use('/person', personRoutes)

const dbuser = process.env.DB_USER
const dbpass = encodeURI(process.env.DB_PASSWORD)

mongoose.connect(//SUA STRING DE CONEXÃO MONGO ATLAS
).then(()=>{
    console.log("Conectado")
}).catch((err)=>console.log(err))

app.listen(3000)