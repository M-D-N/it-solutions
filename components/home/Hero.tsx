import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.headerHero}>
            <Image 
                className={"absolute top-0 left-0 w-full h-dvh object-cover -z-1 " + styles.headerHeroImage} 
                src="/hero.png"
                alt="hero"
                width={800}
                height={600}
            />
        </div>
    );
}