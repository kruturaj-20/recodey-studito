import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';
import { BlogPost } from '../types';

// Dedicated Parallax Blog Card Component
const ParallaxBlogCard: React.FC<{
  post: BlogPost;
  index: number;
  onSelect: () => void;
}> = ({ post, index, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.10, 1.18]);

  return (
    <motion.article 
      ref={cardRef}
      onClick={onSelect}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col justify-between bg-[#fafaf8] border border-[#e7e5e1] rounded-sm hover:border-[#141413] transition-all cursor-pointer overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      <div>
        {/* Parallax Content Image */}
        {post.coverImage && (
          <div className="relative aspect-[16/9] overflow-hidden bg-[#e7e5e1] border-b border-[#e7e5e1]">
            <motion.img 
              src={post.coverImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              style={{ y: imageY, scale: imageScale }}
              className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 will-change-transform"
            />
            <div className="absolute top-3 left-3 bg-[#141413]/90 text-[#fafaf8] text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs backdrop-blur-xs">
              {post.category}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#71716e] pb-3 mb-3 border-b border-[#e7e5e1]">
            <span>{post.readTime}</span>
            <span>{post.date}</span>
          </div>

          <h3 className="text-lg font-light text-[#141413] group-hover:text-[#2c2b29] transition-colors leading-snug mb-3">
            {post.title}
          </h3>

          <p className="text-xs text-[#575653] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-[#e7e5e1] flex items-center justify-between text-xs font-mono text-[#71716e]">
          <span>BY {post.author.name.toUpperCase()}</span>
          <span className="text-[#141413] font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>Read Note</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Section-level parallax scroll tracking
  const blogRef = useRef<HTMLElement>(null);
  const { scrollYProgress: blogScrollProgress } = useScroll({
    target: blogRef,
    offset: ["start end", "end start"],
  });

  const bgWatermarkY = useTransform(blogScrollProgress, [0, 1], ["-75px", "75px"]);
  const bgLinesX = useTransform(blogScrollProgress, [0, 1], ["-20px", "20px"]);

  const categories = ['All', 'Engineering & Search', 'Social Distribution', 'Systems Design'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    if (activeCategory === 'All') return true;
    return post.category === activeCategory;
  });

  return (
    <section 
      ref={blogRef}
      id="blog" 
      className="relative py-24 border-b border-[#e7e5e1] bg-[#ffffff] overflow-hidden"
    >
      {/* Background Architectural Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ y: bgWatermarkY }}
          className="absolute -top-12 left-0 right-0 text-[12vw] font-serif italic text-[#141413]/[0.02] leading-none whitespace-nowrap pl-4 will-change-transform"
        >
          Studio Journal &amp; Dispatches From Production
        </motion.div>

        <motion.div 
          style={{ x: bgLinesX }}
          className="absolute bottom-10 right-10 text-[10px] font-mono text-[#71716e]/30 hidden lg:block tracking-widest"
        >
          SEC-07 // PERSPECTIVES // ON CRAFT &amp; SYSTEMS
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Studio Journal • Field Notes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Perspectives on craft. <br />
              <span className="font-serif italic font-normal">Dispatches from production.</span>
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#f0eee9] border border-[#e4e1db] rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                    : 'text-[#71716e] hover:text-[#141413]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Articles Grid with Parallax Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <ParallaxBlogCard 
              key={post.id}
              post={post}
              index={idx}
              onSelect={() => setReadingPost(post)}
            />
          ))}
        </div>

      </div>

      {/* Reader Drawer Modal */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/70 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-10 shadow-2xl text-left"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-6 right-6 p-2 rounded-xs bg-[#f0eee9] text-[#71716e] hover:text-[#141413] hover:bg-[#e4e1db] transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-3 text-xs font-mono text-[#71716e] mb-2">
                  <span>{readingPost.category}</span>
                  <span>•</span>
                  <span>{readingPost.date}</span>
                  <span>•</span>
                  <span>{readingPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-[#141413] tracking-tight leading-tight">
                  {readingPost.title}
                </h2>
                <div className="flex items-center gap-2 mt-4 text-xs font-mono text-[#575653]">
                  <span>BY {readingPost.author.name.toUpperCase()}</span>
                  <span>/</span>
                  <span>{readingPost.author.role.toUpperCase()}</span>
                </div>
              </div>

              {/* Article Cover Image in Modal */}
              {readingPost.coverImage && (
                <div className="aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#e7e5e1] mb-8 border border-[#e7e5e1]">
                  <img
                    src={readingPost.coverImage}
                    alt={readingPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Key Takeaways */}
              <div className="p-5 bg-[#ffffff] border border-[#e7e5e1] rounded-sm mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-3">
                  Core Takeaways
                </span>
                <ul className="space-y-2">
                  {readingPost.keyTakeaways.map((item, i) => (
                    <li key={i} className="text-xs text-[#2c2b29] flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content Body */}
              <div className="space-y-4 text-sm text-[#373634] leading-relaxed font-normal">
                {readingPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-6 border-t border-[#e7e5e1] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {readingPost.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-[11px] font-mono bg-[#f0eee9] text-[#575653] rounded-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setReadingPost(null)}
                  className="px-4 py-2 bg-[#141413] text-[#fafaf8] text-xs font-medium rounded-sm hover:bg-[#2c2b29] transition-colors cursor-pointer"
                >
                  Close Note
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
