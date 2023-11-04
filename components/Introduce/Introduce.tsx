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
        <section className="grid grid-cols-2 justify-items-center" key={item.id}>
          <section className="lg: pl-2">
            <h4 className="text-xl lg:text-3xl font-bold py-2">{item.description1}</h4>
            <p className="text-base lg:text-2xl font-bold py-2">{item.description2}</p>
            <p className="text-base lg:text-2xl font-bold py-2">{item.description3}</p>
                <Buttons onClick={ClickResume}><FontAwesomeIcon icon={faDownload} /> 이력서 다운로드</Buttons>
          </section>

          <section>
            <Image src={item.image} width={220} height={150} alt="이력서 이미지" className="mr-2 lg:mr-4" />
          </section>
        </section>
        ))}
        </section>
    )
}