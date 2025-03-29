"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Atom,
  Braces,
  Cloud,
  Cpu,
  Database,
  FileJson,
  GitBranch,
  Globe,
  Layout,
  Layers,
  LineChart,
  Palette,
  PenTool,
  Server,
  ShieldCheck,
  Smartphone,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"

// Define skills with icons and categories
const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: [
      { name: "React", icon: <Atom className="h-8 w-8" />, level: 90, color: "#61DAFB" },
      { name: "Next.js", icon: <Globe className="h-8 w-8" />, level: 85, color: "#000000" },
      { name: "TypeScript", icon: <Braces className="h-8 w-8" />, level: 80, color: "#3178C6" },
      { name: "JavaScript", icon: <FileJson className="h-8 w-8" />, level: 95, color: "#F7DF1E" },
      { name: "HTML/CSS", icon: <Layout className="h-8 w-8" />, level: 90, color: "#E34F26" },
      { name: "Tailwind CSS", icon: <Palette className="h-8 w-8" />, level: 85, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", icon: <Server className="h-8 w-8" />, level: 80, color: "#339933" },
      { name: "Express", icon: <Cpu className="h-8 w-8" />, level: 75, color: "#000000" },
      { name: "MongoDB", icon: <Database className="h-8 w-8" />, level: 70, color: "#47A248" },
      { name: "GraphQL", icon: <Layers className="h-8 w-8" />, level: 65, color: "#E10098" },
      { name: "REST APIs", icon: <GitBranch className="h-8 w-8" />, level: 85, color: "#0096FF" },
    ],
  },
  {
    category: "Other",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: "UI/UX Design", icon: <PenTool className="h-8 w-8" />, level: 75, color: "#FF61F6" },
      { name: "Responsive Design", icon: <Smartphone className="h-8 w-8" />, level: 90, color: "#3B82F6" },
      { name: "Performance", icon: <Cpu className="h-8 w-8" />, level: 80, color: "#10B981" },
      { name: "Data Visualization", icon: <LineChart className="h-8 w-8" />, level: 70, color: "#F59E0B" },
      { name: "Security", icon: <ShieldCheck className="h-8 w-8" />, level: 65, color: "#EF4444" },
      { name: "REST APIs", icon: <GitBranch className="h-8 w-8" />, level: 85, color: "#0096FF" },
      // { name: "Cloud Services", icon: <Cloud className="h-8 w-8" />, level: 75, color: "#6366F1" },
    ],
  },
]
 
// Technology logos with their respective colors
const technologies = [
  { name: "React", logo: "/icons/icons8-react-96.png", color: "#61DAFB" },
  { name: "Next.js", logo: "/icons/icons8-nextjs-96.png", color: "#000000" },
  { name: "TypeScript", logo: "/icons/icons8-typescript-96.png", color: "#3178C6" },
  { name: "JavaScript", logo: "/icons/icons8-javascript-96.png", color: "#F7DF1E" },
  { name: "Tailwind CSS", logo: "/icons/icons8-tailwindcss-96.png", color: "#06B6D4" },
  { name: "Material UI", logo: "/icons/icons8-material-ui-96.png", color: "#007FFF"  },
  { name: "HTML", logo: "/icons/icons8-html-96.png", color: "#E34F26" },
  { name: "CSS", logo: "/icons/icons8-css-96.png", color: "#1572B6" },
  
] 

