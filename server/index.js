const express = require('express')
const mc = require('./controllers/message_controllers')

const app = express()

const PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))