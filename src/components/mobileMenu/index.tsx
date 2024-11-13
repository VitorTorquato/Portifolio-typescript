import { Link } from "react-router-dom";

interface MobileMenuProps{
    menuOpen:boolean;
    closeMenu:() => void;
}

export function MobileMenu({menuOpen,closeMenu} : MobileMenuProps){


    return(
        <div className={`absolute right-0 w-full -top-6 overflow-hidden bg-slate-600 transition-all duration-500 ease-in-out ${menuOpen ? 'h-screen' : 'h-0'}`}
        >
            <nav className="flex h-screen flex-col items-center justify-center">
                    <ul className="w-full h-96 flex flex-col items-center justify-evenly text-slate-100 text-lg font-medium">
                        <li
                        onClick={closeMenu}
                         className="hover:scale-105 transition-all duration-75"><Link to='/aboutme'>About</Link></li>
                        <li
                        onClick={closeMenu}
                         className="hover:scale-105 transition-all duration-75"><Link to='/skills'>Skills</Link></li>
                        <li
                        onClick={closeMenu}
                         className="hover:scale-105 transition-all duration-75"><Link to='projects'>Projects</Link></li>
                    </ul>
                </nav>
        </div>
    )
}