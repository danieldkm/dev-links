import type { User } from "@/domain/entities/user.entity";
import { CallToAction } from "./sections/call-to-action";
import { HeroSection } from "./sections/hero-section";
import { MadeBySection } from "./sections/made-by-section";
import { SocialNetworkSection } from "./sections/social-network-section";
import { ThemeSection } from "./sections/theme-section";

interface LandingPageProps {
  user: User;
}

export const LandingPage = ({ user }: LandingPageProps) => {
  return (
    <article className="flex flex-col gap-6 items-center p-6 w-full max-w-147">
      <HeroSection user={user} />
      <ThemeSection />
      <CallToAction links={user.links}/>
      <SocialNetworkSection socialLinks={user.socialLinks}/>
      <MadeBySection />
    </article>
  );
};
