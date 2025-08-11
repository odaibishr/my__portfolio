import z from "zod";

export const ContactSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters long",
    }),
    email: z.string().nonempty({
        message: "Email is required",
    }),
    message: z.string().nonempty({
        message: "Message is required",
    }),
})