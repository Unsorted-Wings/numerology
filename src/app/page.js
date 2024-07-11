"use client";

import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import PurchaseParallax from '@/components/PurchaseParallax';
import CourseContent from '@/components/CourseContent';
import MyStory from '@/components/MyStory';
import VideosSection from '@/components/VideosSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Numerologist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <AboutUs />
      <VideosSection />
      <CourseContent />
      <ParallaxSection />
      <Services />
      <Testimonials />
      <PurchaseParallax />
      <MyStory />
      <ContactUs />
      <Footer />
    </div>
  );
}