// Skill Card Component with animations
const SkillCard = ({ skill, index, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="w-full"
    >
      <Card
        className="h-full overflow-hidden border-2 transition-all duration-300"
        style={{
          borderColor: hovered ? skill.color : "transparent",
          boxShadow: hovered ? `0 10px 25px -5px ${skill.color}30` : "none",
        }}
      >
        <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
          <motion.div
            className="rounded-full p-4 mb-4"
            style={{
              backgroundColor: `${skill.color}20`,
              color: skill.color,
            }}
            animate={
              hovered
                ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5, repeat: 0 },
                  }
                : {}
            }
          >
            {skill.icon}
          </motion.div>

          <h4 className="font-medium mb-3 text-lg">{skill.name}</h4>

          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm">
              <span>Proficiency</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: delay + index * 0.1 + 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </div>

            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{
                  duration: 1.5,
                  delay: delay + index * 0.1 + 0.2,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Technology Logo Component with animations
const TechLogo = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.15,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.5 },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-2"
    >
      <div
        className="relative p-4 rounded-xl transition-all duration-300 flex items-center justify-center"
        style={{
          backgroundColor: hovered ? `${tech.color}20` : "transparent",
          boxShadow: hovered ? `0 10px 25px -5px ${tech.color}40` : "none",
        }}
      >
        <Image
          src={tech.logo || "/placeholder.svg"}
          alt={tech.name}
          width={80}
          height={80}
          className={`transition-all duration-500 ${hovered ? "" : "grayscale opacity-70"}`}
        />

        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 rounded-xl"
            style={{
              border: `2px solid ${tech.color}`,
              zIndex: -1,
            }}
          />
        )}
      </div>

      <motion.span
        className="text-sm font-medium"
        animate={hovered ? { color: tech.color } : { color: "" }}
        transition={{ duration: 0.3 }}
      >
        {tech.name}
      </motion.span>
    </motion.div>
  )
}

// Radar Chart for skill visualization
const RadarChart = ({ skills, size = 300 }) => {
  const canvasRef = useRef(null)
  const centerX = size / 2
  const centerY = size / 2
  const radius = size * 0.4

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw background circles
    ctx.strokeStyle = "#e2e8f0"
    ctx.fillStyle = "#f8fafc10"

    for (let i = 1; i <= 4; i++) {
      const circleRadius = (radius / 4) * i
      ctx.beginPath()
      ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.fill()
    }

    // Calculate points for each skill
    const points = skills.map((skill, index) => {
      const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2
      const value = skill.level / 100
      return {
        x: centerX + radius * value * Math.cos(angle),
        y: centerY + radius * value * Math.sin(angle),
        color: skill.color,
      }
    })

    // Draw skill lines
    skills.forEach((_, index) => {
      ctx.strokeStyle = "#e2e8f0"
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
      ctx.stroke()
    })

    // Draw skill labels
    ctx.fillStyle = "#94a3b8"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    skills.forEach((skill, index) => {
      const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2
      const labelX = centerX + (radius + 20) * Math.cos(angle)
      const labelY = centerY + (radius + 20) * Math.sin(angle)
      ctx.fillText(skill.name, labelX, labelY)
    })

    // Draw skill area
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
    }

    ctx.closePath()
    ctx.fillStyle = "rgba(99, 102, 241, 0.2)"
    ctx.fill()

    ctx.lineWidth = 2
    ctx.strokeStyle = "rgba(99, 102, 241, 0.8)"
    ctx.stroke()

    // Draw points
    points.forEach((point) => {
      ctx.beginPath()
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2)
      ctx.fillStyle = point.color
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })
  }, [skills, size, centerX, centerY, radius])

  return <canvas ref={canvasRef} width={size} height={size} className="mx-auto" />
}

// Main Skills Section Component
export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("grid")
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and the tools I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              {skillsData.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category.toLowerCase()}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span>{category.category}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillsData.map((category) => (
            <TabsContent key={category.category} value={category.category.toLowerCase()} className="space-y-8">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-lg border p-1 bg-muted/50">
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                      activeTab === "grid" ? "bg-background shadow-sm" : "text-muted-foreground"
                    }`}
                    onClick={() => setActiveTab("grid")}
                  >
                    Grid View
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                      activeTab === "chart" ? "bg-background shadow-sm" : "text-muted-foreground"
                    }`}
                    onClick={() => setActiveTab("chart")}
                  >
                    Radar Chart
                  </button>
                </div>
              </div>

              {activeTab === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center py-8"
                >
                  <RadarChart skills={category.skills} size={400} />
                </motion.div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            },
          }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Technologies I Work With</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
            {technologies.map((tech, index) => (
              <TechLogo key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

