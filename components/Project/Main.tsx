'use client'
import { useRouter } from "next/navigation"
import { project } from "@/data/project"
import Image from "next/image"
// Project 미리보기

export default function Project () {
	const router = useRouter()
	return (
		<section>
		<h4 className="text-center text-4xl font-bold py-8">진행한 프로젝트 : {project.length} </h4>

		{project.map((itemProject) => (
		<section className="grid lg:grid-cols-3 grid-cols-1 justify-items-center w-full m-auto" key={itemProject.id}>
			<div className="border border-slate-300 rounded-sm w-max mx-8">
				<h3 className="text-center text-xl font-bold p-4 w-full border-b-2 border-slate-300">{itemProject.projectTitle}</h3>
				<Image src={itemProject.image} width={250} height={100} alt="Skill 이미지" className="m-4" />
				
				<p className="px-10 py-4 font-bold text-center text-base">기간 : {itemProject.projectDate}</p>
				<p className="px-10 py-4 underline">{itemProject.projectSkill}</p>
				<p className="px-10 py-4 font-bold text-base">{itemProject.projectDescription0}</p>
				<p className="px-10 py-4 font-bold text-base">{itemProject.projectDescription1}</p>
			</div>
		</section>
		))}
		</section>
	)
}