import express from 'express'

const app = express()
const suma = () => {
    let result = 0
    for (let index = 0; index < 5e9; index++) {
        result += index
    }
    return result
}

app.get('/', (req, res) => res.send('Everything is OK' + ' y el proceso que lo ejecutó es el ' + process.pid))
app.get('/suma', (req, res) => {
    const result = suma()
    res.send('El resultado es ' + result + ' y el proceso que lo ejecutó es el ' + process.pid)
})

app.listen(8080, () => console.log('Server Up'))