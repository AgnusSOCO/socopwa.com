import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { getPostById } from '../../data/blogPosts';
import { SEO } from '../SEO';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = getPostById(id || '');

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Post not found</h1>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white min-h-screen"
      >
        {/* Rest of the component code remains the same */}
      </motion.article>
    </>
  );
}