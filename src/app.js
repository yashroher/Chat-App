//Server Side : Backend 

//Initializing the packages...
//Built-in
const socketio=require('socket.io')
const express=require('express')
const path=require('path')
const http=require('http')
const chalk=require('chalk')

//non-built in
const {generateAdminMessage,generateuserMessage,generateLocationMessage}=require('./Utils/message')
const {getUser,addUser,getUsersInRoom,removeUser}=require('./Utils/users')
//Initializing Paths
const TempDir=path.join(__dirname,'../public')

//Setting up the app
const app=express()
app.use(express.static(TempDir))

//Setting up the chat server
const server=http.createServer(app)
const io=socketio(server)

//constants

const count=1

//Chat App
io.on("connection",(socket)=>{
    console.log(chalk.green("Connected Sucessfully!!"))
    socket.on('join',(options,callback)=>{
        const {error,user}=addUser({id:socket.id,...options})
        if(error)
        {
           return callback(error)
        }
        socket.join(user.Room)
        socket.emit('admin',generateAdminMessage("Welcome User!!"))
    socket.broadcast.to(user.Room).emit('admin',generateAdminMessage(`${user.UserName} has joined`))
    io.to(user.Room).emit('RoomData',{Room:user.Room,users:getUsersInRoom(user.Room)})
    io.to(user.Room).emit("UserRoom",{userRoom:user.Room})

    socket.on('disconnect',()=>{
          const User=removeUser(user.id)
          if(User)
          {
            io.to(User.Room).emit('RoomData',{Room:User.Room,users:getUsersInRoom(User.Room)})
            io.to(User.Room).emit('admin',generateAdminMessage(`${User.UserName} left`))
          }
    }) 

    // io.to(user.Room).emit("pastChats",array)
    
    socket.on("sendMessage",(message)=>{
        io.to(user.Room).emit("userMessage",generateuserMessage(message,user.UserName,user.Room))
    })  
    console.log(user.UserName);
    console.log(user.Room)
    socket.on("sendLocation",(url)=>{
        io.to(user.Room).emit("getLocation",generateLocationMessage(url,user.UserName))
    })

    

})

})


//Setting up the main server
const port=process.env.PORT || 8000
server.listen(port,(error,success)=>{
    if(error)
    {
       return  console.log(chalk.red("There was some error while setting up the server!!!"))
    }

    console.log(chalk.green("The server is up on "+port))
})

// Notes:

// socket.emit, io.emit, socket.broadcast.emit 
// socket.to.broadcast.emit io.to.emit
