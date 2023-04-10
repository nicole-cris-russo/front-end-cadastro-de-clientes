import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { createClientContactSchema } from "../../schemas/createClientContactSchema"
import { useContext } from "react"
import { ClientContext } from "../../contexts/ClientContext"
import { IClientContext } from "../../types"

type ICreateClientFormData = z.infer<typeof createClientContactSchema>

export const ModalRegisterClient = () => {
    const { createClient, setModal } = useContext<IClientContext>(ClientContext)

    const {register, handleSubmit, formState: { errors }} = useForm<ICreateClientFormData>({
        resolver: zodResolver(createClientContactSchema)
    })

    return (
        <div className="flex p-10 flex-col border-laranja border-4 bg-branco centralizar z-50 rounded">
            <span className="m-bottom">Adicionar cliente:</span>
            <form onSubmit={handleSubmit(createClient)} className="flex flex-col justify-center  gap-5 w-full">
                <div>
                    <label htmlFor="name" className="p-2 rounded border-2 border-azul w-full">Nome:
                    <input type="text" id="name" placeholder="" {...register("fullName")}/>
                    </label>
                </div>
                {errors.fullName && <span>{errors.fullName.message}</span>}
                <div>
                    <label htmlFor="email" className="p-2 rounded border-2 border-azul">Email:
                    <input type="text" id="email" placeholder="" {...register("email")}/>
                    </label>
                </div>
                {errors.email && <span>{errors.email.message}</span>}
                <div>
                    <label htmlFor="phone" className="p-2 rounded border-2 border-azul">Telefone:
                        <input type="text" id="phone" placeholder="" {...register("phone")}/>
                    </label>
                </div>
                {errors.phone && <span>{errors.phone.message}</span>}
                <div className="flex justify-between">
                    <button type="submit" className="px-2 py-1 rounded bg-laranja">Criar Cliente</button>
                    <button onClick={() => {setModal(false)}} className="px-2 py-1 rounded bg-azul">Cancelar</button>
                </div>
            </form>
        </div>
    )
}