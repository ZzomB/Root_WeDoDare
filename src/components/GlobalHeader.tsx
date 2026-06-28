'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function GlobalHeader() {
  const currentPath = usePathname() || '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const navItems = [
    { label: '홈', href: '/' },
    { label: '블로그', href: '/blog' },
  ];

  const functionItems = [
    { label: '구글드라이브 썸네일 변환 (G2Thumbnail)', href: '/G2Thumbnail' },
  ];

  const isFunctionActive = currentPath.startsWith('/G2Thumbnail');

  return (
    <header className="sticky top-0 z-50 w-full h-14 border-b border-border bg-background/80 backdrop-blur-md select-none">
      <div className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">
        
        {/* 로고 영역 */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-bold text-lg text-foreground hover:opacity-90 z-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs font-extrabold">D</span>
          <span className="tracking-tight">Wedodare</span>
        </Link>

        {/* 데스크톱 내비게이션 메뉴 */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
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
          
          {/* 기능 드롭다운 */}
          <div className="relative group py-2">
            <button 
              className={`flex items-center gap-1 text-sm font-semibold transition-all hover:text-primary cursor-pointer ${
                isFunctionActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              기능
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            {/* 드롭다운 콘텐츠 */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-xl border border-border bg-popover p-1.5 shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
              {functionItems.map((subItem) => {
                const isSubActive = currentPath.startsWith(subItem.href);
                return (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={`block rounded-lg px-3.5 py-2.5 text-xs font-semibold transition-all hover:bg-accent hover:text-primary ${
                      isSubActive ? 'text-primary bg-accent/60' : 'text-muted-foreground'
                    }`}
                  >
                    {subItem.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* 오른쪽 유틸리티 영역 */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* 모바일 햄버거 버튼 및 테마 토글 */}
        <div className="flex md:hidden items-center gap-3 z-50">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded-md text-foreground hover:bg-muted focus:outline-none cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* 모바일 메뉴 모달/오버레이 */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-background z-40 border-t border-border flex flex-col p-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 border-b border-border/50 transition-colors ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* 모바일 기능 드롭다운 (아코디언) */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`flex items-center justify-between text-base font-semibold py-2 border-b border-border/50 transition-colors text-left cursor-pointer ${
                  isFunctionActive ? 'text-primary' : 'text-foreground'
                }`}
              >
                <span>기능</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen && (
                <div className="pl-4 py-2 flex flex-col gap-2 bg-muted/30 rounded-lg mt-2">
                  {functionItems.map((subItem) => {
                    const isSubActive = currentPath.startsWith(subItem.href);
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm font-medium py-2 transition-colors ${
                          isSubActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
