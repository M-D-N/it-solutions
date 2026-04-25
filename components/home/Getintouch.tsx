"use client";
// import { use } from "react";
import StyleSheet from "./Getintouch.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Getintouch() {
  const [fileName, setFileName] = useState(
    "Upload file (max file size is 30 MB)",
  );

  return (
    <section className="container py-62.5">
      <div className="py-25 px-30 bg-linear-to-br from-[#2E2BD0] to-[#7876F2] rounded-[70px] flex flex-col justify-start items-start gap-22.5">
        <div className="flex justify-between items-start w-full gap-25">
          <h3 className="text-[#FFFFFF] text-[100px] leading-[130%] font-normal w-[50%]">
            Get in touch with us
          </h3>
          <div className="flex flex-col justify-start items-start gap-12.5 w-[50%]">
            <p className="text-[24px] leading-[150%] text-[#FFFFFFB2] font-normal">
              Simply fill in your Email in our contact form or get in touch with
              us by our email - itsupportgroup@gmail.com - , and one of our
              experts will contact you shortly. This could be the beginning of a
              wonderful collaboration and the easiest way to acquire a
              highly-experienced team.
            </p>
            <a
              className="flex gap-5 border-[#FFFFFF] border rounded-[10px] py-4 px-10 text-[#FFFFFF] text-[20px] leading-[100%] font-normal"
              href="#!"
              download="Download the brief.pdf"
            >
              <span>Download the brief</span>
              <Image
                width={24}
                height={24}
                src="/donload.svg"
                alt="Download Icon"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-start w-full gap-25">
          <form
            action=""
            className={
              "flex w-full justify-between items-start gap-25" +
              " " +
              StyleSheet.form
            }
          >
            <div className="flex flex-col justify-start items-start gap-12.5 w-[50%]">
              <input type="text" placeholder="Enter your Full Name" />
              <input type="email" placeholder="Enter your Email" />
              <input type="number" placeholder="Enter your Phone Number" />
              <button
                className="cursor-pointer flex justify-center items-center gap-5 py-4.25 px-10 bg-[#FFFFFF] text-[#2E2BD0] text-[20px] uppercase rounded-[10px] font-normal"
                type="submit"
              >
                Submit
                <Image
                  src="/submit.svg"
                  width={25}
                  height={25}
                  alt="Submit icon"
                />
              </button>
            </div>
            <div className="flex flex-col justify-start items-start gap-12.5 w-[50%]">
              <textarea
                name="comment"
                id="comment"
                placeholder="Describe your project"
              ></textarea>
              <label
                htmlFor=""
                className={
                  "flex w-full justify-start items-start relative " +
                  StyleSheet.fileInput
                }
              >
                <label
                  htmlFor="file-upload"
                  className={"cursor-pointer " + StyleSheet.fileLabel}
                >
                  {fileName}
                </label>
                <input
                  id="file-upload"
                  className="w-full h-full cursor-pointer hidden"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name ?? "No file choosen")
                  }
                  type="file"
                  placeholder="Upload file (max file size is 30 MB)"
                />
                <Image
                  className="absolute"
                  src="/upload.svg"
                  width={40}
                  height={40}
                  alt="Upload Icon"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
