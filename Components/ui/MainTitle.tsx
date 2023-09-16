import Image from "next/image";
import cloud from "../../public/images/who-we-are/title-bg.svg";

interface props {
  content: string
  bg? :string
  height?: number
  width?: number
}

export const MainTitle = ({content, bg, height, width}: props) => {
  return (
    <div className="relative" style={{width: `${width || 250}px`, height: `${width! / 5 || 40}px`}}>
      <span className={`z-10 relative grid place-content-center w-full h-full`}>{content}</span>
    <span className="grid place-content-center">
    <Image
    className={`${bg == "white" && "title-white"} absolute top-0 left-0 z-0`}
    src={cloud}
    alt="cloud"
    height={height || 250}
    width={width || 250}
  />
    </span>
  </div>
  )
}
