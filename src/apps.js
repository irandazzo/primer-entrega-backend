import express from "express";
import ProductRouter from './routes/product.routes.js';
import CartRouter from './routes/carts.routes.js';
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
/* import { randomInt } from "crypto"; */
import viewRouter from "./routes/views.router.js"
import { Server } from "socket.io";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const port = 8080;
const httpserver = app.listen(port, () => console.log(`Servidor Express Puerto ${port}`))
const socketServer = new Server(httpserver)

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname+'/public'));
app.use('/', viewRouter);

app.use("/api/products", ProductRouter);
app.use("/api/cart", CartRouter);
app.use('/api/realtimeproducts', viewRouter);


socketServer.on('connection', data => {
  console.log('Nuevo Ingreso ID: ' + data.id)
});

export { app, socketServer };


