// Skill Components
import Image from "next/image"
import { SkillData } from "@/data/SkillData"

export default function Skill () {
    return (
        <section>
        <h1 className="text-center text-4xl font-bold py-4">Skill</h1>
        
        <section className="grid grid-cols-2 justify-items-center">
        {SkillData.map((item) => 
            <div className="border border-slate-300 rounded-sm my-2" key={item.id}>
                <Image src={item.image} width={100} height={100} alt="Skill 이미지" />
                <p>여기에는 어떤걸 알고 있는지?</p>
            </div>
        )}
        </section>
        </section>
    )
}