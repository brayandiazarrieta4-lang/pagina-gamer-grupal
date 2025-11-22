import Link from 'next/link'
import {RiNextjsFill} from 'react-icons/ri'
import { VscAccount } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return(
        <nav className='top-0 w-full flex items-center py-4 px-10 bg-linear-to-br from-purple-900 via-transparent to-purple-900'>
            <>
            <Link href="/" className='flex items-center transition duration-300 hover:scale-110 text-purple-500 '>
                <RiNextjsFill className='flex items-end w-10 h-10'></RiNextjsFill> Gaming Store
            </Link>
            <ul className='flex ml-auto items-start gap-10 text-ms'>
                <Link href='/games' className='duration-300 hover:scale-110 text-purple-500 hover:text-purple transition-colors'> Juegos
                </Link>

                 <Link href='/cart' className='duration-300 hover:scale-110 text-purple-500 hover:text-purple transition-colors'> <FaCartShopping className='flex items-end pl-1 w-6 h-6'/>
                </Link>

                <Link href='/about' className='duration-300 hover:scale-110 text-purple-500 hover:text-purple transition-colors'> About
                </Link>

                <Link href='/dashboard' className='flex items-center transition duration-300 hover:scale-110 text-purple-500'> Cuenta <VscAccount className='flex items-end pl-1 w-6 h-6'/>
                </Link>
        
            </ul>
            </>
        </nav>
    )
}

export default Navbar
