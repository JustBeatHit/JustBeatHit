import "../stylesheets/home.scss";
import Link from "next/link";
import Image from "next/image";
import KaraokeSvg from "../../public/assets/img/icon/Karaoke.svg"
import LogoSvg from "../../public/assets/img/Logo.svg"
import MusicSvg from "../../public/assets/img/icon/music-1.svg"
import QuestionSvg from "../../public/assets/img/icon/question-mark.svg"
import SoonLogo from "../../public/assets/img/SoonLogo.svg"
import Carousel from "./components/Carrousel";
import Navbar from "./components/Navbar";


const Page = () => {
  const carouselImages = [
    "/assets/img/Boat.jpg",
    "/assets/img/Carrousel1.png",
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="header-homepage">
        <div className="header-homepage-text">
          <ul>
            <li>
              <h3>
                <span>Beat the hit</span>
                <span>and beat your friends</span>
              </h3>
            </li>
          </ul>
          <ul>
            <li>accès rapide ·</li>
            <li>
              <Link href="/karakaku">
                
                <button className="start-button">
                <Image
                  priority
                  src={KaraokeSvg}
                  alt="Karaoke svg"
                />
                karakaku</button>
              </Link>
            </li>
            <li>
            <Image 
              priority
              src={SoonLogo}
              alt="Soon Logo"
              className="ComingSoon"
              />
              <Link href="">
                <button className="start-button">
                <Image
                  priority
                  src={QuestionSvg}
                  alt="Question svg"
                />
                  Blind Test</button>
              </Link>
            </li>
            <li>
            <Image 
              priority
              src={SoonLogo}
              alt="Soon Logo"
              className="ComingSoon"
              />
              <Link href="/">
                <button className="start-button">
                <Image
                  priority
                  src={MusicSvg}
                  alt="Music svg"
                />
                  N'oubliez pas les paroles</button>
              </Link>
            </li>
            <div className="">
              <Carousel images={carouselImages} />
            </div>
          </ul>
        </div>
        <Image
          priority
          src={LogoSvg}
          alt="Logo"
          className="Logo"
        />
      </div>
      <div>
        <img src="/assets/img/Boat.jpg" alt="Boat" className="BoatImage"/>
      </div>
      <div className="desc-jbh-homepage">
        <h3>Just Beat Hit propose une variété de <br/> mini-jeux rythmés pour tester vos <br/>réflexes et votre sens du tempo</h3>
      </div>
    </div>
  );
};

export default Page;