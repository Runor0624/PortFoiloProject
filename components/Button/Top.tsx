// Top Button 
'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Top () {
	const [isShowBtn, setIsShowBtn] = useState(false)

    const scrolTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setIsShowBtn(true)
            } else {
                setIsShowBtn(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

	return (
		<section className="w-10 h-10 fixed right-6 bottom-20">
			<FontAwesomeIcon
            	icon={faArrowUp}
				onClick={scrolTop}
            	className="text-2xl text-blue-500 m-2 cursor-pointer"
          	/>
		</section>
	)
}