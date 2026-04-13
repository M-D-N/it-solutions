import styles from './Why.module.css';

export default function Why(){
    return(
        <section className='container flex flex-col items-start justify-start gap-25 pt-50 pb-50'>
            <h2 className='text-[60px] text-[#2F353F]'>Why Choose us?</h2>
            <p className='w-[50%] text-[#2F353FB2] text-[24px] leading-[150%]'>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
            <div className={'flex justify-between items-center gap-50 ' + styles.whyContainer}>

                <div className={styles.whyLeft}>
                    <ul className='flex flex-col justify-start items-start gap-25'>
                        <li>
                            <button className={styles.active}>Team</button>
                        </li>
                        <li>
                            <button>Communication</button>
                        </li>
                        <li>
                            <button>Solution</button>
                        </li>
                        <li>
                            <button>Quality</button>
                        </li>
                    </ul>
                </div>
                <div className={styles.whyRight}>
                    <ul>
                        <li className={styles.active + ' ' + styles.whyRightItem}>
                            <h3>Close-knit team</h3>
                            <p>A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines.</p>
                        </li>
                        {/* <li>
                            <h3>Close-knit</h3>
                            <p>A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines.</p>
                        </li>
                        <li>
                            <h3>team</h3>
                            <p>A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines.</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}