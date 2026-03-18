# DevLinks - Compartilhe seus links com o mundo

Um projeto moderno de agregador de links desenvolvido com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS**, seguindo os princípios de **Clean Architecture**.

## ✨ Características

- 🎨 **Design Responsivo** - Funciona perfeitamente em qualquer dispositivo
- 🌙 **Tema Claro/Escuro** - Alternância de tema com next-themes
- 🏗️ **Arquitetura Limpa** - Separação clara entre camadas (Domain, Infra, Presentation)
- 📱 **Componentes Modulares** - Componentes reutilizáveis e bem estruturados
- 🚀 **Next.js 16** - Último framework React com renderização otimizada
- 🎯 **TypeScript** - Tipagem forte para melhor DX
- 🎨 **Tailwind CSS** - Utilitários CSS para estilização rápida
- 🔗 **Ícones SVG** - lucide-react com ícones de redes sociais

## 📦 Dependências

```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "tailwindcss": "4",
  "lucide-react": "0.577.0",
  "next-themes": "0.4.6",
  "clsx": "2.1.1"
}
```

## 🏗️ Estrutura do Projeto

```
src/
├── domain/
│   ├── entities/        # Entidades e interfaces
│   └── repositories/    # Contratos de repositórios
├── infra/
│   ├── datasources/    # Sources de dados (mocks, APIs)
│   ├── models/         # DTOs e mappers
│   └── repositories/   # Implementação dos repositórios
├── presentation/
│   ├── components/     # Componentes React
│   └── hooks/          # Custom hooks
└── shared/
    ├── constants/      # Constantes globais
    └── utils/          # Funções utilitárias
```

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Abrir no navegador
open http://localhost:3000
```

### Build para Produção

```bash
# Criar build otimizado
pnpm build

# Iniciar servidor de produção
pnpm start
```

## 📖 Documentação

Para mais detalhes sobre a arquitetura e estrutura do projeto, veja [ARCHITECTURE.md](./ARCHITECTURE.md)

## 🎯 Componentes Principais

### ThemeToggle
Toggle interativo para alternar entre modo claro e escuro.

### ProfileHeader
Exibe avatar circular com gradiente, nome e username do usuário.

### LinkButton
Botão customizado com animações para CTAs.

### LinksList
Container que organiza os botões de links.

### SocialLinks
Ícones de redes sociais com links interativos.

### Footer
Rodapé com informações de atribuição.

## 🔄 Padrões Implementados

- **Clean Architecture** - Separação de responsabilidades
- **Repository Pattern** - Abstração de dados
- **Custom Hooks** - Lógica reutilizável
- **Component Composition** - Componentes pequenos e reutilizáveis
- **TypeScript Strict** - Tipagem forte

## 🎨 Customização

### Dados do Usuário
Edite `src/infra/datasources/user.mock.ts` para adicionar seus dados:

```typescript
export const mockUser: User = {
  username: '@seu_username',
  displayName: 'Seu Nome',
  avatar: 'url_da_sua_imagem',
  links: [
    // Seus links aqui
  ],
  // ...
};
```

### Cores e Estilos
Customize o Tailwind CSS em `tailwind.config.ts` ou atualize as classes nos componentes.

## 📝 Licença

Este projeto está disponível sob a licença MIT.

## 🙏 Créditos

Desenvolvido para o **Desafio DevLinks** da [Rocketseat](https://rocketseat.com.br/).

---

**Feito com ❤️ pela Rocketseat**
