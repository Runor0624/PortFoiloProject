import Link from "next/link"

// Header

export default function Headers () {
	return (
		<>
			<header className="w-full h-12 flex flex-row justify-between mb-2">
				<Link href="/">
					<h1 className="m-2 font-bold text-2xl">PortFoilo</h1>
				</Link>
				<section className="grid grid-cols-4 gap-2 mr-2">
					<p className="text-center text-base font-bold text-black"><a href="#skill">Skill</a></p>
					<p className="text-center text-base font-bold text-black"><a href="#career">Career</a></p>
					<p className="text-center text-base font-bold text-black"><a href='#project'>Project</a></p>
				</section>
			</header>
		</>
	)
}