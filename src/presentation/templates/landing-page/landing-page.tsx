import { CallToAction } from "./sections/call-to-action";
import { HeroSection } from "./sections/hero-section";
import { MadeBySection } from "./sections/made-by-section";
import { SocialNetworkSection } from "./sections/social-network-section";
import { ThemeSection } from "./sections/theme-section";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-6 items-center p-6 w-full max-w-147">
      <HeroSection />
      <ThemeSection />
      <CallToAction />
      <SocialNetworkSection />
      <MadeBySection />
    </article>
  );
};
