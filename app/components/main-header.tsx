import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image
          src={logoImage.src}
          alt="비건 음식 플레이트 이미지"
          width={50}
          height={50}
        />
        veggie meal
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
