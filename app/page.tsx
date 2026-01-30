import TopNav from './components/TopNavigation';
import Hero from './components/Hero';
import WhyStudyQ from './components/WhyStudyQ';
import Solution from './components/Solution';
import Features from './components/Features';
import BuiltFor from './components/BuiltFor';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Trust_Credible from './components/Trust_Credible';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav/>
      <Hero />
      <WhyStudyQ />
      <Solution />
      <Features/> 
      <BuiltFor />
      <HowItWorks />
      <Pricing />
      <Trust_Credible />
      <CTA />
      <Footer />
    </main>
  );
}
