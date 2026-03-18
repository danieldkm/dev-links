'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Root as SwitchRoot, Thumb as SwitchThumb } from '@radix-ui/react-switch';

import { useSettings } from '@/presentation/hooks/settings/settings-provider';
import { cn } from '@/shared/utils';

export function ThemeToggle() {
  const { themeId, setTheme, isLoaded } = useSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) return null;

  const checked = themeId === 'dark';

  return (
    <SwitchRoot
      checked={checked}
      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      className={cn(
        'relative inline-flex h-[22px] w-[62px] items-center rounded-full border p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400',
        checked
          ? 'border-slate-600 bg-slate-900'
          : 'border-slate-300 bg-slate-100'
      )}
      aria-label="Alterar tema"
    >
      <SwitchThumb
        className={cn(
          'relative flex h-[32px] w-[32px] items-center justify-center rounded-full shadow transition-transform',
          checked
            ? 'translate-x-[36px] bg-slate-950 text-yellow-400'
            : 'translate-x-0 bg-white text-slate-700'
        )}
      >
        {checked ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </SwitchThumb>
    </SwitchRoot>
  );
}