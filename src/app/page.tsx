import Link from "next/link";
import "../stylesheets/home.scss";

const Page = () => {
  return (
    <div>
      <h1>Just Beat Hit</h1>
      <Link href="/karakaku" className="start-button">Karakaku</Link>
    </div>
  );
};

export default Page;