// src/pages/Blog.jsx

import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: "tax-tools-blog",
    title: "Mastering Tax Tools: Calculate Smartly with Fymo",
    image: "/blog-images/tax.jpg",
    date: "June 23, 2025",
    content: (
      <>
        <p className="mb-4">
          Managing taxes can be a headache, but not anymore. Fymo Tools provides a complete set of easy-to-use, accurate, and instant online tax tools...
        </p>
        {/* All 5 tools from tax-tools-blog (same as previous) */}
        <a href="/tax-tools" className="text-indigo-600 underline font-semibold">
          → Try all Tax Tools Now
        </a>
      </>
    ),
  },
  {
    id: "health-tools-blog",
    title: "Stay Fit Daily: Top 5 Health Tools You Should Use",
    image: "/blog-images/health.jpg",
    date: "June 23, 2025",
    content: (
      <>
        <p className="mb-4">
          Your health is your biggest asset. At Fymo Tools, we’ve built a powerful collection...
        </p>
        {/* All 5 tools from health-tools-blog */}
        <a href="/health-tools" className="text-indigo-600 underline font-semibold">
          → Try all Health Tools Now
        </a>
      </>
    ),
  },
  {
    id: "writing-tools-blog",
    title: "Boost Your Content: Top 5 Writing Tools by Fymo",
    image: "/blog-images/writing.jpg",
    date: "June 23, 2025",
    content: (
      <>
        <p className="mb-4">
          Writing powerful content has never been easier. Whether you’re a blogger, student, or digital marketer...
        </p>
        {/* All 5 tools from writing-tools-blog */}
        <a href="/writing-tools" className="text-indigo-600 underline font-semibold">
          → Try all Writing Tools Now
        </a>
      </>
    ),
  },
  {
    id: "seo-tools-blog",
    title: "Improve Your Rankings: 5 Essential SEO Tools on Fymo",
    image: "/blog-images/seo.jpg",
    date: "June 23, 2025",
    content: (
      <>
        <p className="mb-4">
          Want your website to rank higher on Google? Fymo’s free SEO tools help you improve your site’s visibility...
        </p>
        {/* All 5 tools from seo-tools-blog */}
        <a href="/seo-tools" className="text-indigo-600 underline font-semibold">
          → Try all SEO Tools Now
        </a>
      </>
    ),
  },
  {
    id: "image-tools-blog",
    title: "Edit Like a Pro: Fymo’s Free Image Tools Guide",
    image: "/blog-images/image.jpg",
    date: "June 23, 2025",
    content: (
      <>
        <p className="mb-4">
          Editing images doesn’t have to be complicated. Whether you're optimizing for blogs or experimenting with filters...
        </p>
        {/* All 5 tools from image-tools-blog */}
        <a href="/image-tools" className="text-indigo-600 underline font-semibold">
          → Try all Image Tools Now
        </a>
      </>
    ),
  },
  {
    id: "daily-tools-blog",
    title: "Simplify Life: Fymo’s Top 5 Daily Utility Tools",
    image: "/blog-images/daily.jpg",
    date: "June 23, 2025",
    content: (
      <>
        <p className="mb-4">
          In today’s busy world, small tools can make a big difference. Whether calculating age, loans or taking notes...
        </p>
        {/* All 5 tools from daily-tools-blog */}
        <a href="/daily-tools" className="text-indigo-600 underline font-semibold">
          → Try all Daily Tools Now
        </a>
      </>
    ),
  },
];

const Blog = () => {
  const { blogId } = useParams();
  const blog = blogPosts.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Blog Not Found</h2>
        <p>Sorry, the blog you’re looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={blog.image} alt={blog.title} className="rounded-xl mb-4 w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Published on {blog.date}</p>
      <div className="prose prose-indigo">{blog.content}</div>
    </div>
  );
};

export default Blog;
