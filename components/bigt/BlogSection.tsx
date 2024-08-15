"use client";
import { BlogIndex } from '@/lib/blog';
import React from 'react';
import BlogCard from './BlogCard';
import { Skeleton } from '../ui/skeleton';

const BlogSection = () => {
    const [data, setData] = React.useState<BlogIndex[]>()
    React.useEffect(() => {
        (async () => {
            const response = await fetch("/blogs/index.json");
            const data = await response.json() as BlogIndex[];
            setData(data);
        })()
    }, [])
    return (
        <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
            <h1 className='text-4xl text-center mb-4'>Read My Blogs</h1>
            <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    data ? data.slice(0, 3).map((blog, i) => (
                        <BlogCard blog={blog} key={i} />
                    )) : (<>
                        <Skeleton className="w-64 h-52"></Skeleton>
                        <Skeleton className="w-64 h-52"></Skeleton>
                        <Skeleton className="w-64 h-52"></Skeleton>
                    </>
                    )
                }
            </div>
        </div>
    );
}

export default BlogSection;
