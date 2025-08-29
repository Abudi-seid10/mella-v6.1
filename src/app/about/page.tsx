import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import Team from '@/components/sections/Team';
import Mission from '@/components/sections/Mission';

export const metadata: Metadata = {
  title: 'About Us - Mella Counseling Center | Professional Mental Health Team',
  description: 'Meet our experienced team of licensed mental health professionals at Mella Counseling Center. Learn about our mission, values, and commitment to providing compassionate care in Ethiopia.',
  keywords: [
    'about mella counseling',
    'mental health team',
    'licensed therapists Ethiopia',
    'counseling professionals',
    'mental health specialists',
    'therapy team Addis Ababa',
    'experienced counselors',
    'mental wellness experts',
  ],
  openGraph: {
    title: 'About Our Mental Health Team - Mella Counseling Center',
    description: 'Meet our dedicated team of licensed mental health professionals committed to your wellness journey in Ethiopia.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mella Counseling Center Team',
    description: 'Professional mental health care team dedicated to your wellness in Ethiopia.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <AboutHero />
        <Mission />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
