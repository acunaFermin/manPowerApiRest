import bodyParser from "body-parser";
import Server from "./classes/server";
import userRoutes from "./routes/usuario";

const server = new Server();

server.app.use(bodyParser.urlencoded({ extended: true }));

server.app.use(bodyParser.json());

server.start(() => {
  console.log(`servidor corriendo en el puerto ${server.port}`);
});

server.app.use("/user", userRoutes);
