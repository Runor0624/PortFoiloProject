// SkillForm
import { UIComponentsType } from '../../types/types'

export default function SkillForm({children}: UIComponentsType) {
    return (
        <section className='h-max border border-black rounded-sm m-4'>
            {children}
        </section>
    )
}