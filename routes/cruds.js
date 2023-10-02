const express = require("express");
const router = require("express").Router();
//import model
const Crud = require("../models/crud");

//CREATE
router.post("/", async (req, res) => {
  //get the sent in data off request body
  const { fullName, position, location,salary } = req.body;
  const newCrud = new Crud({ fullName, position, location,salary});
  try {
    await newCrud.save();
    res.status(200).json(newCrud);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const crud = await Crud.find();
    res.status(200).json(crud);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET A SINGLE POST

router.get("/:id", async (req, res) => {
  try {
    const crud = await Crud.findById(req.params.id);
    res.status(200).json(crud);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.patch("/:id", async (req, res) => {
  try {
    //Get the id off the url
    const { id } = req.params;
    //Get the data off the req body
    const { fullName, position, location,salary } = req.body;
    //updated post details
    const updatedCrud = { fullName, position, location,salary, _id: id };
    //find and update the record
    await Crud.findByIdAndUpdate(id, updatedCrud, { new: true });
    //find updated note
    res.status(200).json(updatedCrud);
  } catch (error) {
    res.status(500).json(error);
  }
});
//DELETE DETAILS
router.delete("/:id", async (req, res) => {
  try {
    //get the id off the url
    const { id } = req.params;
    await Crud.findByIdAndRemove(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
