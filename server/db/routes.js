import * as express from "express";

import db from "./db";

const router = express.Router();

router.get("api/hello", (req, res, next) => {
  res.json("world");
});

router.get("/api/chirps", async (req, res) => {
  try {
    res.json(await db.chirps.all());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/chirps/:id", async (req, res) => {
  try {
    res.json(await db.chirps.one(req.params.id))[0];
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
