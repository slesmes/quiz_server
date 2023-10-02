const express = require("express");
/* app conectar con el puerto local el express */
/* especificar los middleware a utilizar */
const app = express();
const workerRoutes = require("./routes/worker");
const clientRoutes = require("./routes/client");
const API_VERSION = 'api/v1'
/* acceder a la configuracion del archivo */
//pruebas con extension rest client
app.use(express.json());
// pruebas desde postman
app.use(express.urlencoded({ extended:true}));
// http://localhost:3100/api/v1/user/new-user
app.use(`/${API_VERSION}/workers`, workerRoutes)
app.use(`/${API_VERSION}/clients`, clientRoutes)

module.exports = app;
