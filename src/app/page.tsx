"Use Client";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

import ServicesOffered from "@/components/Services-offered";
import Contact from "@/components/Contact";
import Mission from "@/components/Mission";
export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Mission />
      <ServicesOffered/>
      <Contact/>
    </>
  );
}
