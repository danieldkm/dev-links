import type { User } from "@/domain/entities/user.entity";
import { createClient } from "@/prismicio";

export const getUser = async () => {
  const client = createClient(); // Crie o cliente (sem previewData para produção)
    const settings = await client.getSingle('settings'); // Busque o documento singleton "settings"

    // Mapeie os dados do Prismic para a entidade User
    const user: User = {
      id: 'prismic-settings', // ID fixo para singleton
      username: settings.data.user_name?.toString() || '', // Você pode adicionar um campo no Prismic se precisar
      displayName: settings.data.display_name?.toString() || '', // Mesmo aqui
      avatar: settings.data.avatar.url || '', // URL da imagem do Prismic
      bio: 'Biografia dinâmica', // Adicione um campo no custom type se necessário
      links: settings.data.links.map((link, index) => ({
        id: `link-${index}`,
        label: link.label?.toString() || '',
        url: (link.url as any).url || '',
      })),
      socialLinks: settings.data.networks.map((network, index) => ({
        id: `social-link-${index}`,
        label: network.label?.toString() || '',
        url: (network.url as any).url || '',
        icon: network.icon_name || '',
      })),
      footerText: 'Texto do rodapé', // Adicione no custom type se precisar
    };

    return user;
}