import { useContext } from "react"
import { Button } from "./Button"
import { UserContext } from "../contexts/UserContext"
import { IUserContext } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../schemas/loginSchema"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ILoginUseForm = z.infer<typeof loginSchema>

export const Login = () => {
    const {login_register, setlogin_register, loginUserSubmit} = useContext<IUserContext>(UserContext)
    const { register, handleSubmit, formState: {errors} } = useForm<ILoginUseForm>({
        resolver: zodResolver(loginSchema),
    })
    
    return (
        <>
        <form onSubmit={handleSubmit(loginUserSubmit)} id="form-login" className="bg-white flex flex-col gap-5 text-cinza-escuro w-full">
            <label className="flex flex-row border-2 border-roxo p-2 rounded" htmlFor="email"> Email:
                <input type="text" id="email" className="outline-none" {...register("email")}/>
            </label>
            {errors.email && <span>{errors.email.message}</span>}
            <label className="flex flex-row border-2 border-roxo p-2 rounded" htmlFor="password"> Senha:
                <input type="password" id="password" {...register("password")}/>
            </label>
            {errors.password && <span>{errors.password.message}</span>}
            <Button bg_color="bg-laranja" txt_color="text-cinza-escuro" text="Logar"></Button>
        </form>
        <Button bg_color="bg-roxo" txt_color="text-cinza" text="Cadastre-se" event={() => setlogin_register(!login_register)}></Button>
        </>
    )
}