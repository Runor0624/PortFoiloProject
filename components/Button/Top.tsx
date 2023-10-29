// Top Button 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Top () {
	return (
		<section className="w-10 h-10 fixed right-6 bottom-20">
			<FontAwesomeIcon
            	icon={faArrowUp}
            	className="text-2xl text-blue-500 m-2 cursor-pointer"
          	/>
		</section>
	)
}