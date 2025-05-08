import Image from "next/image";
import className from "./hero.module.css";

function Hero() {
  return (
    <section className={className.hero}>
      <div className={className.image}>
        <Image width={300} height={300} alt="" src={"/images/shiba1.jpg"} />
      </div>
    </section>
  );
}

export default Hero;
