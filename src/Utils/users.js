const users=[]

//addUser, removeUser, getUser, getUsersInRoom

const addUser=({UserName,Room,id})=>{
    const username=UserName.trim().toLowerCase()
    const room=Room.trim().toLowerCase()

    if(!username || !room)
    {
        return {
            error:"Please mention all the credentials"
        }
    }

    //Find an existing pair

    const ExisitingPair=users.find((user)=>{
        return user.UserName===UserName && user.Room===Room
    })

    if(ExisitingPair)
    {
        return {
            error:"The given username already exist for this room"
        }
    }

    const user={UserName,Room,id}

    users.push(user)

    return {user}
}

const removeUser=(id)=>{
    const index=users.findIndex((user)=>user.id===id)
    if(index!==-1)
    {
        return users.splice(index,1)[0]   //Object of the removed user
    }
}

const getUser=(id)=>{
    const userprofile=users.find((user)=>{return user.id===id})
    if(userprofile)
    {
        return userprofile
    }
}

const getUsersInRoom=(Room)=>{
    const room=Room.trim().toLowerCase()
    const userprofile=users.filter((user)=>user.Room===Room)
    if(userprofile)
    {
        return userprofile
    }
}

// addUser({UserName:"Yash",
// Room:"Maths",
// id:1})

// addUser({UserName:"Yo",
// Room:"Maths",
// id:1})

// console.log(users)

// const res=addUser({
//     UserName:"Yash",
//     Room:"Maths",
//     id:22
// })

// removeUser(1)
// console.log(users)

// console.log(getUser(1))
// console.log(getUsersInRoom("Maths"))

module.exports={
    getUser,
    addUser,
    getUsersInRoom,
    removeUser
}