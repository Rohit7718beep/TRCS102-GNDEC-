function Navbar(){
    return(
        <>
        <nav className="bg-sky-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">My Website</h1>

      <ul className="flex gap-6 text-lg">
        <li>
          <a href="#" className="hover:text-gray-200 transition duration-200">
            Home
          </a>
        </li>

        <li>
          <a href="$" className="hover:text-gray-200 transition duration-200">
            About
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-gray-200 transition duration-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
        </>
    )
}


export default Navbar