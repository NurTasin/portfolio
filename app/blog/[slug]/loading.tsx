/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nggyJAvD08H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from "@/components/ui/skeleton"

export default function Component() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
      <div className="space-y-2 not-prose">
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-5 w-[150px]" />
      </div>
      <figure className="lg:-mx-12 xl:-mx-20">
        <Skeleton className="aspect-video overflow-hidden rounded-lg" />
        <figcaption>
          <Skeleton className="h-4 w-[200px]" />
        </figcaption>
      </figure>
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </article>
  )
}