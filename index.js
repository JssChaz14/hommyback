require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./bd/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

app.use(express.json());

// Base de datos
dbConnection();


// Rutas
app.use('/api/usuarios', require('./routes/usuarios'))


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});