import { z } from "zod"

export const createClientContactSchema = z.object({
    fullName: z.string().nonempty("Nome obrigatório"),
    email: z.string().email("Email inválido").nonempty("Email obrigatório"),
    phone: z.string().nonempty("Telefone obrigatório")
})