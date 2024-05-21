import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";

const MainHeader: React.FC = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src={logoImage.src}
          alt="비건 음식 플레이트 이미지"
          width={50}
          height={50}
        />
        veggie meal
      </Link>

      <nav>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/community">Veggies Community</Link>
        </li>
      </nav>
    </header>
  );
};
export default MainHeader;
