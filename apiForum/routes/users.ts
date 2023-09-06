import express from "express";
import { getUser } from "../controllers/user";

const router = express.Router();

router.get("/find/:userId", getUser); //apiforum/users/find/:userId

export default router;