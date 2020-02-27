const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    cuisine: String,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: reviewSchema
}, {
    timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema);