import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PainSolutions from "@/components/PainSolutions";
import FloatingCalendar from "@/components/FloatingCalendar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PainSolutions />
      </main>
      <FloatingCalendar />
    </>
  );
}
