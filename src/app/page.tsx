import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center overflow-hidden py-20 px-4">
      {/* Background ambient glowing mesh blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px] animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse duration-[8000ms]" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-12 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Platform Root Domain</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-foreground via-primary to-emerald-500 bg-clip-text text-transparent drop-shadow-sm select-none">
            WeDoDare
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-muted-foreground font-light leading-relaxed">
            우리는 도전을 기록하고, 아이디어를 실현하며, 함께 성장합니다.<br />
            더 나은 사용자 경험과 지속 가능한 기술 생태계를 구축합니다.
          </p>
        </div>

        {/* Card Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          {/* Blog Card */}
          <Link
            href="/blog"
            className="group relative flex flex-col justify-between p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all duration-300" />
            <div className="space-y-4 text-left">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  Wedodare Blog
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  개발 지식, 프로젝트 회고, 최신 기술 트렌드를 함께 나누는 기술 블로그입니다.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-6 group-hover:translate-x-1 transition-transform">
              <span>블로그 탐색하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Feature Card (Placeholder for next features) */}
          <div
            className="relative flex flex-col justify-between p-6 rounded-2xl border border-border/60 bg-muted/20 backdrop-blur-sm select-none overflow-hidden"
          >
            <div className="space-y-4 text-left opacity-60">
              <div className="inline-flex p-3 rounded-xl bg-muted text-muted-foreground">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  New Features
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  다양한 독립 유틸리티와 생산성 강화를 위한 보조 도구들이 준비 중입니다.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mt-6">
              <span>Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Extra minimal details footer */}
        <div className="text-xs text-muted-foreground/60 font-mono tracking-wide pt-8">
          © {new Date().getFullYear()} Wedodare. All rights reserved.
        </div>

      </div>
    </div>
  );
}
