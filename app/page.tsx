import Hero from "@/components/Hero";
import Encryption from "@/components/Encryption";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
        <main className="w-full h-full">
          <div className="flex flex-col gap-20">
            <Hero/>
            <Skills/>
            <Encryption/>
            <Projects/>
          </div>
        </main>
  );
}
