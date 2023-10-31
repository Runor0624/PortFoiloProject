import Contact from "@/components/Contact/Contact"

import ProjectForm from "@/components/UI/ProjectForm"
import SkillForm from "@/components/UI/SkillForm"
import UI from "@/components/UI/UI"

import { datas } from "@/data/data"
import { SkillData } from "@/data/SkillData"
import Image from "next/image"

// Project Main Page
export default function Home() {

  return (
    <main className="flex flex-col justify-center w-full h-screen">
      
      <UI>
        {datas.map((item) => (
        <section className="grid grid-cols-2 justify-items-center" key={item.id}>
          <section className="lg: my-6">
            <p>{item.description1}</p>
            <p>{item.description2}</p>
            <p>{item.description3}</p>
          </section>
          <section>
            <Image src={item.image} width={220} height={150} alt="이력서 이미지" className="mr-4 lg:mr-14 -my-6" />
          </section>
        </section>
        ))}
      </UI>

      <UI id="contact">
          <Contact />
      </UI>
    </main>
  )
}
