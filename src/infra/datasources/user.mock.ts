import { User } from '@/domain/entities/user.entity';

export const mockUser: User = {
  id: '1',
  username: '@juliasilva',
  displayName: 'Julia Silva',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  bio: 'Developer | Student at Rocketseat',
  links: [
    {
      id: '1',
      label: 'Inscreva-se no NLW',
      url: 'https://www.rocketseat.com.br/nlw',
    },
    {
      id: '2',
      label: 'Baixe meu e-book',
      url: 'https://www.rocketseat.com.br/ebook',
    },
    {
      id: '3',
      label: 'Veja meu portfólio',
      url: 'https://portfolio.example.com',
    },
    {
      id: '4',
      label: 'Conheça meu curso',
      url: 'https://www.rocketseat.com.br/cursos',
    },
  ],
  socialLinks: [
    {
      url: 'https://github.com',
      id: 'github',
      label: 'GitHub',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      url: 'https://youtube.com',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com',
    },
  ],
  footerText: 'Feito com ❤️ pela Rocketseat',
};
