import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 8080
const MONGO_URI = (process.env.MODE === 'development')
                    ? process.env.MONGO_LOCAL
                    : process.env.MONGO_ATLAS

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
