// import { Link } from "react-router-dom";
import mainlogo from '../../assets/mainlogo.png'

export default function Navbar() {
    return (
        <div className="w-screen h-20 py-2 px-6 bg-black flex items-center justify-between text-black">
            <div className="flex items-center justify-center w-2/5 ">
                {/* <p className="text-white uppercase tracking-widest font-bold mr-64">LOGO</p> */}
                <img src={mainlogo} alt="Logo" width={123} className=' mr-60 cursor-pointer' />
            </div>
            <div className="w-full">
                <ul className="flex items-center justify-end gap-16 w-full font-semibold text-gray-600">
                    <li className="text-white">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Discover</a>
                    </li>
                    <li>
                        <a href="/">Special Deals</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li className="text-white">
                        <a href="/signIn">Sign In</a>
                    </li>
                    <li className="text-white font-medium rounded-md w-32 text-center bg-[#be7c04] py-2 px-4 shadow-black">
                        <a href="/">Sign Up</a>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    );
}
