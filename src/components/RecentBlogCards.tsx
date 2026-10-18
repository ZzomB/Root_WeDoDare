"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Loader2 } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date?: string;
  coverImage?: string;
  tags?: string[];
}

interface RecentBlogCardsProps {
  posts: BlogPost[];
}

export function RecentBlogCards({ posts }: RecentBlogCardsProps) {
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  const handleCardClick = (slug: string) => {
    setLoadingSlug(slug);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          onClick={() => handleCardClick(post.slug)}
          className={`group relative flex flex-col justify-between rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${
            loadingSlug === post.slug ? "pointer-events-none" : ""
          }`}
        >
          <div>
            {post.coverImage ? (
              <div className="relative aspect-video w-full overflow-hidden bg-muted/40">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 via-card to-emerald-500/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary/40" />
              </div>
            )}
            <div className="p-4 space-y-2">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              {post.description && (
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              )}
            </div>
          </div>

          {post.date && (
            <div className="px-4 pb-4 pt-1 flex items-center gap-1.5 text-xs text-muted-foreground/70 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
          )}

          {/* 클릭 시 로딩 인디케이터 오버레이 */}
          {loadingSlug === post.slug && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-sm transition-opacity duration-300">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <span className="text-xs font-medium text-foreground">로딩 중...</span>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
