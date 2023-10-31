// 연락처에 대해 소개하는 컴포넌트

'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe , faCalendarDay, faEnvelope, faCompass } from "@fortawesome/free-solid-svg-icons";

export default function Contact () {
    return (
        <section className="w-full my-4 lg:my-12">
        <h1 className="text-center text-4xl font-bold py-4">연락처</h1>

        <section className="grid grid-cols-4 justify-items-center my-4 lg:my-8">
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCalendarDay} className="text-3xl font-bold" />
                <p className="text-center text-xl font-bold py-4">94.06.21</p>
            </div>

            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl font-bold" />
                <p className="text-center text-xl font-bold py-4">Mail</p>
            </div>

            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faGlobe} className="text-3xl font-bold" />
                <p className="text-center text-xl font-bold py-4">Blog</p>
            </div>

            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCompass} className="text-3xl font-bold" />
                <p className="text-center text-xl font-bold py-4">GitHub</p>
            </div>
        </section>
        </section>
    )
}