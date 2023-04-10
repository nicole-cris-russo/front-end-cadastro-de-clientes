import about from "../assets/about.svg"

export const About = () => {
    return (
        <div className="flex flex-col gap-3 w-full h-full p-5">
            <h1 className="text-3xl">Bem-vindo(a) ao nosso site de registro de clientes!</h1>
            <span> Nós somos uma empresa dedicada a fornecer um serviço simples e eficiente para gerenciar seus contatos de clientes.</span>
            <span>Nosso objetivo é tornar mais fácil para você manter um registro organizado e acessível das informações dos seus clientes, incluindo nome, e-mail e telefone. Sabemos o quanto é importante manter um bom relacionamento com seus clientes e é por isso que criamos essa ferramenta para ajudá-lo nessa tarefa.</span>
            <div className="w-full justify-end flex items-end h-full">
                <img src={about} alt="About" className="w-1/2"/>
            </div>
        </div>
    )
}