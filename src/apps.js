import express from "express";
/* import ProductRouter from './routes/product.routes.js';
import CartRouter from './routes/carts.routes.js'; */
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
/* import { randomInt } from "crypto"; */
import viewRouter from "./routes/views.router.js"
import { Server } from "socket.io";

const app = express();
/* const port = 8080;

app.listen(port, () => {
  console.log(`Servidor Express Puerto ${port}`);
}); */
const httpserver = app.listen(8080, () => console.log("Server Arriba"))
const socketServer = new Server(httpserver)

/* Codigo nuevo */
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname+'/public'))
app.use('/', viewRouter)

const logs = []
socketServer.on('connection', socket =>{
  console.log("Inicio la comunicación");

    socket.on("message", data =>{
      logs.push({socketid:socket.id, message:data})
      socketServer.emit('log', {logs});
    })
})

/* socketServer.on('connection', socket =>{
  console.log("Nuevo Cliente");

  socket.on('message', data =>{
    console.log(data);
  })

  socket.emit('evento_para_socket', "mensaje para que lo reciba el socket")
}) */
/*
socketServer.on // escuchar-recibir
socketServer.emit // hablar-enviar
*/

/* Codigo anterior */
/* app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api/products", ProductRouter)
app.use("/api/cart", CartRouter) */

