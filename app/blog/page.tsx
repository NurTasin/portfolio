import BlogCard from '@/components/bigt/BlogCard';
import { BlogIndex, BLOG_URL } from '@/lib/blog';
import React from 'react';

const Page = async () => {
    const response = await fetch(`${BLOG_URL}/blogs/index.json?ver=${Math.random()}`, { cache: process.env.NODE_ENV === "production" ? "default" : "no-cache" })
    const data = await response.json() as BlogIndex[];

    return (
        <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map((blog, i) => (
                        <BlogCard blog={blog} key={i} />
                    ))
                }
            </div>
        </div>
    );
}

export default Page;
