import Express from "express";
import { router } from "./routes/Router";

const app = Express();

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(router)
app.listen(3000);

app.get('/ping', (req, res) => {
    res.send("pong");
    console.log("Rodando: http://localhost:3000")
})