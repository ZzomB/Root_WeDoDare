'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function GlobalHeader() {
  const currentPath = usePathname() || '/';

  const navItems = [
    { label: '홈', href: '/' },
    { label: '블로그', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-14 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">
        
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground hover:opacity-90">
          <span className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs font-extrabold">W</span>
          <span className="tracking-tight">Wedodare</span>
        </Link>

        {/* 내비게이션 메뉴 */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPath.startsWith(item.href) && (item.href !== '/' || currentPath === '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 오른쪽 유틸리티 영역 (다크모드 토글 등) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
