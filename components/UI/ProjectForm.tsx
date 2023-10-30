// Project 에서 사용하는 카드 형태 UI
import { UIComponentsType } from '../../types/types'

export default function ProjectForm({children}:UIComponentsType) {
    return (
        <section className="border border-black rounded-sm w-1/3 lg:w-1/6 m-6">
            {children}
        </section>
    )
}