let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var TodoSchema = new Schema({
    content: {
        type: String,
        default: ""
    },
    created_at  :{
        type: Date,
        default: Date.now()
    },
    complete : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Todo",TodoSchema);