import { useContext } from "react"
import { Button } from "./Button"
import { UserContext } from "../contexts/UserContext"
import { IUserContext, IUserCreate } from "../types"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../schemas/registerSchema"
import { z } from "zod"

type ICreateUseFormData = z.infer<typeof registerSchema>

export const Register = () => {
    const {login_register, setlogin_register, createUserSubmit} = useContext<IUserContext>(UserContext)
    
    const { register, handleSubmit, formState: {errors} } = useForm<ICreateUseFormData>({
        resolver: zodResolver(registerSchema),
    })

    return (
        <>
            <form onSubmit={handleSubmit(createUserSubmit)} id="form-register" className="bg-white flex flex-col gap-5 text-cinza-escuro w-full">
                <label className="flex flex-row border-2 border-roxo p-2 rounded" htmlFor="fullName"> Nome Completo:
                    <input type="text" id="fullName" className="outline-none" {...register("fullName")}/>
                </label>
                {errors.fullName && <span>{errors.fullName.message}</span>}
                <label className="flex flex-row border-2 border-roxo p-2 rounded" htmlFor="email"> Email:
                    <input type="text" id="email" {...register("email")}/>
                </label>
                {errors.email && <span>{errors.email.message}</span>}
                <label className="flex flex-row border-2 border-roxo p-2 rounded" htmlFor="password"> Senha:
                    <input type="password" id="password" {...register("password")} />
                </label>
                {errors.password && <span>{errors.password.message}</span>}
                <Button bg_color="bg-laranja" txt_color="text-cinza-escuro" text="Cadastrar"></Button>
            </form>
            <Button bg_color="bg-roxo" txt_color="text-cinza" text="Já possui uma conta?"  event={() => setlogin_register(!login_register)}></Button>
        </>
    )
}