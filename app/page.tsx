// import Image from "next/image";
import Goals from "@/components/home/Goals";
import Hero from "@/components/home/Hero";
import Herocontent from "@/components/home/Herocontent";

export default function Home() {
  return (
    <section>
      <Hero />
      <Herocontent />
      <Goals />
    </section>
  );
}
