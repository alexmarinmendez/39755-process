import express from 'express'
import { fork } from 'child_process'

const app = express()

app.get('/', (req, res) => res.send('Everything is OK'))
app.get('/suma', (req, res) => {
    const child = fork('./suma.js')
    child.on('message', result => {
        res.send('El resultado es ' + result)
    })
})

app.listen(8080, () => console.log('Server Up'))