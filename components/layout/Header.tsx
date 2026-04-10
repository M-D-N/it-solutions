"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header(){
    return (
        <header className={"w-full flex items-center justify-center flex-col " + styles.header}>
            <nav className={"container flex items-center justify-between py-6 z-1 " + styles.headerNav} >
                <Link href="/">
                    <Image 
                        className="scale-110"
                        src="/logo.png"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <ul className="flex items-center gap-10">
                    <li>
                        <Link className="text-white" href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link className="text-white" href="/services">OUR SERVICES</Link>
                    </li>
                    <li>
                        <Link className="text-white" href="/jobs">JOB OPENINGS</Link>
                    </li>
                    <li className={styles.headerLangContainer}>
                        <button className="flex items-center gap-2 cursor-pointer">
                            <span className="text-white">EN</span>
                            <span className={styles.headerLang}>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 0.75L3.69167 3.68333L6.63333 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                    </li>
                    <li>
                        <Link className={"flex items-center gap-5 " + styles.headerContact} href="/contact">
                            <span>CONTACT US</span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 22H3.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M18.5 4L5 17.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M19 13.77V3.5H8.73" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}