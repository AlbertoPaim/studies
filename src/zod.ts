import z from "zod";

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(99),
    status: z.boolean()
});

type User = z.infer<typeof schema>

let data: User = {
    name: "alberto",
    email: "alberto@gmail.com",
    age: 10,
    status: false
}

const result = schema.parse(data);

console.log(result);
