const generateAdminMessage=(text)=>{
    return {text,createdAt:new Date().getTime()}
}

const generateuserMessage=(text,username,room)=>{
    return {text,createdAt:new Date().getTime(),username:username.toUpperCase(),room}
}

const generateLocationMessage=(url,username)=>{
    return {url,createdAt:new Date().getTime(),username:username.toUpperCase()}
}

module.exports={
    generateAdminMessage,
    generateuserMessage,
    generateLocationMessage
}