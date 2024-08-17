import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";

export const BLOG_URL = "https://raw.githubusercontent.com/NurTasin/blogs/main"

const prettyCodeOptions = {
    theme: "one-dark-pro"
}

export interface BlogIndex {
    title: string;
    slug: string;
    tags: string[];
    added_on: number;
    author: string;
    author_short: string;
    author_img: string;
    synopsis: string;
    blog_img?: string;
}

export async function getBlogMetadataBySlug(slug: string, onError: Function | undefined = undefined) {
    const response = await fetch(`${BLOG_URL}/blogs/index.json`,{
        cache:"force-cache",
        next: {
            tags: ["blog_index"]
        }
    });
    const index: BlogIndex[] = await response.json() as BlogIndex[];
    for (const blog of index) {
        if (blog.slug === slug) {
            return blog;
        }
    }
    if(onError){onError(slug)}
}

export async function getBlogContentBySlug(slug: string, onError: Function | undefined = undefined) {
    const response = await fetch(`${BLOG_URL}/blogs/raw/${slug}.mdx`);
    let renderedContent: MDXRemoteSerializeResult;
    if (response.status === 200) {
        const content = await response.text();
        renderedContent = await serialize(content, {
            mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
            },
            parseFrontmatter: true
        });
        return renderedContent;
    } else {
        if (onError) {
            onError(response.status)
        }
    }
}