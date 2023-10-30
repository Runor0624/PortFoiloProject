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
        <h4 className="p-4 font-bold text-xl">Introduce</h4>
        <section className="grid grid-cols-2 justify-items-center">
          <section>
            <p>내용</p>
          </section>
          <section>
            <p>사진</p>
          </section>
        </section>
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
        
        <ProjectForm>
          <Image src={"https://images.unsplash.com/photo-1512531123205-560f5974e686?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNpdHl8ZW58MHx8MHx8fDA%3D"} width={200} height={100} alt="이미지 임시" className="mx-0 lg:mx-2" />

          <p>Project-Title-1</p>
        </ProjectForm>
      </UI>

      <UI>
        <h4 className="pl-4 font-bold text-xl">Career</h4>
        <section className="grid grid-cols-2 justify-items-center">  
          <section>
            <p>회사 명</p>
          </section>

          <section>
            <p>어떤일을 했는지?</p>
          </section>
        </section>
      </UI>

      <UI id="contact">
          <h4>여기는 연락처가 들어갑니다.</h4>
      </UI>
    </main>
  )
}
