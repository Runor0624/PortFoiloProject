import { ETC } from "@/data/ETC"
import Image from "next/image"
// Career Component

export default function Career () {
	return (
		<section>
        <h1 className="text-center text-4xl font-bold py-4">Career</h1>

		{ETC.map((itemETC) => (
		<section className="grid lg:grid-cols-3 grid-cols-1 justify-items-center w-full m-auto lg:ml-32 ml-2" key={itemETC.id}>
			<div className="m-4 pr-4">
				<Image src={itemETC.image} width={140} height={100} alt="회사 이미지" className="ml-4" />
				<h3 className="text-xl font-bold py-2">회사명 : {itemETC.title}</h3>
				<p className="text-base font-bold py-2">재직기간 : {itemETC.period}</p>
				<p className="text-base font-bold py-2">회사 소재지: {itemETC.location}</p>
			</div>

			<div className="m-4">
				<p>어떤일을 했는지?</p>

				<p>어떤일을 했는지?</p>
				<p>어떤일을 했는지?</p>
				<p>어떤일을 했는지?</p>
				<p>어떤일을 했는지?</p>
			</div>
		</section>
		))}
		</section>
	)
}