'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeButton() {
	const { systemTheme ,theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const currentTheme = theme === "system" ? systemTheme : theme

	return (
		<div className="w-10 h-10 fixed right-6 bottom-6">
			{currentTheme === "dark" ? (
				<FontAwesomeIcon
            	icon={faSun}
            	onClick={() => {setTheme("light")}}
            	className="text-2xl m-3 cursor-pointer"
          		/>
			) : (
				<FontAwesomeIcon
            	icon={faMoon}
            	onClick={() => {setTheme("dark")}}
            	className="text-2xl m-3 cursor-pointer"
          		/>
			)}
		</div>
	)
}