import Link from 'next/link'

export const NavLinks = ({active}: {active: boolean}) => {
  return (
    <ul className={`flex flex-col xl:flex-row gap-5 text-black xl:text-[var(--mainWhite)] xl:text-[1.1rem] text-[1.5rem] text-center ${!active && "max-xl:hidden"}`}>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/">Home</Link>
      </li>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/about">About</Link>
      </li>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/gallery/page-1">Gallery</Link>
      </li>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/schedule">Schedule</Link>
      </li>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/blog">Blog</Link>
      </li>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/pricing">Pricing</Link>
      </li>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/clases">Classes</Link>
      </li>
      <li>
        <Link className='hover:text-[var(--mainRed)]' href="/contact">Contact</Link>
      </li>
    </ul>
  )
}
