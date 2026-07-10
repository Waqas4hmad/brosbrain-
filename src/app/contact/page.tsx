import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Brosbrain",
  description: "Brosbrain is a leading software development company that specializes in delivering innovative and high-quality solutions to clients worldwide. Our team of experienced developers, designers, and project managers work collaboratively to create custom software applications, web platforms, and mobile apps that meet the unique needs of our clients. We are committed to providing exceptional service, leveraging the latest technologies, and ensuring the success of every project we undertake.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Let's discuss your project. Binary Scripters will turn your vision into a polished, high-performance digital product your users will love.

."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
