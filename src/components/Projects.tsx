import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Task Tracker",
        description: "CLI app to track your tasks and manage your to-do list.",
        tech: "Python",
        link: "https://github.com/goldendevuz/task-tracker.git",
    },
    {
        title: "Expense Tracker",
        description: "simple expense tracker to manage your finances.",
        tech: "Python",
        link: "https://github.com/goldendevuz/expense-tracker.git",
    },
    {
        title: "Number Guessing Game",
        description: "simple number guessing game to test your luck.",
        tech: "Python",
        link: "https://github.com/goldendevuz/number-guessing-game.git",
    },
    {
        title: "Unit Converter",
        description: "Unit converter to convert between different units of measurement.",
        tech: "Python",
        link: "https://github.com/goldendevuz/unit-converter.git",
    },
    {
        title: "Personal Blog",
        description: "personal blog to write and publish articles on various topics.",
        tech: "Python",
        link: "https://github.com/goldendevuz/personal-blog.git",
    },
    {
        title: "Weather API",
        description: "weather app to check the weather forecast for any location.",
        tech: "Python",
        link: "https://github.com/goldendevuz/weather-api-wrapper-service.git",
    },
    {
        title: "Blogging Platform API",
        description: "RESTful API for a personal blogging platform",
        tech: "Python",
        link: "https://github.com/goldendevuz/blogging-platform-api.git",
    },

    // {
    //     title: "Portfolio Website",
    //     description: "simple portfolio website to showcase my projects and skills.",
    //     tech: "React",
    //     link: "https://github.com/goldendevuz/portfolio-website.git",
    // },


//     {
//         title: "Blog API",
//         description: "An API for a personal blog where users can create, read, update, and delete posts. Implement user authentication and basic CRUD operations.",
//         tech: "Python",
//         link: "#",
//     },
//     {
//         title: "To-Do List API",
//         description: "An API for a to-do list application where users can manage their tasks. Include user authentication and the ability to categorize tasks.",
//         tech: "Python",
//         link: "#",
//     },
//     {
//         title: "E-commerce API",
//         description: "An API for a basic e-commerce site where users can browse products, add them to a cart, and checkout. Include user authentication and order management.",
//         tech: "Python",
//         link: "#",
//     },
//     {
//         title: "Event Management API",
//         description: `An API for managing events, where users can create events, register for
// events, and see a list of attendees.`,
//         tech: "Python",
//         link: "#",
//     },
//     {
//         title: "Social Media API",
//         description: `An API for a social media platform where users can create profiles, post
// updates, follow other users, and like posts.`,
//         tech: "Python",
//         link: "#",
//     },
//     {
//         title: "Online Learning Platform API",
//         description: `n API for an online learning platform where instructors can create
// courses, and students can enroll in and complete courses. Include progress
// tracking and course reviews.`,
//         tech: "Python",
//         link: "#",
//     },
//     {
//         title: "Job Board API",
//         description: `n API for a job board where companies can post job listings, and users
// can apply for jobs. Include user authentication and resume uploads.`,
//         tech: "Python",
//         link: "#",
//     },
//     {
//         title: "Real-Time Chat API",
//         description: `An API for a real-time chat application where users can join chat rooms and
// send messages. Implement user authentication and real-time message updates.`,
//         tech: "Python",
//         link: "#",
//     },
]

const techColors = {
    "React": "bg-yellow-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Python": "bg-blue-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}