import Link from 'next/link';
import '../../stylesheets/navbar.scss';
import LogoMini from "../../../public/assets/img/LogoMini.svg"
import Profil from "../../../public/assets/img/profil.png"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar">
           <ul><li><Link href="/">
           <Image
            priority
            src={LogoMini}
            alt="Logo Mini"
            className="LogoMini"
            />
           
           </Link></li></ul>
           <ul>
            <li>Jeux</li>
            <li>l'équipe JBH</li>
            <li>Contact</li>
            <li>à propos</li>
           </ul>
           <ul>
            <li>Comment ça va <span>AYMAN</span> ?</li>
            <Image
            priority
            src={Profil}
            alt="Profil"
            className="Profil"
            />

           </ul>
        </div>
    );
}

export default Navbar;
