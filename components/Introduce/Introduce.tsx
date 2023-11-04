// 자기소개 컴포넌트
import Image from "next/image"
import { datas } from "@/data/data"
import Buttons from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Introduce() {
    return (
        <section>
          {datas.map((item) => (
        <section className="grid grid-cols-2 justify-items-center" key={item.id}>
          <section className="lg: pl-2">
            <h4 className="text-3xl font-bold py-2">{item.description1}</h4>
            <p>{item.description2}</p>
            <p>{item.description3}</p>
                <Buttons><FontAwesomeIcon icon={faDownload} /> 이력서 다운로드</Buttons>
          </section>

          <section>
            <Image src={item.image} width={220} height={150} alt="이력서 이미지" className="mr-4 lg:mr-6" />
          </section>
        </section>
        ))}
        </section>
    )
}