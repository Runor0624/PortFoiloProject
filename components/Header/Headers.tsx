import Link from "next/link"

// Header

export default function Headers () {
	return (
		<>
			<header className="w-full h-14 border-b-2 border-black flex flex-row justify-between mb-2 dark:border-slate-300">
				<Link href="/">
					<h1 className="m-2 font-bold text-2xl dark:text-white">PortFoilo</h1>
				</Link>
				<section className="grid grid-cols-4 gap-2">
					<p className="text-center text-base font-bold text-black dark:text-white"><a href="#skill">Skill</a></p>
					<p className="text-center text-base font-bold text-black dark:text-white"><a href="#career">Career</a></p>
					<p className="text-center text-base font-bold text-black dark:text-white"><a href='#project'>Project</a></p>
				</section>
			</header>
		</>
	)
}