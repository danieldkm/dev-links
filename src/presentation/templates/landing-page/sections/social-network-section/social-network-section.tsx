"use client"; 
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { useShare } from "@/presentation/hooks";

export const SocialNetworkSection = () => {
  const { shareButtons } = useShare({
    url: "https://rocketseat.com.br",
    title:
      "Rocketseat - A melhor plataforma de educação em tecnologia do Brasil",
    text: "Confira a Rocketseat, a melhor plataforma de educação em tecnologia do Brasil! Acesse https://rocketseat.com.br e descubra cursos, bootcamps e conteúdos gratuitos para impulsionar sua carreira na área de desenvolvimento. Não perca essa oportunidade de aprender com os melhores profissionais do mercado! #Rocketseat #EducaçãoEmTecnologia #Desenvolvimento",
  });

  return (
    <section className="flex justify-center gap-4 w-full">
      {shareButtons.map((provider) => (
        <Button
          key={provider.provider}
          onClick={() => provider.action()}
          variant="circle"
          asChild
          // className="w-fit md:w-full justify-start gap-2"
        >
          <Link href={provider.action()} target="_blank" rel="noreferrer">
            {provider.icon}
          </Link>
          {/* <span className="hidden md:block">{provider.name}</span> */}
        </Button>
      ))}
    </section>
  );
};
