import { getBlogMetadataBySlug } from "@/lib/blog";

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const metadata = await getBlogMetadataBySlug(params.slug);
    return {
        title: metadata?.title+ " | Tasin" || "Blog | Tasin",
    }
}

const Layout = async ({ children, params }: Readonly<{
    children: React.ReactNode,
    params: {
        slug: string
    }
}>) => {
    const metadata = await getBlogMetadataBySlug(params.slug);
    return (
        <>
            {metadata && (
                <header className="prose dark:prose-invert w-full mx-auto px-4 py-6 md:px-6 lg:py-12">
                    <div className="mx-auto max-w-4xl space-y-4">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                            {metadata.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={metadata.author_img} alt={metadata.author_short}  />
                                <AvatarFallback>{metadata.author_short}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1 text-sm">
                                <div className="font-medium">{metadata.author}</div>
                                <div className="text-muted-foreground">Published on {new Date((metadata.added_on * 1000) + new Date().getTimezoneOffset()*60000 ).toLocaleString("en-US")}  (GMT+6)</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {
                                metadata.tags.map((el, i) => (
                                    <Badge variant="secondary" className="text-xs capitalize" key={i}>
                                        {el}
                                    </Badge>
                                ))
                            }

                        </div>
                    </div>
                </header>
            )}
            {children}
        </>
    );
}

export default Layout;
