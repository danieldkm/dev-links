import { UserRepository } from "@/infra/repositories/user.repository";

import {
  LandingPage,
} from "@/presentation/templates";

export default async function Home() {
  const repository = new UserRepository();
  const user = await repository.getUser(); // Busca os dados do Prismic

  return (
    <LandingPage user={user} />
  );
}
