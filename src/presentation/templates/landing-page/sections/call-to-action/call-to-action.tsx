import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";

export const CallToAction = () => {
  const listOfLinks = [
    {
      name: "Site institucional",
      href: "https://rocketseat.com.br",
    },
    {
      name: "Plataforma",
      href: "https://app.rocketseat.com.br",
    },
    {
      name: "Site institucional2",
      href: "https://rocketseat2.com.br",
    },
    {
      name: "Site institucional3",
      href: "https://rocketseat3.com.br",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-4 w-full max-w-135">
      {listOfLinks.map((link) => (
        <Button asChild key={link.href} size="lg">
          <Link href={link.href} target="_blank" rel="noreferrer">
            {link.name}
          </Link>
        </Button>
      ))}
    </section>
  );
};
