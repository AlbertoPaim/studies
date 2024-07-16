import express from "express";
import { jsonPost, teste, user } from "../controllers/teste";

export const router = express.Router();

router.get('/teste', teste);
router.post('/user', user);
router.get('/posts', jsonPost);
