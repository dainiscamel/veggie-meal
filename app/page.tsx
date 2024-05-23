import classes from "./page.module.css";
import ImageSlideshow from "./components/images/image-slideshow";
import { usePathname } from "next/navigation";
import NavLink from "./components/nav-link";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.hero}>
          <h1>welcome veggies !</h1>
          <p>Taste & Share your vegan food experience.</p>
          <div className={classes.cta}>
            <NavLink href="/community">Join the Community</NavLink>
            <NavLink href="/meals">Explore Meals</NavLink>
          </div>
        </div>
      </header>
      <main>메인</main>
    </>
  );
}
