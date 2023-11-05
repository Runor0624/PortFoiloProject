import { ETC } from "@/data/ETC"
import Image from "next/image"
// Career Component

export default function Career () {
	return (
		<section>
        <h1 className="text-center text-4xl font-bold py-6">Career</h1>

		{ETC.map((itemETC) => (
		<section className="flex flex-col sm:flex-row justify-center items-center ml-0 lg:ml-48" key={itemETC.id}>
			<div className="m-4 px-4 lg:px-28">
				<Image src={itemETC.image} width={140} height={100} alt="회사 이미지" className="ml-4" />
				<h3 className="text-xl font-bold py-2">회사명 : {itemETC.title}</h3>
				<p className="text-base font-bold py-2">재직기간 : {itemETC.period}</p>
				<p className="text-base font-bold py-2">회사 소재지: {itemETC.location}</p>
			</div>

			<div className="my-4 ml-0 lg:ml-48">
				<p>{itemETC.description}</p>
				<p className="font-bold py-2 w-full border-b-2 border-slate-300">{itemETC.description1}</p>

				<ul role="list" className="marker:text-sky-400 list-disc space-y-3">
					<h4 className="py-2 text-xl font-bold">{itemETC.job1Title}</h4>
					<p className="py-2 text-base font-bold text-slate-400 underline">진행 기간 : {itemETC.job1Period}</p>
					<li className="text-base py-2 font-bold">{itemETC.job1Description}</li>
					<li className="text-base py-2 font-bold">{itemETC.job1Description2}</li>
					<li className="text-base py-2 font-bold">{itemETC.job1Description3}</li>
					<li className="text-base py-2 font-bold">{itemETC.job1Description4}</li>
				</ul>

				<ul role="list" className="marker:text-sky-400 list-disc space-y-3">
					<h4 className="py-4 text-xl font-bold w-full border-t-2 border-slate-300">{itemETC.job2Title}</h4>
					<p className="py-2 text-base font-bold text-slate-400 underline">진행 기간 : {itemETC.job2Period}</p>
					<p className="py-2 text-base font-bold">참가 인원 : {itemETC.job2Member}</p>
					<p className="py-2 text-base font-bold underline">사용 Skill : {itemETC.job2Skill}</p>
					<li className="text-base py-2 font-bold underline">{itemETC.job2Description0}</li>
					<li className="text-base py-2 font-bold">{itemETC.job2Description}</li>
					<li className="text-base py-2 font-bold">{itemETC.job2Description2}</li>
					<li className="text-base py-2 font-bold">{itemETC.job2Description3}</li>
					<li className="text-base py-2 font-bold">{itemETC.job2Description4}</li>
					<li className="text-base py-2 font-bold">{itemETC.job2Description5}</li>
				</ul>

				<ul role="list" className="marker:text-sky-400 list-disc space-y-3">
					<h4 className="py-4 text-xl font-bold w-full border-t-2 border-slate-300">{itemETC.job3Title}</h4>
					<p className="py-2 text-base font-bold text-slate-400 underline">진행 기간 : {itemETC.job3Period}</p>
					<p className="py-2 text-base font-bold underline">사용 Skill : {itemETC.job3Skill}</p>
					<li className="text-base py-2 font-bold">{itemETC.job3Description}</li>
					<li className="text-base py-2 font-bold">{itemETC.job3Description2}</li>
				</ul>
			</div>
		</section>
		))}
		</section>
	)
}