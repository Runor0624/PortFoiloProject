'use client'
import { useRouter } from "next/navigation"
import { project } from "@/data/project"
// Project 미리보기

export default function Project () {
	const router = useRouter()
	return (
		<section>
		<h4 className="text-center text-4xl font-bold py-8">진행한 프로젝트 : {project.length} </h4>

		<section className="grid lg:grid-cols-3 grid-cols-1 justify-items-center w-full m-auto">
			<div className="border border-slate-300 rounded-sm w-5/6 mx-2" onClick={() => router.push(`/project/1`)}>
				<h3 className="text-center text-xl font-bold p-4">진행한 프로젝트</h3>
				<p className="px-10">아마도 여기는 프로젝트 이미지</p>
				<p className="px-10">아마도 여기는 프로젝트 진행기간</p>
				<p className="px-10">프로젝트에 대한 간단한 설명 or Skill</p>
			</div>
		</section>
		</section>
	)
}