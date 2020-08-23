const { Schema, model } = require('mongoose');

const panicoSchema = Schema({

});

panicoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Panico', panicoSchema);