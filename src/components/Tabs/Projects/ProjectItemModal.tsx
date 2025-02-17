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
import { useTranslation } from 'react-i18next'

export const ProjectItemModal = ({ project, gridSize }: { project: Project; gridSize: number }) => {
  const { t } = useTranslation()

  return (
    <Carousel className='w-fit h-fit'>
      <Dialog>
        <DialogTrigger asChild>
          <img
            src={project.imagesPath[0]}
            alt={`Project ${project.title} image`}
            className={cn(
              'rounded-xl my-4 object-contain max-h-[300px] mx-auto hover:cursor-zoom-in',
              gridSize === 1 && ''
            )}
            width={420}
            height={200}
          />
        </DialogTrigger>

        <DialogContent size='full-screen' className='overflow-y-auto'>
          <DialogHeader className='mx-auto'>
            <DialogTitle className='text-xl text-center lg:text-2xl'>
              {t(project.title)}
            </DialogTitle>

            <DialogDescription className='max-w-4xl text-center text-muted-foreground'>
              {t(project.description)}
            </DialogDescription>
          </DialogHeader>

          <div className='flex items-center justify-center gap-5 pb-4'>
            <CarouselPrevious className='static bg-white shrink-0 grow-0' />

            <CarouselContent className='max-h-[calc(100vh-200px)]'>
              {project.imagesPath.map((imagePath) => {
                return (
                  <CarouselItem className='h-full rounded-xl'>
                    <img
                      src={imagePath}
                      key={imagePath}
                      width={1200}
                      height={580}
                      alt=''
                      className='object-contain overflow-hidden w-full h-full max-h-[70vh] rounded-xl'
                    />
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <CarouselNext className='static bg-white shrink-0 grow-0' />
          </div>
        </DialogContent>
      </Dialog>
    </Carousel>
  )
}
