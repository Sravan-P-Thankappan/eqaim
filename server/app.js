const express = require('express')
const app = express()
const cors = require('cors')
const apiRoute = require('./routes/api')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoute)

app.listen(5000,()=>console.log('Server started on port 3000'))

