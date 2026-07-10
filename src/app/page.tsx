import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Privacy from "@/components/Privacy/PrivacySection";

import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brosbrain - Home",
  description: "Brosbrain is a leading software development company that specializes in delivering innovative and high-quality solutions to clients worldwide. Our team of experienced developers, designers, and project managers work collaboratively to create custom software applications, web platforms, and mobile apps that meet the unique needs of our clients. We are committed to providing exceptional service, leveraging the latest technologies, and ensuring the success of every project we undertake.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
      {/* <Privacy /> */}
    </>
  );
}
