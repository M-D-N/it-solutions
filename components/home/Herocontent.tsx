import styles from "./Hero.module.css";

export default function Herocontent(){
    return (
        <div className={"container flex flex-col items-start justify-end " + styles.headerHeroContent}>
            <h3 className="text-5xl font-bold text-white w-[47%]">Developing IT solutions to scale up your business</h3>
            <a className="text-white font-light" href="#!">Estimate project</a>
        </div>
    );
}