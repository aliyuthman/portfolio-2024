import { Button } from '@nextui-org/react'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Your Name</h1>
      <p className="text-xl">Web Developer & Designer</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          title="Project 1"
          description="A brief description of project 1"
          imageUrl="/path/to/project1-image.jpg"
        />
        <ProjectCard
          title="Project 2"
          description="A brief description of project 2"
          imageUrl="/path/to/project2-image.jpg"
        />
        <ProjectCard
          title="Project 3"
          description="A brief description of project 3"
          imageUrl="/path/to/project3-image.jpg"
        />
      </div>
      <Button color="primary">View More Projects</Button>
    </main>
  )
}
