const express = require('express')
const app = express()


const port = process.env.PORT || 5000

const server =  app.listen(port, () => {
  console.log('Server listening on port', port)
})

app.use(express.static("public"))

const io = require('socket.io')(server, {
  cors: {
    origin: "https://whatsapp-create.herokuapp.com/",
    credentials: true
  }
});

io.on('connection', socket => {
  console.log("client is connected")
  const id = socket.handshake.query.id
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
    
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)

      
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})



