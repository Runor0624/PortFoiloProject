import { ETC } from "@/data/ETC"
import Image from "next/image"
// Career Component

export default function Career () {
	return (
		<>

		{ETC.map((itemETC) => (
		<section className="flex flex-row justify-center items-center w-2/3" key={itemETC.id}>
			<div className="m-4">
				<Image src={itemETC.image} width={100} height={100} alt="회사 이미지" />
				<p>회사명</p>
			</div>

			<div className="m-4 pl-10">
				<p>어떤일을 했는지?</p>

				<p>어떤일을 했는지?</p>
				<p>어떤일을 했는지?</p>
				<p>어떤일을 했는지?</p>
				<p>어떤일을 했는지?</p>
			</div>
		</section>
		))}
		</>
	)
}