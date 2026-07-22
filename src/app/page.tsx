import { Hero } from "@/components/home/Hero";
import { DeliveryProcess } from "@/components/home/DeliveryProcess";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Expertise } from "@/components/home/Expertise";
import { TeamSection } from "@/components/home/TeamSection";
import { WhyUs } from "@/components/home/WhyUs";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <DeliveryProcess />
      <Services />
      <FeaturedProjects />
      <ProcessSteps />
      <Expertise />
      <TeamSection />
      <WhyUs />
      <ContactCta />
    </>
  );
}
