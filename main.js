const express = require("express");
const mongoose = require("mongoose")

const cors = require("cors")
const dotenv = require("dotenv")

const Poem = require("./models/poem")

const app = express();

dotenv.config();

app.use(cors());

app.get("/all", async (req, res) => {
    const poems = await Poem.find({});
    poems.sort((a,b)=>{
        if(a==b)
            return 0;
        else if (a<b)
            return -1;
        else
            return  1;
    })
    res.json(poems); 
})

app.get("/", (req, res) => {
    res.json({msg: "Welcome to the Poetry API"})
});

app.listen(3000,()=>{
    console.log("Server Started");
});


(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected")
})()