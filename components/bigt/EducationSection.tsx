import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { MagicCard } from "../magicui/magic-card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import GithubCardSkew from "../animata/card/github-card-skew"
import { group } from "console"
import Link from "next/link"

function BadgeIcon(props: any) {
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
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        </svg>
    )
}


function CalendarIcon(props: any) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function UsersIcon(props: any) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

const qualification = [
    {
        name: "Bachelor of Science (BSc)",
        institute: "Mawlana Bhasani Science and Technology University",
        institute_link: "https://mbstu.ac.bd/",
        cgpa: "N/A",
        completed: "2024 - Current",
        sub: true,
        group: "Computer Science and Engineering"
    },
    {
        name: "Higher Secondary Certificate (HSC)",
        institute: "New Govt. Degree College, Rajshahi",
        institute_link: "https://ngdc.ac.bd/",
        cgpa: "5.0",
        completed: "2021 - 2023",
        sub: false,
        group: "Science"
    },
    {
        name: "Secondary School Certificate (SSC)",
        institute: "Harimohan Govt. High School",
        institute_link: "http://harimohanschool.edu.bd/",
        cgpa: "5.0",
        completed: "2016 - 2021",
        sub: false,
        group: "Science"
    }
]

export default function EducationSection() {
    return (
        <div className="my-6">
            <h1 className="text-2xl text-center">Educational Qualification</h1>
            <div className={
                "grid p-10 w-full grid-cols-1 lg:grid-cols-3 gap-4"
            }>
                {
                    qualification.map((el, i) => (
                        <GithubCardSkew className="max-w-md bg-gray-600 bg-opacity-30 filter backdrop-blur-sm border-2 border-[rgba(255,255,255,0.1)]" key={i}>
                            <div className="flex items-center gap-4">
                                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                                    <BadgeIcon className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-semibold">{el.name}</h3>
                                    <Link className="text-muted-foreground" href={el.institute_link} target="_blank">{el.institute}</Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <BadgeIcon className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-sm font-medium">CGPA</p>
                                        <p className="text-muted-foreground text-sm">{el.cgpa}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CalendarIcon className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-sm font-medium">Duration</p>
                                        <p className="text-muted-foreground text-sm">{el.completed}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <UsersIcon className="w-5 h-5 text-primary" />
                                    <div className="w-full">
                                        <p className="text-sm font-medium">{el.sub ? "Subject" : "Group"}</p>
                                        <p className="text-muted-foreground text-sm">{el.group}</p>
                                    </div>
                                </div>
                            </div>
                        </GithubCardSkew>
                    ))
                }

            </div >
        </div>
    )
}
