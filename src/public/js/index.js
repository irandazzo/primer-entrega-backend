const socket = io();
let user;
let chatBox = document.getElementById("chatBox");

Swal.fire({
    title: "Bienvenido a nuestro Chat",
    input: "text",
    text: "Ingresa tu nombre",
    inputValidator: (value) =>{
        return !value && "Se requiere un nombre para continuar"
    },
    allowOutsideClick: false
}).then(result =>{
    user = result.value
})

chatBox.addEventListener('keyup', evt =>{
    if (evt.key === "Enter"){
        if(chatBox.value.trim().length>0){
            socket.emit("message",{user:user, message:chatBox.value});
            chatBox.value = "";
        }
    }
})
/* Chatbox */
/*     let messages = [];
    socket.on('connection', socket => {
    console.log("Tenemos un cliente conectado"); 
 *//* 
        socket.on('message', data =>{
        messages.push(data)
        io.emit('messageLogs', messages)
        console.log(data);
    })
}); */

socket.on('messageLogs', data =>{
    let log = document.getElementById('messageLogs');
    let messages = "";

    data.forEach(message => {
    messages = messages + `${message.user} dice: ${message.message} </br>`
    });
    log.innerHTML = messages
})

socket.on ('newUserConnected', data =>{
    if(!user) return;
    Swal.fire({
        text: "Nuevo usuario conectado",
        toast: true,
        position:'top-right'
    })
})
/* socket.emit('message', "Hola, soy un cliente y me estoy comunicando desde un WS")

socket.on('evento_para_socket', data => {
    console.log(data);
}) */

