"use client";

import styles from "./Footer.module.css";
import head from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return (
        <footer className="z-1 container">
            <div className={"flex justify-between items-start " + styles.footerTop}>
                <div className={"flex flex-col justify-center items-start gap-20 " + styles.footerTopLeft}>
                    <Link href="/">
                        <Image src="/footerLogo.svg" alt="Logo" width={40} height={40} />
                    </Link>
                    <div className="flex flex-col justify-center items-start gap-10">
                        <a className="text-[#2E2BD0] text-[24px] font-normal leading-[150%] underline" href="mailto: itsupportgroup@gmail.com">itsupportgroup@gmail.com</a>
                        <div className="flex justify-start items-center gap-2">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/Icon_1.svg" alt="socials" width={50} height={50} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/Icon_1-1.svg" alt="socials" width={50} height={50} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/Icon_1-2.svg" alt="socials" width={50} height={50} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/Icon_1-3.svg" alt="socials" width={50} height={50} />
                            </a>
                        </div>
                        <Link className={"flex items-center gap-5 " + head.headerContact} href="/contact">
                            <span>CONTACT US</span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 22H3.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M18.5 4L5 17.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M19 13.77V3.5H8.73" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className={"gap-50 flex justify-between items-start " + styles.footerTopRight}>
                    <div className={"flex flex-col justify-start items-start gap-7 " + styles.footerTopRightItem}>
                        <p>Our offices</p>
                        <ul className="flex flex-col justify-start items-start gap-1.5">
                            <p>In Minsk</p>
                            <li><a href="tel: +375296751222">+ 375 (29) 675-12-22</a></li>
                            <li><a href="map">44 Karl Liebknecht Street, floor 5, office 522</a></li>
                        </ul>
                        <ul className="flex flex-col justify-start items-start gap-1.5">
                            <p>In Vilnius</p>
                            <li><a href="tel: +3705265428028">+370 (52) 654-280-28</a></li>
                            <li><a href="map">44 Karl Liebknecht Street, floor 5, office 522</a></li>
                        </ul>
                    </div>
                    <div className={"flex flex-col justify-start items-start gap-7 " + styles.footerTopRightItem}>
                        <p>services</p>
                        <ul className="flex flex-col justify-start items-start gap-7.5">
                            <li><Link className="text-[#2E2BD0]" href="/technical">Technical Support</Link></li>
                            <li><Link className="text-[#2E2BD0]" href="/frontend">Frontend Development</Link></li>
                            <li><Link className="text-[#2E2BD0]" href="/backend">Backend Development</Link></li>
                            <li><Link className="text-[#2E2BD0]" href="/mobile">Mobile app development</Link></li>
                            <li><Link className="text-[#2E2BD0]" href="/design">UI/UX Design</Link></li>
                            <li><Link className="text-[#2E2BD0]" href="/software">Software Development</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"flex justify-between items-center " + styles.footerBottom}>
                <p>Development by IT Support Group.</p>
                <p>Data Privacy.</p>
                <p>© 2023 IT Support Group</p>
            </div>
        </footer>
    );
}