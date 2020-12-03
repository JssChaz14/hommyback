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
app.use('/api/login', require('./routes/auth'));

app.use('/api/condominos', require('./routes/condominos'));

app.use('/api/ingresos', require('./routes/ingresos'));
app.use('/api/conciliacion', require('./routes/conciliacion'));

app.use('/api/conceptos', require('./routes/conceptos'));

app.use('/api/cargos', require('./routes/cargos'));


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});