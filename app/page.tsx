import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RevealProvider from '@/components/providers/RevealProvider';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import LearningJourney from '@/components/sections/LearningJourney';
import Building from '@/components/sections/Building';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import AdSlot from '@/components/sections/AdSlot';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <RevealProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <LearningJourney />
        <Building />
        <Services />
        <TechStack />
        <Experience />
        <AdSlot />
        <Contact />
      </main>
      <Footer />
    </RevealProvider>
  );
}
