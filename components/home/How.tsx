import styles from './How.module.css';

export default function How(){

    const items = [
        {
            title: "Requirements analysis and statement of work",
            desription: "",
            class: "active"
        },
        {
            title: "Design (if required)",
            desription: "Some words about this step in our work."
        },
        {
            title: "Development, show demo version",
            desription: "Some words about this step in our work."
        },
        {
            title: "Testing, completion",
            desription: "Some words about this step in our work."
        },
        {
            title: "Product launch",
            desription: "Some words about this step in our work."
        },
        {
            title: "Continued technical support",
            desription: "Some words about this step in our work.",
            class: 'last'
        }
    ];
    return(
        <section className="container">
            <h2 className='text-[60px] text-[#2F353F]'>How we work?</h2>
            <div className="flex justify-start items-stretch flex-wrap w-full mt-25">
                {items.map((item, index) => (
                    <div className={`p-12.5 border rounded-[40px] grow border-[#2F353F80] flex flex-col gap-6.25 justify-start items-start basis-1/3 ${item.class}`} key={index}>
                        <h3 className="text-[#2F353F] text-[26px] leading-[150%] font-normal">{item.title}</h3>
                        <p className="text-[#2F353F] text-[24px] leading-[150%] font-normal">{item.desription}</p>
                    </div>
                ))}
            </div>    
            <div className={"flex flex-col items-start justify-end " + styles.howBtn}>
                <a className="text-white font-light" href="#!">Learn more</a>
            </div>
        </section>
    );
}
