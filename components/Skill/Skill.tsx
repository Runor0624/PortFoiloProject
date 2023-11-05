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
                <div className="group relative">
                <Image src={itemFE.image} width={100} height={100} alt="Skill 이미지" className="transition-all duration-300 ease-in-out transform group-hover:scale-105 my-4" />
                <section className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300 ease-in-out w-max h-max z-20">
                    <Image src={itemFE.image} width={100} height={100} alt="Skill 이미지" className="my-4" />
                    <ul role="list" className="marker:text-sky-400 list-disc space-y-3">
                        <li className="text-center p-4">{itemFE.description}</li>
                        <li className="text-center p-4">{itemFE.description1}</li>
                    </ul>
                </section>
                </div>
                </section>
            ))}
            </div>

            <div className="w-max m-4 px-10">
            <h4 className="text-center text-2xl font-bold py-4 underline">BackEnd</h4>
            {SkillDataBE.map((itemBE) => (
                <section key={itemBE.id} className="flex flex-col items-center m-4">
                <div className="group relative">
                <Image src={itemBE.image} width={100} height={100} alt="Skill 이미지" className="transition-all duration-300 ease-in-out transform group-hover:scale-105 my-4" />
                <section className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300 ease-in-out w-max h-max z-20">
                    <Image src={itemBE.image} width={100} height={100} alt="Skill 이미지" className="my-4" />
                    <ul role="list" className="marker:text-sky-400 list-disc space-y-3">
                        <li className="text-center p-4">{itemBE.description}</li>
                    </ul>
                </section>
                </div>
                </section>
            ))}
            </div>

            <div className="w-max m-4">
            <h4 className="text-center text-2xl font-bold py-4 underline">ETC</h4>
            {SkillDataETC.map((itemETC) => (
                <section key={itemETC.id} className="flex flex-col items-center m-4">
                <div className="group relative">
                    <Image src={itemETC.image} width={100} height={100} alt="Skill 이미지" className="my-4" />
                    <section className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300 ease-in-out w-max h-max z-20">
                    <Image src={itemETC.image} width={100} height={100} alt="Skill 이미지" className="my-4" />
                    <ul role="list" className="marker:text-sky-400 list-disc space-y-3">
                    <li className="text-center p-4">{itemETC.description1}</li>
                    </ul>
                    </section>
                </div>
                </section>
            ))}
            </div>
        </section>
        </section>
    )
}