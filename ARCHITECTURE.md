# Estrutura do Projeto DevLinks

## Arquitetura Limpa Implementada

### Domain Layer (`src/domain/`)
- **entities/** - Definições de entidades do sistema
  - `user.entity.ts` - Interface de usuário com dados de perfil e links
- **repositories/** - Interfaces de contrato para repositórios
  - `user.repository.ts` - Interface IUserRepository

### Infrastructure Layer (`src/infra/`)
- **datasources/** - Fontes de dados (mocks, APIs, banco de dados)
  - `user.mock.ts` - Dados mock do usuário
- **repositories/** - Implementações dos repositórios
  - `user.repository.ts` - Implementação de UserRepository
- **models/** - Modelos de dados (DTOs, mappers)

### Presentation Layer (`src/presentation/`)
- **components/** - Componentes React
  - `ThemeToggle.tsx` - Toggle de tema claro/escuro
  - `ProfileHeader.tsx` - Header com avatar e informações
  - `LinkButton.tsx` - Botão customizado para links
  - `LinksList.tsx` - Lista de links do usuário
  - `SocialLinks.tsx` - Links para redes sociais
  - `Footer.tsx` - Rodapé da página
  - `Providers.tsx` - Provider de temas (next-themes)
  - `index.ts` - Exportações para facilitar imports
- **hooks/** - Custom React hooks
  - `useUser.ts` - Hook para carregar dados do usuário
  - `index.ts` - Exportações

### Shared Layer (`src/shared/`)
- **constants/** - Constantes globais da aplicação
  - `app.constants.ts` - Configurações da aplicação
- **utils/** - Funções utilitárias
  - `cn.ts` - Utilitário para merge de classes
  - `index.ts` - Exportações

## Dependências Instaladas

- **next**: 16.1.6 - Framework React com renderização no servidor
- **react**: 19.2.3 - Biblioteca de UI
- **react-dom**: 19.2.3 - DOM utilities para React
- **tailwindcss**: 4 - Utilitário CSS
- **lucide-react**: 0.577.0 - Ícones SVG
- **next-themes**: 0.4.6 - Gerenciamento de temas no Next.js
- **clsx**: 2.1.1 - Utilitário para classes CSS condicionais

## Arquivos Atualizados

- `app/layout.tsx` - Layout principal com ThemeProvider
- `app/page.tsx` - Página principal com perfil do usuário
- `app/globals.css` - Estilos globais
- `tsconfig.json` - Configurado path alias @/* para src/

## Recursos Implementados

✅ Componentes baseados na imagem de design
✅ Sistema de tema claro/escuro com next-themes
✅ Arquitetura limpa e modular
✅ Ícones usando lucide-react (GitHub, Instagram, YouTube, LinkedIn)
✅ Design responsivo com Tailwind CSS
✅ Gradientes e efeitos visuais
✅ TypeScript forte
✅ Clean code e padrões SOLID
✅ Dados mockados para exemplo

## Como Usar

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

A aplicação estará disponível em `http://localhost:3000`

## Próximos Passos (Sugestões)

1. Conectar com API real para carregar dados do usuário
2. Adicionar formulário de edição de perfil
3. Adicionar autenticação
4. Implementar analytics
5. Adicionar testes unitários com Jest
6. Implementar cache com React Query
7. Adicionar animations mais complexas
