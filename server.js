const mongoose = require("mongoose");
const connectioString = "mongodb://localhost:27017/test";
mongoose.connect(connectioString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3500;

const uuidv4 = require('uuidv4');

app.get("/", async (req, res) =>{
    const ljudi = await db.collection("ljudi").find().toArray();
    res.send(ljudi);
});

app.get("/:id", async (req, res) =>{
    const covek = await db.collection("ljudi").findOne({_id: req.params.id});
    res.send(covek);
});

app.post("/", async (req, res) =>{
    const ime = req.body.ime;
    const result = await db.collection("ljudi").insertOne(
        {
            _id: uuidv4.uuid(),
            ime: ime
        }
    );
    res.send(result);
});

app.put("/:id", async (req, res) =>{
    const id = req.params.id;
    const ime = req.body.ime;
    const result = await db.collection("ljudi").updateOne(
        {_id: id},
        {$set: { ime: ime }}
    );
    res.send(result);
});

app.delete("/:id", async (req, res) =>{
    const id = req.params.id;
    const result = await db.collection("ljudi").deleteOne({_id: id});
    res.send(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
