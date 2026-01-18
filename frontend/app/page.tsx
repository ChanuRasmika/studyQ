import TopNav from './components/TopNavigation';
import Hero from './components/Hero';
import WhyStudyQ from './components/WhyStudyQ';
import Solution from './components/Solution';


export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav/>
      <Hero />
      <WhyStudyQ />
      <Solution />
    </main>
  );
}
