const router = require("express").Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");

const PATH_DATA = "C:/Users/home/Desktop/Node-Demo/jwt/data/tweets.json"

router.delete("/delete/:id", (req, res) => {
    fs.readFile(PATH_DATA, "utf-8", (err, data) => {
        const { id, publisherId } = req.body;
        if(err) res.status(500).send("wronging info");
        const Delete = JSON.parse(data);
        const DeleteID = Delete.filter(info => info.id != req.params.id);
        if(!DeleteID) return res.status(403).send("you'r not aloud to do change");
        const token = jwt.sign({ id: DeleteID.id, publisherId: DeleteID.publisherId },
            process.env.DELETE_TOKEN
        );
        res.send({ token }); 
        fs.writeFile(PATH_DATA, JSON.stringify(DeleteID), (err) => {
            if(err) res.status(500).send("Ops");
            res.send("Deleted successfully");
        })
    })
})

module.exports = router;
