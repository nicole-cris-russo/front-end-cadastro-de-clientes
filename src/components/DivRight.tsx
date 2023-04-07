import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export const DivRight = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    return (
        <>
            <div className="h-full w-2/3 flex justify-center items-center bg-laranja">
                {props.children}
            </div>
        </>
    )
}