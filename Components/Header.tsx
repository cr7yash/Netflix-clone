import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          alt="Netflix icon"
          className="object-contain cursor-pointer"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLinks">Home</li>
          <li className="headerLinks">TV Shows</li>
          <li className="headerLinks">Movies</li>
          <li className="headerLinks">New & Popular</li>
          <li className="headerLinks">My List</li>
        </ul>
      </div>

      <div></div>
    </header>
  )
}

export default Header
