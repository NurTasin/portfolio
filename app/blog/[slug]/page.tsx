"use client";
import { useParams } from 'next/navigation';
import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link';
import { getBlogContentBySlug, getBlogMetadataBySlug } from '@/lib/blog';
import Loading from './loading'

const Page: React.FC = () => {
    const { slug: blogSlug } = useParams();
    const [blogContent, setBlogContent] = React.useState<MDXRemoteSerializeResult>();
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const renderedSource = await getBlogContentBySlug(blogSlug as string, () => {
                setError(true)
            });
            setBlogContent(renderedSource);
        })()
    }, [])
    return (
        <header className='prose dark:prose-invert w-full mx-auto px-4 py-6 md:px-6 lg:py-12'>
            {
                blogContent ? (
                    <>
                        <MDXRemote {...blogContent} />
                    </>
                ) : (
                    <Loading />
                )
            }
            {
                error && (
                    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-md text-center">
                            <div className="text-6xl mb-4">😔</div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">404 - Blog Not Found</h1>
                            <p className="mt-4 text-muted-foreground">The blog post you were looking for could not be found.</p>
                            <div className="mt-6">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    Read Other Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
}

export default Page;
