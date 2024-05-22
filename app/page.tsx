import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "./components/images/image-slideshow";

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
            <Link href="/community">Join the Veggie Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>메인</main>
    </>
  );
}
