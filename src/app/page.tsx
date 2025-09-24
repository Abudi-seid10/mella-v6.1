import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChoose from '@/components/sections/WhyChoose';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';
import LazySection from '@/components/ui/LazySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" role="main" aria-label="Main content">
        <SectionErrorBoundary sectionName="Hero">
          <Hero />
        </SectionErrorBoundary>
        <LazySection>
          <SectionErrorBoundary sectionName="Services">
            <Services />
          </SectionErrorBoundary>
        </LazySection>
        <LazySection>
          <SectionErrorBoundary sectionName="Why Choose Us">
            <WhyChoose />
          </SectionErrorBoundary>
        </LazySection>
        <LazySection>
          <SectionErrorBoundary sectionName="Testimonials">
            <Testimonials />
          </SectionErrorBoundary>
        </LazySection>
        <LazySection>
          <SectionErrorBoundary sectionName="Call to Action">
            <CTA />
          </SectionErrorBoundary>
        </LazySection>
      </main>
      <Footer />
    </div>
  );
}
