import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from '../components/blog/BlogCard';
import { SEO } from '../components/SEO';
import { BlogHero } from '../components/blog/BlogHero';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog"
        description="Stay updated with the latest insights on technology, cybersecurity, and digital transformation."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <BlogHero />
        
        <div className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}