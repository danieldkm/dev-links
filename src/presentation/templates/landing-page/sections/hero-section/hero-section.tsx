import type { User } from '@/domain/entities/user.entity';
import { Avatar } from '@/presentation/components';

interface HeroSectionProps {
  user: User;
}

export const HeroSection = ({ user }: HeroSectionProps) => {
  return (
    <section className="container relative flex items-center justify-center">
      <Avatar.Container>
        <Avatar.Image
          src={user.avatar}
          alt={user.displayName}
          size="bg"
        />
        <Avatar.Content>
          <Avatar.Title>{user.username}</Avatar.Title>
        </Avatar.Content>
      </Avatar.Container>
    </section>
  );
};
