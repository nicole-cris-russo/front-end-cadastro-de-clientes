import { IButton } from "../types"

export const Button = ({bg_color, txt_color, text, event}: IButton) => {
    return (
            <button className={`${bg_color} ${txt_color} p-2 border-none rounded font-medium my-2 px-5`} onClick={event}> {text} </button>
    )
}