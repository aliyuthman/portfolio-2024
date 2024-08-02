'use client';

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => console.log('Project clicked')}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[140px]"
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{title}</b>
        <p className="text-default-500">{description}</p>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
