//Client Side 
const socket=io()
console.log("This is the client side")

//Options
const {UserName,Room}=Qs.parse(location.search,{ignoreQueryPrefix:true})
//Functions
const $template=document.querySelector("#template").innerHTML
const $message=document.querySelector("#admin")
const $usertemp=document.querySelector("#user-message").innerHTML
const $usermessage=document.querySelector("#user")
const $locationtemp=document.querySelector("#location").innerHTML
const $userlist=document.querySelector("#user-template").innerHTML
const $UserList=document.querySelector("#Users")   
const $RoomData=document.querySelector("#user-room").innerHTML 
const $data=document.querySelector("#room-title")

const autoscroll=()=>{
    //New Message Element
    const newmessage=$usermessage.lastElementChild

    //Heigth of the new message
    // const newmessageStyle=getComputedStyle(newmessage)
    const newmessageMargin=parseInt(newmessageStyle.marginBottom)
    const newmessageHeight=newmessage.offsetHeight+newmessageMargin

    //Visible Height
    const visible=$usermessage.offsetHeight
    const cont=$usermessage.scrollHeight
    const scrolloffset=$usermessage.scrollTop+visible

    if(cont-newmessageHeight<=scrolloffset){
        $usermessage.scrollTop=$usermessage.scrollHeight
    }
}

var room_name

socket.on('Header',(Room)=>{
    room_name=Room
    const html=Mustache.render($header,{
       Room 
    })

    $room.insertAdjacentHTML('beforeend',html)
})

// socket.on('admin',({text,createdAt})=>{
//     const message={
//         text:text,
//         createdAt:moment(createdAt).format('hh:mm a')
//     }
//     const html=Mustache.render($template,{
//         message:message.text,
//         createdAt:message.createdAt
//     }) 
//     $message.insertAdjacentHTML('beforeend',html)
// })

let array={message:[],username:[],createdAt:[],room:[]}


socket.on('userMessage',({text,createdAt,username,room})=>{
      array.room=room
      array.message.push(text)
      array.username.push(username)
      array.createdAt.push(moment(createdAt).format("hh:mm a"))
      const html=Mustache.render($usertemp,{
          message:text,
          createdAt:moment(createdAt).format("hh:mm a"),
          username,
        
      })
      localStorage.setItem(room,text)
      $usermessage.setAttribute("class","user-1")
      $usermessage.insertAdjacentHTML('beforeend',html)
      autoscroll()
})
socket.on('getLocation',({url,createdAt,username})=>{
    array.room=room_name
    array.message.push(url)
    array.username.push(username)
    array.createdAt.push(moment(createdAt).format("hh:mm a"))
    const html=Mustache.render($locationtemp,{
        url,
        createdAt:moment(createdAt).format("hh:mm a"),
        username
    })
    $usermessage.setAttribute("class","user-1")
    $usermessage.insertAdjacentHTML('beforeend',html)
    autoscroll()
})

socket.on('RoomData',({Room,users})=>{
    
    const html=Mustache.render($userlist,{
        Room,
        users
    })
    $UserList.innerHTML=html
})

const $form=document.querySelector('#form1')
const $form1=document.querySelector('#form2')

$form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const $input=document.querySelector("#message").value
    socket.emit("sendMessage",$input)
    document.querySelector("#message").value=""

})

$form1.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(!navigator.geolocation)
    {
        return alert("You device is not eligible for this service")
    }
    
    navigator.geolocation.getCurrentPosition((position)=>{
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude
        const url="https://www.google.com/maps?q="+latitude+','+longitude
        socket.emit("sendLocation",url)
    })

})

socket.on("UserRoom",({userRoom})=>{
   $data.innerHTML=userRoom
})

socket.emit('join',{UserName,Room},(error)=>{
    if(error)
    {
        alert(error)
        location.href='/'
    }
})