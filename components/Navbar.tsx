import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "@/components/Button"
import Image from "next/image"

const Navbar = () => {
  return (
  <nav className="border-2 bg-purple-500 text-white flex space-x-2 max-conatiner padding-container relative z-30 py-5  ">
    <Link href="/" className="px-5">
    <span className="font-bold text-white">Hi</span>
    <span className="font-bold text-green-600">link</span>   
    </Link>

    <ul className="hidden h-full gap-12 lg:flex lg:justify-items-end">
{NAV_LINKS.map((link)=> (
    <Link href={link.href} key={link.key}
    className="regular-16 text-gray-50 flex justify-items-end cursor-pointer pb-1.5 transition-all hover:font-bold">
    {link.label}</Link>
))}
    </ul>

<div className="lg:flex hidden">
    <Button 
    type="button"
    title="Login"
    icon="/user.svg"
    varient="bg-black"

    />
</div>

<Image src="menu.svg"
alt="menu"
width={32}
height={32}
className="inline-block cursor-pointer lg:hidden"/>
  </nav>
  )
}

export default Navbar
