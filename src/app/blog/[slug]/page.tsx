"use client";

import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

// Example data – later you can fetch this from CMS/DB
const blogPosts = [
  {
    slug: 'branding-secrets-for-2025',
    title: 'Branding Secrets for 2025',
    date: "September 10, 2025",
    author: "Brand Alchemy Team",
    banner: "/images/webdevelopment.jpg",
    content: `
      <p>Welcome to our very first blog post 🎉.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2>What’s Inside?</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    `,
  },
  {
    slug: 'alchemy-approach-to-ux',
    title: 'The Alchemy Approach to UX',
    date: "September 5, 2025",
    author: "Brand Alchemy Team",
    banner: "/images/softwaredevelopment.jpg",
    content: `
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    `,
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
      
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-light">404 | Blog post not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Banner */}
      <div className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.banner}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center">
          {post.title}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-20 py-16 ">
        <div className="text-gray-500 text-sm mb-6">
          {post.date} • By {post.author}
        </div>
<article
  className="prose prose-lg max-w-none blog-content space-y-6"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>

<style jsx global>{`
  .blog-content h2 {
    color: #111;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .blog-content p {
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }
`}</style>



      </div>
       
      <Footer />
    </>
  );
}
