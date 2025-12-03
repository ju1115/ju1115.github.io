import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import Work from '@/components/home/Work';

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <About />
      <Work />
      {/* Experience */}
      {/* Contact */}
    </main>
  );
}
