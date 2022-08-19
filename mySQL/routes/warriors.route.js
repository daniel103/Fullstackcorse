const express = require("express");
const router = express.Router();
const { Query } = require("../database.config");

// CRUD
router.get("/all", async (req, res) => {
  try {
    const getAll_q = `SELECT warrior_id, warrior_name, warrior_age, weapon_name, power 
            FROM warriors INNER JOIN weapons ON warriors.weapon_id = weapons.weapon_id `;
    const data = await Query(getAll_q);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, error });
  }
});

router.get("/single/:id", async (req, res) => {
  try {
    const getOne_q = `SELECT warrior_id, warrior_name, warrior_age, weapon_name, power 
    FROM warriors JOIN weapons ON warriors.weapon_id = weapons.weapon_id WHERE warrior_id = ?`;

    const data = await Query(getOne_q, [req.params.id]);

    res.json({ error: false, data });
  } catch (error) {
    res.json({ error: true, error });
  }
});

router.post("/create", async (req, res) => {
  try {
    const create_q = `INSERT INTO warriors(warrior_name, warrior_age, weapon_id) value(?, ?, ?)`;
    const values = Object.values(req.body);

    const data = await Query(create_q, values);

    res.json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

// update warrior in a dynamic way
router.put("/update/:id", async (req, res) => {
  try {
    let values = [];
    let update_q = "UPDATE warriors SET";
    for (const key in req.body) {
      update_q += ` ${key} = ?,`;

      values.push(req.body[key]);
    }
    update_q = `${update_q.slice(0, -1)} WHERE warrior_id = ?`;
    values.push(req.params.id);

    const data = await Query(update_q, values);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const delete_q = "DELETE FROM warriors WHERE warrior_id = ?";

    const data = await Query(delete_q, [req.params.id]);

    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, error });
  }
});

module.exports = router;
