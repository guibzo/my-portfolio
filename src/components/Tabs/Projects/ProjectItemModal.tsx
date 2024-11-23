import type { Project } from '@/@types/Project'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/libs/cn'

export const ProjectItemModal = ({ project, gridSize }: { project: Project; gridSize: number }) => {
  return (
    <Carousel>
      <Dialog>
        <DialogTrigger asChild>
          <img
            src={project.imagesPath[0]}
            alt={`Project ${project.title} image`}
            className={cn(
              'rounded-xl my-4 object-contain max-h-[300px] mx-auto hover:cursor-zoom-in',
              gridSize === 1 && ''
            )}
          />
        </DialogTrigger>

        <DialogContent size='full-screen'>
          <DialogHeader className='mx-auto'>
            <DialogTitle className='text-xl text-center lg:text-2xl'>{project.title}</DialogTitle>

            <DialogDescription className='text-muted-foreground'>
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className='flex items-center justify-center gap-5 pb-4'>
            <CarouselPrevious className='static shrink-0 grow-0' />

            <CarouselContent className='max-h-[calc(100vh-200px)]'>
              {project.imagesPath.map((imagePath) => {
                return (
                  <CarouselItem className='h-full'>
                    <img
                      src={imagePath}
                      key={imagePath}
                      alt=''
                      className='object-contain overflow-hidden w-full h-full max-h-[80vh] rounded-xl'
                    />
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <CarouselNext className='static shrink-0 grow-0' />
          </div>
        </DialogContent>
      </Dialog>
    </Carousel>
  )
}
