//Footer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCompass, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footers () {
	return (
		<>
			<footer className="w-full h-10 border-black border-t-2 my-2 dark:border-slate-300">
				<section className="flex flex-row justify-center m-4">
					<FontAwesomeIcon icon={faEnvelope} className="w-8 text-sm mx-4 cursor-pointer" /> {/* Mail ADD 예정 */}
					<FontAwesomeIcon icon={faCompass} className="w-8 text-sm mx-4 cursor-pointer" /> {/* Blog ADD 예정 */}
					<FontAwesomeIcon icon={faGlobe} className="w-8 text-sm mx-4 cursor-pointer" /> {/* GitHub ADD 예정 */}
				</section>
				<p className="text-center text-sm text-red-600 font-bold">본 페이지는 영리의 목적이 아닌 개인의 학습과 포트폴리오 목적임을 밝힘.</p>
			</footer>
		</>
	)
}