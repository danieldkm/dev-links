"use client"; 
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import type { User } from "@/domain/entities/user.entity";
import { Github, Instagram, Linkedin, X, Youtube } from "lucide-react";

interface SocialNetworkSectionProps {
  socialLinks: User['socialLinks'];
}

export const SocialNetworkSection = ({ socialLinks }: SocialNetworkSectionProps) => {
  const iconMap = {
    github: Github,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin,
    x: X,
  };

  return (
    <section className="flex justify-center gap-4 w-full">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <Button key={link.id} variant="circle" asChild>
            <Link href={link.url} target="_blank" rel="noreferrer">
              <Icon />
            </Link>
          </Button>
        );
      })}
    </section>
  );
};
