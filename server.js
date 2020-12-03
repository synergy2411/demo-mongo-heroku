const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const users = [
    {id: 101, name : "Foo", age : 32},
    {id: 102, name : "Bar", age : 33},
    {id: 103, name : "Bam", age : 34},
    {id: 104, name : "Bas", age : 35}
]

app.get("/api/users", (req, res) => {
    res.send(users).status(200);
})

app.post("/api/users", (req, res)=>{
    if(req.body){
        users.push(req.body)
        return res.send(users).status(201)
    }
})

app.listen(PORT, () => console.log("Server running on PORT : ", PORT))