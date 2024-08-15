/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nggyJAvD08H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from "@/components/ui/skeleton"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="w-full h-30"></Skeleton>
        <Skeleton className="w-full h-30"></Skeleton>
        <Skeleton className="w-full h-30"></Skeleton>
      </div>
    </div>
  )
}