import express from "express";
import { teste, user } from "../controllers/teste";

export const router = express.Router();

router.get('/teste', teste);
router.post('/user', user);
