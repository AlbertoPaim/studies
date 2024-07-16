import Express from "express";
import { router } from "./routes/Router";
import "dotenv/config";

const app = Express();

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(router)
app.listen(process.env.PORT);

app.get('/ping', (req, res) => {
    res.send("pong");
    console.log(`Rodando na porta ${process.env.PORT}`)
})