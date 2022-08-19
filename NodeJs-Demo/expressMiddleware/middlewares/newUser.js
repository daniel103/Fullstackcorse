const fs = require("fs");
const uuid = require("uuid");
const dataPath = "C:/Users/home/Desktop/Node-Demo/expressMiddleware/middlewares/users.json";
const express = require("express");
const router = express.Router();


// router.get("/", (req, res) => {
//     res.send("Hello im from product route");
//   });

// router.post("/create", (req, res) => {
//     fs.readFile(dataPath, "utf-8", async (err, data) => {
//         const dataJson = await JSON.parse(data);
//         const New = {
//             id: uuid.v4,
//             name: req.body.name,
//             age: req.body.age,
//         }
//         dataJson.push(New)

//         fs.writeFile(dataPath, JSON.stringify(dataJson), (error) => {
//             if (error)  {res.send("Something went wrong")};
//             res.send("User created successfully")
//         })
//     })
// })

function newUser (req, res, next)  {
    fs.readFile(`${dataPath}/users.json`, "utf-8", (err, data) => {
        const dataJson = await JSON.parse(data);
        const New = {
            id: uuid.v4,
            name: req.body.name,
            age: req.body.age,
        }
        dataJson.push(New)

        fs.writeFile(`${dataPath}/users.json`, JSON.stringify(dataJson), err => {
            if (err) res.send("Something went wrong");
            res.send("User created successfully")
        })
    })
    next();
}

module.exports = newUser;