import express from 'express'
import { Command } from "commander"
import mongoose from "mongoose"

const program = new Command()
const app = express()

program
    .option('-p <port>', 'Puerto del servidor', 8080)
    // .option('-s <server>', 'Servidor de BD', 'local')
    .option('--mode <mode>', 'description', 'development')
program.parse()

const PORT = parseInt(program.opts().p)
const MONGO_URI = (program.opts().mode === 'development')
                        ? 'mongodb://127.0.0.1:27017'
                        : 'mongodb+srv://coder:coder@cluster0.yd7kuoh.mongodb.net/'

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
