import { z } from "zod"

export const registerSchema = z.object({
    fullName: z.string().max(120).nonempty("Nome obrigatório"),
    email: z.string().email("Email inválido").nonempty("Email obrigatório"),
    password: z.string().min(12, "Senha precisa ter no mínimo 12 caracteres").nonempty("Senha obrigatória")
})