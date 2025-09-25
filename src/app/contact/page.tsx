import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - Mella Mental Health',
  description: 'Get in touch with our mental health professionals. Contact Mella for appointments, consultations, and support.',
  keywords: 'contact, mental health, appointments, consultation, support, therapy',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}