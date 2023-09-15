import {HiArrowSmRight} from 'react-icons/hi'

interface ButtonProps {
    content: string
    variant: string
    arrow?: string
    border?: boolean
}
export const Button = ({content, arrow, border, variant}: ButtonProps) => {
    if (variant == "white") {
        const after = "after:duration-300 after:content-[''] after:absolute after:-right-3 hover:after:-right-0 after:-top-3 hover:after:-top-0 after:border-[var(--mainWhite)] hover:after:border-[var(--mainWhite)] after:border-[1px] after:border-solid after:w-full after:h-full"
        return (
            <button className={`bg-[var(--mainWhite)] hover:bg-[var(--mainWhite)] text-[var(--mainBlack)] font-bold w-52 h-16 flex justify-center items-center relative duration-300 ${border == undefined && after}`}>
        {content}{arrow  == undefined && <HiArrowSmRight className={`ml-1 text-xl text-[var(--mainRed)]`} />}
        </button>
  )
} else if (variant == "red") {
    const after = "after:duration-300 after:content-[''] after:absolute after:-right-3 hover:after:-right-0 after:-top-3 hover:after:-top-0 after:border-[var(--mainRed)] after:border-[1px] after:border-solid after:w-full after:h-full"
    return (
        <button className={`bg-[var(--mainRed)] text-[var(--mainWhite)] font-bold w-52 h-16 flex justify-center items-center relative duration-300 ${border == undefined && after}`}>
    {content}{arrow  == undefined && <HiArrowSmRight className={`ml-1 text-xl text-[var(--mainWhite)]`} />}
    </button>
)
} else if (variant == "gray") {
    const after = "after:duration-300 after:content-[''] after:absolute after:-right-3 hover:after:-right-0 after:-top-3 hover:after:-top-0 after:border-[var(--mainGray)] hover:after:border-[var(--mainRed)] after:border-[1px] after:border-solid after:w-full after:h-full"
    return (
        <button className={`bg-[var(--mainGray)] hover:bg-[var(--mainRed)] text-[var(--mainWhite)] font-bold w-52 h-16 flex justify-center items-center relative duration-300 ${border == undefined && after}`}>
    {content}{arrow  == undefined && <HiArrowSmRight className={`ml-1 text-xl text-[var(--mainWhite)]`} />}
    </button>
)
}
}