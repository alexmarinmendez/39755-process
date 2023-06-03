import express from 'express'
const app = express()

const port = process.argv[2] || 8080

app.get('/', (req, res) => res.send('Ok!!'))

app.listen(port, () => console.log(`Server up on port ${port}`))