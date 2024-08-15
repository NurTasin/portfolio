import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';
import { BlogIndex } from '@/lib/blog';

function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}

const BlogCard = ({ blog }: { blog: BlogIndex }) => {
    return (
        <div className="rounded-lg bg-background shadow-md transition-all hover:scale-[1.02] hover:shadow-lg" key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="block h-48 overflow-hidden rounded-t-lg" prefetch={false}>
                <img
                    src={blog.blog_img || "https://thumbs2.imgbox.com/40/e7/jAVxkRi3_t.png"}
                    alt="Blog post image"
                    width="384"
                    height="192"
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "384/192", objectFit: "cover" }}
                />
            </Link>
            <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                    {
                        blog.tags.map((tag, i) => (
                            <Badge variant={"outline"} key={i} className='capitalize'>{tag}</Badge>
                        ))
                    }
                </div>
                <h2 className="mb-2 text-2xl font-bold">
                    <Link href={`/blog/${blog.slug}`} className="hover:text-primary" prefetch={false}>
                        {blog.title}
                    </Link>
                </h2>
                <p className="mb-4 text-muted-foreground text-justify">
                    {blog.synopsis}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-5 w-5 rounded-full bg-primary/20 p-1 text-primary">
                            <UserIcon className="h-full w-full" />
                        </div>
                        <span>{blog.author}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
