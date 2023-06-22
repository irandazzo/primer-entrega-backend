const socket = io();
/* socket.emit('message', "Hola, soy un cliente y me estoy comunicando desde un WS")

socket.on('evento_para_socket', data => {
    console.log(data);
}) */

const input = document.getElementById('textbox');
const log = document.getElementById('log');
input.addEventListener('keyup', evt =>{
    if(evt.key === "Enter"){
        socket.emit('message', input.value);
        input.value = ""
    }
})
socket.on('log', data =>{
    let logs = "";
    data.logs.forEach(log => {
        logs += `${log.socketid} dice: ${log.message}<br/>`
    });
    log.innerHTML = logs;
})