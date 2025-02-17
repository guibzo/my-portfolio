import * as Tooltip from '@radix-ui/react-tooltip'
import { Link } from 'react-router-dom'

import { Project } from '@/@types/Project'
import { AiFillGithub, AiOutlineRightCircle } from 'react-icons/ai'
import { BsFillPinAngleFill } from 'react-icons/bs'

import { Button } from '@/components/ui/button'
import { cn } from '@/libs/cn'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  const [expanded, setExpanded] = useState(false)
  const [isClamped, setIsClamped] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  const { t } = useTranslation()

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight)
      const maxHeight = lineHeight * 3
      setIsClamped(textRef.current.scrollHeight > maxHeight)
    }
  }, [description])

  return (
    <li
      className={cn(
        'relative flex flex-col gap-3 p-2 mx-4 border rounded-lg md:p-3 border-border transition-all',
        gridSize === 1 && 'md:flex-row'
      )}
    >
      <div className='absolute top-0 z-30 left-0 mt-[-10px] ml-[-15px]'>
        <div className='flex items-center justify-center w-10 h-10 text-xl font-bold rounded-full bg-sky-600'>
          <BsFillPinAngleFill />
        </div>
      </div>

      <div className={cn('flex justify-center', gridSize === 1 && 'flex-1')}>
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

      <div className={cn('flex flex-col flex-1 gap-3 p-3', gridSize === 2 && 'gap-6')}>
        <div className='flex flex-col flex-wrap gap-2'>
          <h2 className='text-xl font-bold truncate'>{t(title)}</h2>

          <div className='relative'>
            <p
              ref={textRef}
              className={cn(
                'text-base text-muted-foreground font-secondary line-clamp-3',
                expanded && 'line-clamp-none'
              )}
            >
              {t(description)}
            </p>

            {isClamped && !expanded && (
              <Button
                variant='link'
                size='fit'
                onClick={() => setExpanded(true)}
                className='mt-1 text-base text-blue-500 hover:underline'
              >
                {t('projects.readMore')}
              </Button>
            )}

            {expanded && (
              <Button
                variant='link'
                size='fit'
                onClick={() => setExpanded(false)}
                className='mt-1 text-base text-blue-500 hover:underline'
              >
                {t('projects.readLess')}
              </Button>
            )}
          </div>
        </div>

        <div className='mt-3 text-base'>
          <h4 className='text-lg font-bold'>{t('projects.technologiesUsed')}</h4>
          <ul className='flex flex-wrap gap-2 pt-2'>
            {technologies.map((item, index) => (
              <Tooltip.Provider delayDuration={0} key={index}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <li className='flex items-center justify-center w-8 h-8'>
                      <i key={index}>
                        <img
                          width={32}
                          height={32}
                          src={item.iconPath}
                          alt={t(item.name)}
                          className='w-full'
                        />
                      </i>
                    </li>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className='px-3 py-1 font-medium text-gray-800 bg-white rounded select-none'>
                      {t(item.name)}
                      <Tooltip.Arrow className='mb-2 fill-white' />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
          </ul>
        </div>

        <span className='flex flex-wrap gap-3 pt-5 '>
          {repository.trim() ? (
            <Link
              to={repository}
              target='_blank'
              className='inline-flex items-center gap-1 text-base transition duration-100 text-sky-600 hover:text-sky-700'
            >
              <AiFillGithub size={20} />
              {t('projects.repository')}
            </Link>
          ) : (
            <span className='inline-flex items-center gap-1 text-base text-gray-500 cursor-not-allowed select-none'>
              <AiFillGithub size={20} />
              {t('projects.repository')}
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
              {t('projects.deploy')}
            </Link>
          ) : (
            <span className='inline-flex items-center gap-1 text-base text-gray-500 cursor-not-allowed select-none'>
              <AiOutlineRightCircle size={20} />
              {t('projects.deploy')}
            </span>
          )}
        </span>
      </div>
    </li>
  )
}
