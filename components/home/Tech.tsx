import Image from "next/image";
import styles from './Tech.module.css';
export default function Tech() {
    const techsTop = [
        {
            name: 'Used technologies',
            description: 'Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.'
        }
    ];
    const techs = [
        {
            name: 'Title of the first technology',
            icon: './js.svg',
            className: `${styles.techItemActive}`
        },
        {
            name: 'Second technology description',
            icon: 'js.svg'
        },
        {
            name: 'Third technology description',
            icon: 'js.svg'
        },
        {
            name: 'Forth technology description',
            icon: 'js.svg'
        },
        {
            name: 'Fifth technology description',
            icon: 'js.svg'
        },
        {
            name: 'Sixth technology description',
            icon: 'js.svg'
        },
        {
            name: 'Seventh technology description',
            icon: 'js.svg'
        },
        {
            name: 'Eighth technology description',
            icon: 'js.svg'
        }
    ];
    return(
        <section className="container py-25 flex flex-col items-start justify-start gap-25">
            <h3 className="text-[#2F353F] text-[60px] font-normal">{techsTop[0].name}</h3>
            <p className="text-[24px] font-normal leading-[150%] text-[#2F353FB2] w-[45%] ml-auto mr-[20%]">{techsTop[0].description}</p>
            <div className={"flex justify-center items-start gap-7 " + styles.techContainer}>
                {techs.map((item, index) => (
                    <div className={styles.techItem + " " + item.className} key={index}>
                        <p>{item.name}</p>
                        <Image src={item.icon} alt={item.icon} width={80} height={80} />
                    </div>
                ))}
            </div>
        </section>
    );
}