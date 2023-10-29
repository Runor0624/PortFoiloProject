// DarkMode 적용하기 위한 파일
'use client'
import { ThemeProvider } from "next-themes"

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			{children}
		</ThemeProvider>
	)
}

export default DarkModeProvider