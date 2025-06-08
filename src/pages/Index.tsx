import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MenuSection } from "@/components/MenuSection";
import { DrinksSection } from "@/components/DrinksSection";
import { ReservationsSection } from "@/components/ReservationsSection";
import { PrivateDiningSection } from "@/components/PrivateDiningSection";
import { ContactSection } from "@/components/ContactSection";
import { VouchersSection } from "@/components/VouchersSection";
import { WhatsHappeningSection } from "@/components/WhatsHappeningSection";
import { CareersSection } from "@/components/CareersSection";
import { SubscribeSection } from "@/components/SubscribeSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <DrinksSection />
      <ReservationsSection />
      <PrivateDiningSection />
      <ContactSection />
      <VouchersSection />
      <WhatsHappeningSection />
      <CareersSection />
      <SubscribeSection />
    </main>
  );
};

export default Index;