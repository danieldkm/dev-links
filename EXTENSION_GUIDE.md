# Guia de Extensão - DevLinks

Este documento fornece exemplos práticos de como estender e personalizar o projeto DevLinks.

## 1. Adicionar Novos Links

### Passo 1: Atualizar o Mock Data
Edite `src/infra/datasources/user.mock.ts`:

```typescript
export const mockUser: User = {
  // ... outros dados
  links: [
    {
      id: '1',
      label: 'Inscreva-se no NLW',
      url: 'https://www.rocketseat.com.br/nlw',
    },
    {
      id: '2',
      label: 'Seu novo link',
      url: 'https://seu-url.com',
    },
  ],
};
```

## 2. Conectar com API Real

### Passo 1: Atualizar UserRepository
Edite `src/infra/repositories/user.repository.ts`:

```typescript
export class UserRepository implements IUserRepository {
  async getUser(): Promise<User> {
    const response = await fetch('/api/user');
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  }
}
```

### Passo 2: Criar API Route
Crie `app/api/user/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch from seu backend
    const user = await fetchUserFromDB();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}
```

## 3. Adicionar Novo Componente

### Exemplo: Criar Analytics Section

```typescript
// src/presentation/components/AnalyticsSection.tsx
'use client';

import React from 'react';

interface AnalyticsData {
  clicks: number;
  views: number;
}

interface AnalyticsSectionProps {
  data: AnalyticsData;
}

export function AnalyticsSection({ data }: AnalyticsSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">Visualizações</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {data.views}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">Cliques</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {data.clicks}
        </p>
      </div>
    </div>
  );
}
```

## 4. Adicionar Espaço de Armazenamento com React Query

### Passo 1: Instalar React Query
```bash
pnpm add @tanstack/react-query
```

### Passo 2: Criar Provider
```typescript
// src/presentation/components/QueryProvider.tsx
'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

### Passo 3: Usar no Hook
```typescript
// src/presentation/hooks/useUser.ts
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await fetch('/api/user');
      return response.json();
    },
  });
}
```

## 5. Adicionar Formulário de Edição

### Exemplo: Editar Nome de Usuário
```typescript
// src/presentation/components/EditProfileForm.tsx
'use client';

import { useState } from 'react';
import { User } from '@/domain/entities/user.entity';

interface EditProfileFormProps {
  user: User;
  onSave: (user: User) => Promise<void>;
}

export function EditProfileForm({ user, onSave }: EditProfileFormProps) {
  const [displayName, setDisplayName] = useState(user.displayName);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave({
        ...user,
        displayName,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:bg-gray-800 dark:text-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Salvando...' : 'Salvar'}
      </button>
    </form>
  );
}
```

## 6. Adicionar Validações

### Passo 1: Instalar Zod
```bash
pnpm add zod
```

### Passo 2: Criar Schema de Validação
```typescript
// src/shared/schemas/user.schema.ts
import { z } from 'zod';

export const userSchema = z.object({
  username: z.string().min(1).max(50),
  displayName: z.string().min(1).max(100),
  avatar: z.string().url(),
});

export type UserInput = z.infer<typeof userSchema>;
```

### Passo 3: Usar no Formulário
```typescript
import { userSchema } from '@/shared/schemas/user.schema';

const handleSubmit = async (data: unknown) => {
  try {
    const validatedData = userSchema.parse(data);
    await onSave(validatedData);
  } catch (error) {
    console.error('Validation error:', error);
  }
};
```

## 7. Adicionar Testes

### Passo 1: Instalar Jest
```bash
pnpm add -D jest @testing-library/react @testing-library/jest-dom
```

### Passo 2: Criar Teste
```typescript
// src/presentation/components/__tests__/ProfileHeader.test.tsx
import { render, screen } from '@testing-library/react';
import { ProfileHeader } from '../ProfileHeader';

describe('ProfileHeader', () => {
  it('renders user information correctly', () => {
    render(
      <ProfileHeader
        avatar="https://example.com/avatar.jpg"
        displayName="Julia Silva"
        username="@juliasilva"
      />
    );

    expect(screen.getByText('Julia Silva')).toBeInTheDocument();
    expect(screen.getByText('@juliasilva')).toBeInTheDocument();
  });
});
```

## 8. Variáveis de Ambiente

Crie `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_NAME=DevLinks
DATABASE_URL=your_database_url
API_SECRET=your_secret_key
```

Use em seus arquivos:

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 9. Deploy na Vercel

```bash
# Fazer push para GitHub
git push origin main

# Vercel detectará automaticamente e fará deploy
```

Ou via Vercel CLI:

```bash
pnpm add -g vercel
vercel
```

## 🎯 Dicas Importantes

1. **Mantenha a Arquitetura Limpa** - Não misture camadas
2. **Use TypeScript** - Aproveite a tipagem forte
3. **Componentes Pequenos** - Facilita reuso e teste
4. **Reutilize Hooks** - Centralize lógica em hooks
5. **Variáveis de Ambiente** - Nunca hardcode sensíveis
6. **Testes** - Sempre teste componentes e lógica
7. **Performance** - Use `useMemo` e `useCallback` quando necessário

---

Para mais informações, veja [ARCHITECTURE.md](./ARCHITECTURE.md) e [README.md](./README.md)