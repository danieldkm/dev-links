import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import type { User } from "@/domain/entities/user.entity";

interface CallToActionProps {
  links: User['links'];
}

export const CallToAction = ({ links }: CallToActionProps) => {
  return (
    <section className="flex flex-col items-center gap-4 w-full max-w-135">
      {links.map((link) => (
        <Button asChild key={link.id} size="lg">
          <Link href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </Link>
        </Button>
      ))}
    </section>
  );
};
