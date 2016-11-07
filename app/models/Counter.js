var mongoose = require('mongoose');

// create the counters schema with an _id field and a seq field
var CounterSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Counter', CounterSchema);