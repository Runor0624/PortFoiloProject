import ProjectForm from "@/components/UI/ProjectForm"
import SkillForm from "@/components/UI/SkillForm"
import UI from "@/components/UI/UI"

import { SkillData } from "@/data/SkillData"
import Image from "next/image"

// Project Main Page
export default function Home() {

  return (
    <main className="flex flex-col justify-center w-full h-screen">
      
      <UI>
        <h4 className="p-4 font-bold text-xl">간단한 소개 부분 배치</h4>

      </UI>

      <UI id="skill">
        <h4 className="p-4 font-bold text-xl">Skill</h4>
        <section className="grid grid-cols-3 w-full">
        <SkillForm>
          <h4 className="text-center">FrontEnd</h4>
        </SkillForm>

        <SkillForm>
          <h4 className="text-center">FrontEnd</h4>
        </SkillForm>

        <SkillForm>
          <h4 className="text-center">FrontEnd</h4>
        </SkillForm>
        </section>
{/* 
        {SkillData.map((item) => (
          <section key={item.id}>
              <Image src={item.image} width={150} height={150} alt="이미지 임시" />
          </section>
        ))} */}
      </UI>

      <UI id="project">
        <h4 className="p-4 font-bold text-xl">Project</h4>
        
        <section>
        <ProjectForm>
          <Image src={"https://images.unsplash.com/photo-1512531123205-560f5974e686?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNpdHl8ZW58MHx8MHx8fDA%3D"} width={220} height={150} alt="이미지 임시" className="mx-0 lg:mx-2" />
          <div className="w-full border-b-2 border-slate-300 my-2" />

          <p>Project-Title-1</p>
        </ProjectForm>
        </section>
      </UI>

      <UI>
        <h4 className="my-12 pl-4 font-bold text-xl">Career</h4>
        <section className="grid grid-cols-2">  
          <section>
            <p>1</p>
          </section>

          <section>
            <p>1-1</p>
          </section>

          <section>
            <p>2</p>
          </section>

          <section>
            <p>2-1</p>
          </section>
        </section>
      </UI>
    </main>
  )
}
