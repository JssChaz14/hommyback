const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

app.listen(3000, () => {
    console.log('corriendo: ' + 3000);
})