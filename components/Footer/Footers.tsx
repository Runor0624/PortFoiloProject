//Footer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe , faEnvelope, faCompass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footers () {
	return (
			<footer className="w-full h-10 border-black border-t-2 my-2 dark:border-slate-300">
				<section className="flex flex-row justify-center">
						<div className="items-center px-10 py-2">
                			<FontAwesomeIcon icon={faEnvelope} className="text-3xl font-bold px-2" />
                			<p className="text-center text-xl font-bold py-4">Mail</p>
            			</div>

            			<div className="items-center px-10 py-2">
						<Link href="https://velog.io/@hansqc" target="_blank">
                			<FontAwesomeIcon icon={faGlobe} className="text-3xl font-bold px-2" />
                			<p className="text-center text-xl font-bold py-4">Blog</p>
						</Link>
            			</div>

            			<div className="items-center px-10 py-2">
						<Link href="https://github.com/Runor0624" target="_blank">
                			<FontAwesomeIcon icon={faCompass} className="text-3xl font-bold px-2" />
                			<p className="text-center text-xl font-bold py-4">GitHub</p>
						</Link>
            			</div>
				</section>
				<p className="text-center text-sm text-red-600 font-bold py-2">본 페이지는 영리의 목적이 아닌 개인의 학습과 포트폴리오 목적임을 밝힘.</p>
			</footer>
	)
}