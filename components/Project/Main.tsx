'use client'
import { useRouter } from "next/navigation"

// Project 미리보기

export default function Project () {
	const router = useRouter()

	return (
		<>
		<section className="flex flex-row justify-center items-center w-full">
			<div className="border border-slate-300 rounded-sm w-1/3 mx-2" onClick={() => router.push(`/project/1`)}>
				<p>Project1</p>
			</div>

			<div className="border border-slate-300 rounded-sm w-1/3">
				<p>project2</p>
			</div>
		</section>
		</>
	)
}