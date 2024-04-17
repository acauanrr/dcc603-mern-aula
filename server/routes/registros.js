import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

// Acesso aos metodos HTTP do servdiro Web (get, post, put, delete)
const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("registros");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/create", async (req, res) => {
  try {
    let newDocument = {
      nome: req.body.nome,
      funcao: req.body.funcao,
      salario: req.body.salario,
    };
    let collection = await db.collection("registros");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(201);
  } catch (error) {
    console.log(error);
  }
});

export default router;
