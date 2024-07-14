import z from "zod";

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(99)
});

let data = {
    name: "alberto",
    email: "alberto@gmail.com",
    age: "s"
}

const result = schema.parse(data);

console.log(result);
