import FAQ from "@/components/home/FAQ";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import Management from "@/components/home/Management";
import PricingPlans from "@/components/home/PricingPlans";
import Benefits from "@/components/home/Benefits";
import Modal from "@/components/home/Modal";

export default function Home() {
  return (
    <>
      {/* <Modal /> */}
      <Hero />
      <Benefits />
      <Management />
      <PricingPlans />
      <Feedback />
      <FAQ />
    </>
  );
}
