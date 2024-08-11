import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "NodeJS",
    body: "Goto Platform to make backends. 2+ years of experience.",
    img: "https://avatars.githubusercontent.com/u/9950313?s=200&v=4",
  },
  {
    name: "Python",
    body: "5+ Years experience in Python. Goto language for Web Scraping and API Clients.",
    img: "https://www.python.org/static/img/python-logo-large.c36dccadd999.png?1576869008",
  },
  {
    name: "C++",
    body: "4+ Years in C++ building CLI Applications and other compute focused applications",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    name: "FFMpeg",
    body: "As a video techie it is my goto tool for transcoding videos.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/FFmpeg_icon.svg/240px-FFmpeg_icon.svg.png",
  },
  {
    name: "Flask",
    body: "Before switching to express I used to use this for about 2 years.",
    img: "/logos/flask.png",
  },
  {
    name: "Express",
    body: "It's all about req and res. 1+ year experience.",
    img: "/logos/express.png",
  },
  {
    name: "React",
    body: "Not that experienced yet. Learning the wizardry.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png",
  },
  {
    name: "NextJS",
    body: "So far loving the ecosystem. Built 1 or 2 apps maybe.",
    img: "https://nextjs.org/favicon.ico",
  },
  {
    name: "Prisma",
    body: "I wish I learn't this before suffering with MySQL queries. :-)",
    img: "https://www.prisma.io/images/apple-touch-icon.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Skills() {
  return (
    <div className="relative flex py-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h2 className="text-2xl text-center mb-2">Skills</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
