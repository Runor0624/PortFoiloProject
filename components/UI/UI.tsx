// Skill등 각 부분에 대한 최 상단 요소 
import { UIComponentsType } from '../../types/types' 

export default function UI ({children, id, className}:UIComponentsType) {
    return (
        <article className='flex justify-center items-center w-full my-4 md:h-2/3' id={id}>
            {children}
        </article>
    )
}