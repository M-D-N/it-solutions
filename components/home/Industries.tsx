import Image from "next/image";

export default function Industries() {

    const data = [
        {
            icon: './industr1.svg',
            name: 'Logistics',
            description: 'Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.'
        },
        {
            icon: './industr2.svg',
            name: 'E-commerce',
            description: 'Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.'
        },
        {
            icon: './industr3.svg',
            name: 'CRM systems',
            description: 'Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.'
        }
    ]

    return(
        <section className="container py-25 flex flex-col items-start justify-start gap-25">
            <h3 className="text-[#2F353F] text-[60px] font-normal">Industries</h3>
            <ul className="flex justify-start items-start gap-25 w-full">
                {data.map((item, index) => (
                    <li className="flex flex-col items-start justify-start gap-10 w-full" key={index}>
                        <Image src={item.icon} alt={item.name} width={100} height={100} />
                        <h4 className="text-[40px] font-normal text-[#2F353F] leading-[150%] border-b border-[#2F353F] pb-10 w-full">{item.name}</h4>
                        <p className="text-[24px] font-normal text-[#2F353FB2] leading-[150%]">{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}