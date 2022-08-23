import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Why would you do webdev")
})

export default router