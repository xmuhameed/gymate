

export const H2 = ({children, larg}: any) => {
  return (
    <h2 className={`${larg ? "text-3xl" : "text-2xl"} w-fit font-bold relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:bg-[var(--mainRed)] after:h-1 after:w-12 hover:after:w-full after:duration-300`}>
        {children}
    </h2>
  )
}
