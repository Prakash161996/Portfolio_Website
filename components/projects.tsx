"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import ProjectDetail from "@/components/project-detail"

const projects = [
  {
    title: "Campusmind",
    description:
      "Campus Mind is a student information system designed for US colleges, providing tools for campus resource access, wellness support, and engagement through personalized surveys and analytics.",
    longDescription:
      "Campus Mind is a student information system built for US colleges to enhance student engagement and well-being. It provides personalized campus resources, wellness support, and interactive surveys to streamline student services. I contributed to developing a responsive UI, interactive features, and conducting usability testing to improve the user experience. ",
    image: "/ProjectImages/campusmind.png",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React.js", "JavaScript", "Material-UI", "ReduxToolkit",  "Redux", "JWT Authentication", "Google Auth", "Apex Charts"],
    technologies: ["React.js", "JavaScript", "Material-UI", "ReduxToolkit",  "Redux", "Google Auth", "Apex Charts", "Chart.js"],
    features: [
      "Personalized Campus Resources for academic and wellness support.",
      "User authentication and profile management",
      "Interactive Surveys & Feedback to enhance student engagement.",
      "User-Friendly Dashboards for tracking progress and resources",
      "Responsive & Accessible UI for seamless user experience",
      "Performance Analytics to generate insights for institutions.",
    ],
    client: "Fashion Retailer Inc.",
    duration: "2 year months (April 2023 - Dec 2025)",
    role: "Lead Frontend Developer",
    team: [
      "John Doe - Frontend Developer",
      "Jane Smith - Backend Developer",
      "Mike Johnson - UI/UX Designer",
      "Sarah Williams - Project Manager",
    ],
    challenges: [
      {
        challenge:
          "Implementing a responsive product catalog that could handle thousands of products with various filtering options while maintaining performance.",
        solution:
          "Utilized virtualized lists and implemented server-side filtering with efficient API endpoints. Added pagination and lazy loading to improve initial load times.",
      },
      {
        challenge: "Integrating multiple payment gateways while maintaining a consistent user experience.",
        solution:
          "Created an abstraction layer for payment processors that standardized the checkout flow regardless of the payment method chosen by the user.",
      },
    ],
    testimonial: {
      quote:
        "The e-commerce platform exceeded our expectations. Sales have increased by 35% since launch, and customer feedback has been overwhelmingly positive.",
      author: "Emily Johnson",
      position: "CTO, Fashion Retailer Inc.",
    },
    technicalDetails: {
      architecture:
        "The application follows a microservices architecture with separate services for product management, user authentication, order processing, and payment handling.",
      database: "MongoDB for product and user data, with Redis for caching and session management.",
      deployment: "Containerized with Docker and deployed on AWS using ECS. CI/CD pipeline with GitHub Actions.",
      testing: "Jest for unit tests, Cypress for end-to-end testing, and Lighthouse for performance monitoring.",
      performance:
        "Implemented image optimization, code splitting, and server-side rendering for critical pages. Achieved a Lighthouse performance score of 95+.",
    },
    skillsUsed: [
      { name: "Frontend Development", level: 90 },
      { name: "API Integration", level: 85 },
      { name: "Performance Optimization", level: 80 },
      { name: "UI/UX Design", level: 75 },
    ],
    results: [
      " Built reusable components, improving development speed by 30%",
      "optimizing load times by 20%.",
      " Resolved front-end issues, increasing user satisfaction by 15%",
      "Orchestrated deployment of SEO optimizations, improving search visibility by 60%",
      "driving 25% increase in user engagement",
    ],
    demoUrl: "https://campusmind.io",
    githubUrl: "#",
  },
  {
    title: "Maintenance Dashboard",
    description: "The Maintenance Dashboard is a web-based application designed to efficiently manage maintenance tickets. It allows users to create, assign, and track maintenance requests seamlessly.",
    longDescription:
      "This task management application helps teams organize and track their work efficiently. It provides a collaborative environment where team members can create, assign, and monitor tasks in real-time, ensuring everyone stays on the same page.",
    image: "/ProjectImages/mainDashboard.png",

    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React", "JavaScript", "Redux Toolkit", "Soft-Ui", "JWT", "Restful API", "Chart.js", "JWT Authentication"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux", "JWT"],
    features: [
      "Real-time task updates with Socket.io",
      "Team workspaces with customizable permissions",
      "Kanban board view for visual task management",
      "Task commenting and file attachments",
      "Due date tracking with notifications",
      "Time tracking and reporting",
    ],
    client: "Tech Solutions Agency",
    duration: "6 months (May 2022 - Oct 2022)",
    role: "Full Stack Developer",
    team: [
      "John Doe - Full Stack Developer",
      "Alex Brown - Backend Developer",
      "Lisa Chen - Frontend Developer",
      "David Wilson - QA Engineer",
    ],
    challenges: [
      {
        challenge: "Implementing real-time updates across multiple clients while maintaining data consistency.",
        solution:
          "Used Socket.io for real-time communication and implemented optimistic UI updates with server validation to ensure data integrity.",
      },
      {
        challenge: "Designing a flexible permission system that could accommodate various team structures and roles.",
        solution:
          "Created a role-based access control system with customizable permission sets that could be assigned at both the workspace and project levels.",
      },
    ],
    testimonial: {
      quote:
        "This task management tool has transformed how our teams collaborate. Projects that used to take weeks are now completed in days with better coordination.",
      author: "Robert Thompson",
      position: "COO, Tech Solutions Agency",
    },
    technicalDetails: {
      architecture:
        "MERN stack application with a RESTful API backend and React frontend. WebSocket server for real-time updates.",
      database: "MongoDB with Mongoose ODM for data modeling and validation.",
      deployment: "Backend deployed on Digital Ocean, frontend on Vercel with automated deployments from GitHub.",
      testing: "Jest for backend testing, React Testing Library for frontend components, and Postman for API testing.",
      performance:
        "Implemented query optimization, indexing, and caching strategies to handle large workspaces with thousands of tasks.",
    },
    skillsUsed: [
      { name: "Full Stack Development", level: 85 },
      { name: "Real-time Applications", level: 90 },
      { name: "Database Design", level: 80 },
      { name: "Authentication & Authorization", level: 85 },
    ],
    results: [
      "Reduced project completion time by 30% for teams using the platform",
      "Improved task visibility and accountability across departments",
      "Eliminated an estimated 15 hours per week of status update meetings",
      "Successfully onboarded 5 enterprise clients with 100+ users each",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Register Karo Clone Website",
    description: "This project involved converting a Figma design into a fully responsive web application using React.js and Bootstrap. It ensures seamless adaptability across mobile, tablet, and desktop screens while maintaining a pixel-perfect design and smooth user experience.",
    longDescription:
      "This portfolio website template provides developers and designers with a professional platform to showcase their skills and projects. It features a modern design with smooth animations and is fully responsive to ensure a great experience on all devices.",
    image: "/ProjectImages/register-clone.png",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["React.js", "JavaScript", "BootStrap", "CSS", "HTML"],
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Responsive design that works on all devices",
      "Smooth animations and transitions",
      "Dark/light mode support",
      "Project showcase with detailed views",
      "Contact form with validation",
      "SEO optimized",
    ],
    client: "Self-initiated",
    duration: "2 months (Nov 2022 - Dec 2022)",
    role: "Designer & Developer",
    challenges: [
      {
        challenge:
          "Creating a design that stands out while maintaining professional aesthetics and optimal performance.",
        solution:
          "Used a minimalist design approach with strategic animations that enhance the user experience without overwhelming the interface or impacting performance.",
      },
      {
        challenge:
          "Implementing a theme system that works flawlessly across all components and persists user preferences.",
        solution:
          "Developed a comprehensive theming system using CSS variables and context API, with local storage for persistence.",
      },
    ],
    technicalDetails: {
      architecture: "Next.js with App Router for server-side rendering and static site generation capabilities.",
      deployment: "Deployed on Vercel with automatic previews for each commit.",
      testing: "Tested across multiple browsers and devices to ensure consistent experience.",
      performance:
        "Optimized images, implemented lazy loading, and minimized JavaScript bundle size for fast loading times.",
    },
    skillsUsed: [
      { name: "Frontend Development", level: 95 },
      { name: "UI/UX Design", level: 85 },
      { name: "Animation", level: 90 },
      { name: "Responsive Design", level: 95 },
    ],
    results: [
      "Template has been used by over 200 developers to create their personal portfolios",
      "Featured in design showcases and developer communities",
      "Lighthouse performance score of 98/100",
      "Fully accessible with 100% WCAG compliance",
    ],
    demoUrl: "https://register-karo-figma-desgin.vercel.app/",
    githubUrl: "https://github.com/Prakash161996/RegisterKaro_FigmaDesgin",
  },
  {
    title: "ALCAMI Clone App",
    description: "This project is a fully responsive web page developed using HTML, CSS, and Bootstrap, ensuring a seamless and adaptive experience across all devices. It features a modern UI with a well-structured layout, leveraging Bootstrap's utilities for enhanced styling and functionality. The design prioritizes performance, accessibility, and user experience, making it both visually appealing and highly functional.",
    longDescription:
      "This weather dashboard provides users with accurate and up-to-date weather information for any location around the world. It displays current conditions, hourly forecasts, and extended forecasts in an intuitive and visually appealing interface.",
    image: "/ProjectImages/clone.png",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: ["HTML", "CSS", "BootStrap", "JavaScript"],
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "Tailwind CSS", "Axios"],
    features: [
      "Current weather conditions with visual indicators",
      "5-day forecast with hourly breakdowns",
      "Location search with autocomplete",
      "Geolocation for automatic local weather",
      "Interactive charts for temperature, precipitation, and wind",
      "Weather alerts and notifications",
    ],
    client: "Weather Info Inc.",
    duration: "3 months (Aug 2022 - Oct 2022)",
    role: "Frontend Developer",
    team: ["John Doe - Frontend Developer", "Maria Garcia - UI Designer", "Tom Wilson - API Integration Specialist"],
    challenges: [
      {
        challenge: "Handling and visualizing complex weather data in an intuitive way for users.",
        solution:
          "Created custom visualization components using Chart.js that present weather data in easily understandable formats with interactive elements.",
      },
      {
        challenge: "Optimizing API calls to minimize costs while maintaining up-to-date information.",
        solution:
          "Implemented a caching strategy that stores weather data locally and refreshes it based on time elapsed and user interaction patterns.",
      },
    ],
    testimonial: {
      quote:
        "The weather dashboard has become an essential tool for our field teams. The intuitive design and reliable data have improved our operational efficiency significantly.",
      author: "James Peterson",
      position: "Operations Director, Weather Info Inc.",
    },
    technicalDetails: {
      architecture: "React single-page application with Redux for state management.",
      deployment: "Deployed on Netlify with continuous deployment from GitHub.",
      testing: "Jest and React Testing Library for component testing, with E2E tests using Cypress.",
      performance:
        "Implemented data caching, code splitting, and progressive loading to optimize performance even on slower connections.",
    },
    skillsUsed: [
      { name: "Data Visualization", level: 90 },
      { name: "API Integration", level: 85 },
      { name: "Responsive Design", level: 80 },
      { name: "Geolocation Services", level: 75 },
    ],
    results: [
      "Application used by over 50,000 users monthly",
      "Average user session time increased from 2 minutes to 5 minutes",
      "Weather prediction accuracy rate of 95% compared to actual conditions",
      "Featured in several tech blogs for its intuitive design and functionality",
    ],
    demoUrl: "https://cube-hq-alcami.vercel.app/",
    githubUrl: "https://github.com/Prakash161996/CubeHq_Alcami",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const openProjectDetail = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsDetailOpen(true)
  }

  const closeProjectDetail = () => {
    setIsDetailOpen(false)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents different skills and technologies I've worked
            with. Click on a project to see more details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer" onClick={() => openProjectDetail(project)}>
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" />
                      View Details
                    </Button>
                  </div> */}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild size="sm" variant="default">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <ProjectDetail project={selectedProject} isOpen={isDetailOpen} onClose={closeProjectDetail} /> */}
    </section>
  )
}

