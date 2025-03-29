"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export interface ProjectDetailProps {
  project: {
    title: string
    description: string
    longDescription?: string
    image: string
    additionalImages?: string[]
    tags: string[]
    features?: string[]
    technologies?: string[]
    demoUrl: string
    githubUrl: string
    client?: string
    duration?: string
    role?: string
    team?: string[]
    challenges?: {
      challenge: string
      solution: string
    }[]
    testimonial?: {
      quote: string
      author: string
      position: string
    }
    technicalDetails?: {
      architecture?: string
      database?: string
      deployment?: string
      testing?: string
      performance?: string
    }
    skillsUsed?: {
      name: string
      level: number
    }[]
    results?: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {/* <TabsTrigger value="details">Details</TabsTrigger> */}
            {/* <TabsTrigger value="technical">Technical</TabsTrigger> */}
            <TabsTrigger value="gallery" className="hidden md:block">
              Gallery
            </TabsTrigger>
            <TabsTrigger value="results" className="hidden md:block">
              Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About this project</h3>
                  <p className="text-muted-foreground">{project.longDescription || project.description}</p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || project.tags).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
{/* 
          <TabsContent value="details" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {project.client && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Client</h3>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                )}

                {project.duration && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Duration</h3>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>
                )}

                {project.role && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">My Role</h3>
                    <p className="text-muted-foreground">{project.role}</p>
                  </div>
                )}

                {project.team && project.team.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Team</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {project.team.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {project.testimonial && (
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Client Testimonial</h3>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "{project.testimonial.quote}"
                    </blockquote>
                    <div className="mt-2 text-sm">
                      <p className="font-medium">{project.testimonial.author}</p>
                      <p className="text-muted-foreground">{project.testimonial.position}</p>
                    </div>
                  </div>
                )}

                {project.challenges && project.challenges.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Challenges & Solutions</h3>
                    <div className="space-y-4">
                      {project.challenges.map((item, index) => (
                        <div key={index}>
                          <h4 className="font-medium">Challenge:</h4>
                          <p className="text-muted-foreground mb-2">{item.challenge}</p>
                          <h4 className="font-medium">Solution:</h4>
                          <p className="text-muted-foreground">{item.solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent> */}

          {/* <TabsContent value="technical" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {project.technicalDetails && (
                  <>
                    {project.technicalDetails.architecture && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Architecture</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.architecture}</p>
                      </div>
                    )}

                    {project.technicalDetails.database && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Database</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.database}</p>
                      </div>
                    )}

                    {project.technicalDetails.deployment && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.deployment}</p>
                      </div>
                    )}
                  </>
                )}

                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || project.tags).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {project.technicalDetails && (
                  <>
                    {project.technicalDetails.testing && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Testing</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.testing}</p>
                      </div>
                    )}

                    {project.technicalDetails.performance && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Performance Optimizations</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.performance}</p>
                      </div>
                    )}
                  </>
                )}

                {project.skillsUsed && project.skillsUsed.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Skills Applied</h3>
                    <div className="space-y-3">
                      {project.skillsUsed.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent> */}

          <TabsContent value="gallery" className="pt-4">
            {project.additionalImages && project.additionalImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.additionalImages.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No additional images available for this project.</p>
            )}
          </TabsContent>

          <TabsContent value="results" className="pt-4">
            {project.results && project.results.length > 0 ? (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-2">Project Outcomes</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-muted-foreground">No results data available for this project.</p>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

