const express = require("express");
const router = express.Router();
const { Query } = require("../database.config");

// Finish CRUD with weapons - Done
// NEW REQUESTS
// - Filter by power - more then @params/query - done
// - Filter by power - less then - @params/query - done
// - get weapon - by name - @params/query - Done

// WELL DONE!!!!!!

router.get("/all", async (req, res) => {
  try {
    const getAll_q = "SELECT * FROM weapons";
    const data = await Query(getAll_q);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

router.get("/single/:id/", async (req, res) => {
  try {
    const getOne_q = `SELECT * FROM weapons WHERE weapon_id = ?`;
    const data = await Query(getOne_q, [req.params.id]);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

// Create new weapon
router.post("/create", async (req, res) => {
  try {
    const createOne_q = `INSERT INTO weapons(weapon_name, power) value(?, ?)`;
    const values = Object.values(req.body);
    const results = await Query(createOne_q, values);
    res.status(201).json({ error: false, data: results });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

// Update weapon
router.put("/update/:id", async (req, res) => {
  try {
    const updateOne_q = `UPDATE weapons SET weapon_name=?, power=? WHERE weapon_id=?`;
    const values = Object.values(req.body);
    values.push(req.params.id);
    const data = await Query(updateOne_q, values);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

// Delete weapon
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteOne_q = `DELETE FROM weapons WHERE weapon_id = ?`;
    const values = [req.params.id];
    const data = await Query(deleteOne_q, values);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

// Filter by power - more then
router.get("/filter/power/more", async (req, res) => {
  try {
    const filter_q = `SELECT * FROM weapons WHERE power > ?`;
    const values = [req.query.power];
    const data = await Query(filter_q, values);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

// Filter by power - less then
router.get("/filter/power/less", async (req, res) => {
  try {
    const filter_q = `SELECT * FROM weapons WHERE power < ?`;
    const values = [req.query.power];
    const data = await Query(filter_q, values);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

// Get weapon by name
router.get("/filter/name", async (req, res) => {
  try {
    const filter_q = `SELECT * FROM weapons WHERE weapon_name = ?`;
    const values = [req.query.name];
    const data = await Query(filter_q, values);
    res.status(200).json({ error: false, data });
  } catch (error) {
    res.json({ error: true, errorMessage: error });
  }
});

module.exports = router;
