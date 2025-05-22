# How to Add Blog Posts

This guide explains how to add new blog posts to the SOCO PWA website.

## Blog Post Structure

Each blog post requires the following information:

```typescript
interface BlogPost {
  id: string;          // Unique identifier (URL-friendly)
  title: string;       // Post title
  excerpt: string;     // Short description (shown in previews)
  content: string;     // Full post content in Markdown
  author: {
    name: string;      // Author's name
    avatar?: string;   // Author's image URL (optional)
    role: string;      // Author's role
  };
  date: string;        // Publication date (YYYY-MM-DD)
  image: string;       // Featured image URL
  tags: string[];      // Array of relevant tags
  readTime: number;    // Estimated reading time in minutes
}
```

## Adding a New Post

1. Open `/src/data/blogPosts.ts`
2. Add your new post to the `blogPosts` array:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "your-post-url-slug",
    title: "Your Post Title",
    excerpt: "A compelling short description of your post",
    content: `
# Your Post Title

Your post content in Markdown format.

## Sections

- Use Markdown formatting
- Include code samples if relevant
- Add images where needed

## Conclusion

Wrap up your post content.
    `,
    author: {
      name: "Your Name",
      role: "Your Role",
      avatar: "https://your-avatar-url.jpg" // Optional
    },
    date: "2024-03-20",
    image: "https://images.unsplash.com/photo-xxx", // Featured image
    tags: ["Technology", "Innovation", "Your Tag"],
    readTime: 5 // Estimated reading time
  },
  // ... existing posts
];
```

## Content Guidelines

1. **Markdown Support**
   - Use standard Markdown syntax
   - Headers: `#`, `##`, `###`
   - Lists: `-` or `1.`
   - Code blocks: \```language
   - Links: `[text](url)`

2. **Images**
   - Use high-quality images
   - Prefer Unsplash for stock photos
   - Ensure proper licensing
   - Optimize for web

3. **SEO Best Practices**
   - Use descriptive titles
   - Include relevant keywords
   - Write compelling excerpts
   - Add appropriate tags

## Validation

The system automatically validates blog posts for required fields. Ensure:

- All required fields are filled
- URLs are valid
- Content is properly formatted
- Tags are relevant
- Reading time is accurate

## Testing

Before deploying:

1. Preview the post locally
2. Check responsive layout
3. Verify all links work
4. Test image loading
5. Validate Markdown rendering

## Example Post

```typescript
{
  id: "ai-in-modern-business",
  title: "The Role of AI in Modern Business",
  excerpt: "Explore how artificial intelligence is transforming business operations and decision-making processes.",
  content: `
# The Role of AI in Modern Business

Artificial Intelligence is revolutionizing how businesses operate...

## Key Applications

1. Customer Service
2. Data Analysis
3. Process Automation

## Implementation Strategies

Learn how to effectively implement AI...
  `,
  author: {
    name: "Dr. Sarah Chen",
    role: "AI Research Director",
    avatar: "https://images.unsplash.com/photo-profile"
  },
  date: "2024-03-20",
  image: "https://images.unsplash.com/photo-ai-business",
  tags: ["AI", "Business", "Technology"],
  readTime: 7
}
```

## Best Practices

1. **Content Quality**
   - Write clear, engaging content
   - Use proper formatting
   - Include relevant examples
   - Proofread thoroughly

2. **Media**
   - Use high-quality images
   - Optimize image sizes
   - Include alt text
   - Maintain aspect ratios

3. **SEO**
   - Use descriptive URLs
   - Include meta descriptions
   - Add relevant tags
   - Structure content properly

4. **Maintenance**
   - Keep content updated
   - Fix broken links
   - Update outdated information
   - Monitor performance