import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'

const app = express()
const environment = 'production'
dotenv.config({
    path: (environment === 'development') ? './.env.development' : './.env.production'
})

const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONGO_URI

app.get('/', (req, res) => res.send('Ok!!'))

mongoose.connect(MONGO_URI, {
    dbName: 'process'
}, (error) => {
    if(error){
        console.log("DB No conected...")
        return
    }
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
})
