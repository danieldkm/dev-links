import { Avatar } from '@/presentation/components';

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center">
      <Avatar.Container>
        <Avatar.Image
          src="https://www.imagenspng.com.br/wp-content/uploads/2015/02/super-mario-mario-17.png"
          alt="teste"
          size="bg"
        />
        <Avatar.Content>
          <Avatar.Title>John Doe</Avatar.Title>
        </Avatar.Content>
      </Avatar.Container>
    </section>
  );
};
