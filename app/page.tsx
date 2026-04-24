// import Image from "next/image";
import Goals from "@/components/home/Goals";
import Hero from "@/components/home/Hero";
import Herocontent from "@/components/home/Herocontent";
import How from "@/components/home/How";
import Why from "@/components/home/Why";
import Tech from "@/components/home/Tech";
import Industries from "@/components/home/Industries";
import Getintouch from "@/components/home/Getintouch";

export default function Home() {
  return (
    <section>
      <Hero />
      <Herocontent />
      <Goals />
      <Why />
      <How />
      <Tech />
      <Industries />
      <Getintouch />
    </section>
  );
}
