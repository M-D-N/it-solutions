import Image from "next/image";
import styles from "./Goals.module.css";


export default function Goals(){
    return (
        <section className={"container flex flex-col items-start justify-start gap-25 " + styles.goals}>
            <h2 className="text-[60px] font-normal">What are our goals?</h2>
            <div className="w-full flex items-start justify-start flex-col">
                <div className={"w-full flex justify-center items-center " + styles.goalsItem}> 
                    <div className="flex flex-col items-start justify-between gap-5 w-full h-125">
                        <span>01</span>
                        <div className="flex flex-col items-start justify-start gap-6">
                            <h3>Title of the third goal</h3>
                            <p>A small text describing one of the goals in two lines.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5 w-full h-125">
                        <span>02</span>
                        <div className="flex flex-col items-start justify-start gap-6">
                            <h3>Title of the third goal</h3>
                            <p>A small text describing one of the goals in two lines.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5 w-full h-125">
                        <Image src="/goal1.jpg" alt="Goal1" fill objectFit="cover" />
                    </div>
                </div>
                <div className={"w-full flex justify-center items-center " + styles.goalsItem}>
                    <div className="flex flex-col items-start justify-start gap-5 w-full h-125">
                        <Image src="/goal2.jpg" alt="Goal1" fill objectFit="cover" />
                    </div> 
                    <div className="flex flex-col items-start justify-between gap-5 w-full h-125">
                        <span>03</span>
                        <div className="flex flex-col items-start justify-start gap-6">
                            <h3>Title of the third goal</h3>
                            <p>A small text describing one of the goals in two lines.</p>
                        </div>
                    </div>
                </div>
                <div className={"w-full flex justify-center items-center " + styles.goalsItem}> 
                    <div className="flex flex-col items-start justify-between gap-5 w-[60%] h-125">
                        <span>04</span>
                        <div className="flex flex-col items-start justify-start gap-6">
                            <h3>Title of the third goal</h3>
                            <p>A small text describing one of the goals in two lines.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5 w-[40%] h-125">
                        <Image src="/goal3.jpg" alt="Goal3" fill objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}