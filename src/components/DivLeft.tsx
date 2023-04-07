import { IDivLeft } from "../types"

export const DivLeft = ({children, flex_position}: IDivLeft) => {
    return (
        <div className={`h-full w-1/3 bg-white flex flex-col p-9 ${flex_position}`}>
            {children}
        </div>
    )
}