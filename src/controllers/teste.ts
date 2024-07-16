import { RequestHandler } from "express"
import { z } from "zod"
import { postSchema } from "../schemas/postSchema"

export const teste: RequestHandler = (req, res) => {
    return res.json({ message: "hello" })
}

export const user: RequestHandler = (req, res) => {
    const userSchema = z.object({
        name: z.string().min(2),
        age: z.number().min(18).max(99)
    })

    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.json({ message: "algo deu errado" }
        )
    }

    const { name, age } = result.data;

    return res.json({ result: name, age })

}

export const jsonPost: RequestHandler = async (req, res) => {

    const request = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await request.json();

    const result = postSchema.safeParse(data);

    if (!result.success) {
        return res.status(500).json({ message: result.success })
    }

    let totalPosts = result.data.length;

    res.json({ total: totalPosts })
};