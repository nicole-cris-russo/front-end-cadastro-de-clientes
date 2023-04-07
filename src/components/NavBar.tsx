export const NavBar = () => {
    return (
            <ul className="flex flex-col gap-4 uppercase">
                <li className="flex justify-between items-center border-y-4 p-3 rounded border-laranja">
                    <h1 className="text-5xl">nome</h1><span>aa</span>
                </li>
                <li>
                    <span>Adicionar Cliente</span>
                </li>
                <li>
                    <span>Clientes</span>
                </li>
                <li>
                    <span>Sobre</span>
                </li>
                <li>
                    <span>Contato</span>
                </li>
            </ul>
    )
}