import Link from "next/link"

// Error Page 

export default function NotFound () {
	return (
		<section className="w-2/3 border border-black rounded-md flex flex-col justify-center m-auto lg: my-32">
			<h4 className="text-center font-bold text-6xl text-red-600 py-10">Error Page</h4>

			<p className="text-center font-bold py-10">당신은 없거나 권한이 부족한 페이지에 접근했습니다.</p>
			<Link href='/' className="text-center text-base font-bold cursor-pointer my-2">
				메인 페이지로 돌아가기
			</Link>
		</section>
	)
}