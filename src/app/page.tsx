import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Link as LinkIcon, Image as ImageIcon } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
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
                  여행, 운동, 일상 등 삶의 다양한 분야에서 시도한 도전과 경험들을 기록하고 나누는 블로그입니다.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-6 group-hover:translate-x-1 transition-transform">
              <span>블로그 탐색하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* PromptArchive Card */}
          <Link
            href="/function/PromptArchive"
            className="group relative flex flex-col justify-between p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all duration-300" />
            <div className="space-y-4 text-left">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  PromptArchive
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  거대 언어 모델(LLM)에 정교한 역할을 부여하고 원하는 답변을 얻어내기 위한 프롬프트 모음집입니다.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-6 group-hover:translate-x-1 transition-transform">
              <span>프롬프트 탐색하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* G2Thumbnail Card */}
          <Link
            href="/function/G2Thumbnail"
            className="group relative flex flex-col justify-between p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all duration-300" />
            <div className="space-y-4 text-left">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                <LinkIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  G2Thumbnail
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  구글 드라이브 파일의 공유 링크를 마크다운이나 블로그, Notion에 즉시 임베드할 수 있는 직접 스트리밍 주소로 변환합니다.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-6 group-hover:translate-x-1 transition-transform">
              <span>링크 변환하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* ImageRandomPresentation Card */}
          <Link
            href="/function/ImageRandomPresentation"
            className="group relative flex flex-col justify-between p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all duration-300" />
            <div className="space-y-4 text-left">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  ImageRandomPresentation
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  질환 부위, 사물 등 학습용 이미지와 설명을 매칭하여 효과적으로 암기하고 퀴즈 테스트를 진행할 수 있는 시각 학습 도구입니다.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-6 group-hover:translate-x-1 transition-transform">
              <span>학습기 시작하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* Extra minimal details footer */}
        <div className="text-xs text-muted-foreground/60 font-mono tracking-wide pt-8">
          © {new Date().getFullYear()} Wedodare. All rights reserved.
        </div>

      </div>
    </div>
  );
}
