import '../Navbar/style.css'
import { IoMenuSharp } from "react-icons/io5";



function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div className="logo">
                    <h1>Banker</h1>
                </div>
                <div className="nav-links">
                    <ul>
                        <IoMenuSharp className='menu-icon' />
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar