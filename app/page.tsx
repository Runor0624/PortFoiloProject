import Contact from "@/components/Contact/Contact"
import Introduce from "@/components/Introduce/Introduce"
import Skill from "@/components/Skill/Skill"

import UI from "@/components/UI/UI"

// Project Main Page
export default function Home() {

  return (
    <main className="flex flex-col justify-center w-full">
      
      <UI id="main"> {/* 이 부분 수정해야함. */}
          <Introduce />
      </UI>

      <UI id="skill">
          <Skill />
      </UI>

      <UI id="contact"> {/* 이 부분 수정해야함. */}
          <Contact />
      </UI>
    </main>
  )
}
