import { RequestHandler } from "express"

export const teste: RequestHandler = (req, res) => {
    return res.json({ message: "hello" })
}

export const user: RequestHandler = (req, res) => {
    const { name, age } = req.body;

    console.log(name, age);

    return res.json({ result: name, age })

}