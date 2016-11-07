var mongoose = require('mongoose');
var Counter = require('./Counter.js');

var UrlSchema = new mongoose.Schema({
    _id: {type: Number, index: true},
    long_url: String,
    created_at: { type: Date, default: Date.now }
});


UrlSchema.pre('save', function(next){
    var doc = this;
    // find the url_count and increment it by 1
    Counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, function(error, counter) {
        if (error)
            return next(error);
        doc._id = counter.seq;
        doc.created_at = new Date();
        next();
    });
});

module.exports = mongoose.model('Url', UrlSchema);