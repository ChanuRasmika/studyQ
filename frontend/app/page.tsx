import TopNav from './components/TopNavigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav/>
      <Hero />
      {/* <Features />
      <HowItWorks />
      <CTA />
      <Footer /> */}
    </main>
  );
}
