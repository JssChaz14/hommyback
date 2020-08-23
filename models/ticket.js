const { Schema, model } = require('mongoose');

const ticketSchema = Schema({

});

ticketSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Ticket', ticketSchema);