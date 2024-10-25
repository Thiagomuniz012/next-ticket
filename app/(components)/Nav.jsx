import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/Ticket/novo">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
        <div>
          <p>thiago.muniz012@gmail.com</p>
        </div>
    </nav>
  );
};

export default Nav;
