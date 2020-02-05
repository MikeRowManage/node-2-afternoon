let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body

        let newMessage = {
            text: text,
            time: time,
            id: id
        }
        messages.push(newMessage)
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text} = req.body
        const messageIndex = messages.findIndex(message => message.id === +req.params.id)
        console.log(messageIndex)
        messages[messageIndex] = {
            id: messages[messageIndex].id,
            text: text || messages[messageIndex].text,
            time: messages[messageIndex].time
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        const messageIndex = messages.findIndex(message => message.id === +req.params.id)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}