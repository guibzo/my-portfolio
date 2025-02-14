import { motion } from 'framer-motion'

import { projectsList } from '@/data/projects'

import { Button } from '@/components/ui/button'
import { cn } from '@/libs/cn'
import { useState } from 'react'
import { CiGrid2H, CiGrid41 } from 'react-icons/ci'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  const [gridSize, setGridSize] = useState(1)

  return (
    <>
      <motion.ul
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'py-3 sm:px-2 max-h-[550px] lg:max-h-[640px] overflow-x-hidden overflow-y-auto transition-all flex flex-col gap-5',
          gridSize === 2 && 'grid grid-cols-2 gap-y-10 gap-x-7'
        )}
      >
        {projectsList.map((project, index) => (
          <ProjectItem key={index} gridSize={gridSize} {...project} />
        ))}
      </motion.ul>

      <div className='w-full text-end'>
        {gridSize === 1 ? (
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setGridSize(2)}
            className='p-2.5 mt-2 rounded-lg border border-border border-dashed hover:bg-transparent hover:brightness-75'
          >
            <CiGrid41 size={16} className='text-zinc-300' />
          </Button>
        ) : (
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setGridSize(1)}
            className='p-2.5 mt-2 rounded-lg border border-border border-dashed hover:bg-transparent hover:brightness-75'
          >
            <CiGrid2H size={16} className='text-zinc-300' />
          </Button>
        )}
      </div>
    </>
  )
}
