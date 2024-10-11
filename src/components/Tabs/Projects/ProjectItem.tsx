import * as Tooltip from '@radix-ui/react-tooltip'
import { Link } from 'react-router-dom'

import { Project } from '@/@types/Project'
import { AiFillGithub, AiOutlineRightCircle } from 'react-icons/ai'
import { BsFillPinAngleFill } from 'react-icons/bs'

import { cn } from '@/libs/cn'
import { ProjectItemModal } from './ProjectItemModal'

interface ProjectItemProps extends Project {
  gridSize: number
}

export const ProjectItem = ({
  deploy,
  description,
  imagesPath,
  repository,
  technologies,
  title,
  gridSize,
}: ProjectItemProps) => {
  return (
    <li
      className={cn(
        'relative flex flex-col gap-3 p-2 mx-4 border rounded-lg md:p-3 border-border transition-all',
        gridSize === 1 && 'md:flex-row'
      )}
    >
      <div className='absolute top-0 left-0 mt-[-10px] ml-[-15px]'>
        <div className='flex items-center justify-center w-10 h-10 text-xl font-bold rounded-full bg-sky-600'>
          <BsFillPinAngleFill />
        </div>
      </div>

      <div className='flex items-center justify-center flex-1'>
        <ProjectItemModal
          gridSize={gridSize}
          project={{
            deploy,
            description,
            imagesPath,
            repository,
            technologies,
            title,
          }}
        />
      </div>

      <div className={`flex flex-col flex-1 gap-3 p-3 ${gridSize === 1 ? 'gap-3' : 'gap-6'}`}>
        <div className='flex flex-col flex-wrap gap-2'>
          <h2 className='text-xl font-bold truncate'>{title}</h2>
          <p className='text-base text-gray-400 font-secondary'>{description}</p>
        </div>
        <div className='mt-3 text-base'>
          <h4 className='text-lg font-bold'>Tecnologias utilizadas</h4>
          <ul className='flex flex-wrap gap-2 pt-2'>
            {technologies.map((item, index) => (
              <Tooltip.Provider delayDuration={0} key={index}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <li className='flex items-center justify-center w-8 h-8'>
                      <i key={index}>
                        <img src={item.iconPath} alt={item.name} className='w-full' />
                      </i>
                    </li>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className='px-3 py-1 font-medium text-gray-800 bg-white rounded select-none'>
                      {item.name}
                      <Tooltip.Arrow className='mb-2 fill-white' />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
          </ul>
        </div>

        <span className='flex flex-wrap gap-3 pt-5 mt-auto'>
          {/* If deploy or repository isn't available its link is an empty string */}
          {repository.trim() ? (
            <Link
              to={repository}
              target='_blank'
              className='inline-flex items-center gap-1 text-base transition duration-100 text-sky-600 hover:text-sky-700'
            >
              <i>
                <AiFillGithub size={20} />
              </i>
              Repositório
            </Link>
          ) : (
            <span className='inline-flex items-center gap-1 text-base text-gray-500 cursor-not-allowed select-none'>
              <i>
                <AiFillGithub size={20} />
              </i>
              Repositório
            </span>
          )}

          {deploy.trim() ? (
            <Link
              to={deploy}
              target='_blank'
              className='inline-flex items-center gap-1 text-base transition duration-100 text-sky-600 hover:text-sky-700'
            >
              <i>
                <AiOutlineRightCircle size={20} />
              </i>
              Deploy
            </Link>
          ) : (
            <span className='inline-flex items-center gap-1 text-base text-gray-500 cursor-not-allowed select-none'>
              <i>
                <AiOutlineRightCircle size={20} />
              </i>
              Deploy
            </span>
          )}
        </span>
      </div>
    </li>
  )
}
