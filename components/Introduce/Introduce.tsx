// 자기소개 컴포넌트
'use client'
import Image from "next/image"
import { datas } from "@/data/data"
import Buttons from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Introduce() {
    const ClickResume = () => {
      alert('이 부분은 추후 추가 예정입니다.')
    }

    return (
        <section>
          {datas.map((item) => (
        <section className="flex flex-row justify-center w-max m-auto my-4" key={item.id}>
          <section>
            <h4 className="text-xl lg:text-3xl font-bold py-2">{item.description1}</h4>
            <p className="text-sm lg:text-base font-500 py-2">{item.description2}</p>
            <p className="text-sm lg:text-base font-500 py-2">{item.description3}</p>
            <p className="text-sm lg:text-base font-500 py-2">{item.description4}</p>
                <Buttons onClick={ClickResume}><FontAwesomeIcon icon={faDownload} /> 이력서 다운로드</Buttons>
          </section>

          <section>
            <Image src={item.image} width={220} height={150} alt="이력서 이미지" className="mx-2 lg:mx-6" />
          </section>
        </section>
        ))}
        </section>
    )
}