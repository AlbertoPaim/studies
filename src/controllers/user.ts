import { prisma } from "../libs/prisma"

import { RequestHandler } from "express";

export const createUser: RequestHandler = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: "alberto",
                email: "alberto@gmail.com"
            }
        })

        return res.status(201).json({ user })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}