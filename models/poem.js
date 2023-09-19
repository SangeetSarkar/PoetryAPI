const mongoose = require("mongoose");

const poemSchema = new mongoose.Schema({
    author: String,
    poem_text: String
});


const Poem = mongoose.model("poem", poemSchema);
module.exports = Poem;