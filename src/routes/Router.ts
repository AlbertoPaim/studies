import express from "express";
import { createUser } from "../controllers/user";

export const router = express.Router();

router.post('/user', createUser);