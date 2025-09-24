import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import SocialFeeds from '@/components/SocialFeeds';
import StickyBar from '@/components/StickyBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Reviews />
        <SocialFeeds />
        <Contact />
      </main>
      <StickyBar />
    </div>
  );
}
