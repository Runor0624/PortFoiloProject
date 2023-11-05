// Skill Components
import Image from "next/image"
import { SkillDataFE } from "@/data/skillDataFE"
import { SkillDataBE } from "@/data/skillDataBE"
import { SkillDataETC } from "@/data/skillDataETC"


export default function Skill () {
    return (
        <section>
        <h1 className="text-center text-4xl font-bold py-4">Skill</h1>
    
        <section className="grid lg:grid-cols-3 grid-cols-1 justify-items-center w-full m-auto">

            <div className="w-max m-4">
            <h4 className="text-center text-2xl font-bold py-4 underline">FrontEnd</h4>
            {SkillDataFE.map((itemFE) => (
                <section key={itemFE.id} className="flex flex-col items-center m-4">
                <Image src={itemFE.image} width={100} height={100} alt="Skill 이미지" />
                <section>
                    <p className="text-center p-4">여기에는 어떤걸 알고 있는지?</p>
                    <p className="text-center p-4">여기에는 어떤걸 알고 있는지?</p>
                </section>
                </section>
            ))}
            </div>

            <div className="w-max m-4">
            <h4 className="text-center text-2xl font-bold py-4 underline">BackEnd</h4>
            {SkillDataBE.map((itemBE) => (
                <section key={itemBE.id} className="flex flex-col items-center m-4">
                <Image src={itemBE.image} width={100} height={100} alt="Skill 이미지" />
                <section>
                    <p className="text-center p-4">여기에는 어떤걸 알고 있는지?</p>
                    <p className="text-center p-4">여기에는 어떤걸 알고 있는지?</p>
                </section>
                </section>
            ))}
            </div>

            <div className="w-max m-4">
            <h4 className="text-center text-2xl font-bold py-4 underline">ETC</h4>
            {SkillDataETC.map((itemETC) => (
                <section key={itemETC.id} className="flex flex-col items-center m-4">
                    <Image src={itemETC.image} width={100} height={100} alt="Skill 이미지" />
                    <p className="text-center p-4">여기에는 어떤걸 알고 있는지?</p>
                    <p className="text-center p-4">여기에는 어떤걸 알고 있는지?</p>
                </section>
            ))}
            </div>
        </section>
        </section>
    )
}