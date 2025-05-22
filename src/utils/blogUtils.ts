import { BlogPost } from '../data/blogPosts';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export const validateBlogPost = (post: Partial<BlogPost>): string[] => {
  const errors: string[] = [];

  if (!post.id) errors.push('Post ID is required');
  if (!post.title) errors.push('Title is required');
  if (!post.content) errors.push('Content is required');
  if (!post.excerpt) errors.push('Excerpt is required');
  if (!post.author?.name) errors.push('Author name is required');
  if (!post.date) errors.push('Publication date is required');
  if (!post.image) errors.push('Featured image is required');
  if (!post.tags?.length) errors.push('At least one tag is required');

  return errors;
};