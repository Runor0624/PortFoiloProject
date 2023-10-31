// Button Components
import { ButtonComponentsType } from "@/types/types"
export default function Buttons ({children, onClick}: ButtonComponentsType) {
    return (
        <button className="btn bg-sky-500/75 border-none rounded-sm text-white cursor-pointer text-base font-bold m-1 w-2/3 lg:w-1/2" onClick={onClick}>
            {children}
        </button>
    )
}