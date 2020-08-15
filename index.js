require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./bd/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();


// Rutas
app.use('/api/usuarios', require('./routes/usuarios'))
    // app.get('/', (req, res) => {

//     res.json({
//         ok: true,
//         msg: 'Hola Mundo'
//     });

// });


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});