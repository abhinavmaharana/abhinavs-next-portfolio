import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 px-8 mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
            <img className="w-44 object-contain cursor-pointer" src="/images/logo.png" alt="Abhinav Maharana" />
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:inline-flex items-center space-x-5 text-xl font-[GilroyRegular]">
            <h3>About</h3>
            <h3>Skills</h3>
            <h3>Projects</h3>
            <h3>Experience</h3>
            <h3>Certification</h3>
        </div>
        <div>
            <h3 className="bg-[#6F5DE0] px-10 py-1 rounded-full text-center md:text-xl font-[GilroyRegular]">Say Hi</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
