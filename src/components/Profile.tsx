import * as Tooltip from '@radix-ui/react-tooltip'
import ProfilePicture from '/assets/profileImage4.png'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { contacts } from '@/constants/contacts'
import { technologiesList } from '@/data/technologies'
import { LucideInfo } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Profile = () => {
  return (
    <div className='flex flex-col w-full gap-5 lg:w-3/12 md:flex-row lg:flex-col'>
      <aside className='flex flex-col w-full p-5 border rounded-lg border-border bg-background lg:w-auto'>
        <div>
          <img
            src={ProfilePicture}
            alt='Foto de perfil'
            className='object-contain mx-auto rounded-lg lg:w-full lg:h-auto'
          />

          <div className='justify-end hidden -mt-3 lg:flex'>
            <span className='flex items-center w-3 h-3'>
              <span className='absolute inline-flex w-3 h-3 bg-green-200 rounded-full opacity-75 animate-ping' />
              <span className='inline-flex w-3 h-3 bg-green-400 rounded-full' />
            </span>
          </div>
        </div>

        <strong className='mx-auto mt-2 text-xl text-white lg:mx-0 md:text-center lg:text-start'>
          Guilherme Viana
        </strong>
        <span className='mx-auto text-sm text-gray-500 lg:mx-0 md:text-center lg:text-start'>
          Front-end Developer
        </span>

        <div className='flex flex-wrap gap-3 mx-auto mt-2 lg:mx-0 md:justify-center lg:justify-start'>
          <div className='lg:hidden'>
            <Link
              to='https://linktr.ee/guibzo'
              target='_blank'
              className='flex items-center gap-2 hover:cursor-pointer'
            >
              <span className='transition duration-75 text-sky-600 hover:text-sky-700 '>
                Contatos
              </span>

              <LucideInfo className='mt-[3px] size-4 text-zinc-400' />
            </Link>
          </div>
          <div className='hidden lg:block'>
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <div className='flex items-center gap-2 hover:cursor-default'>
                  <span className='transition duration-75 text-sky-600 hover:text-sky-700 '>
                    Contatos
                  </span>

                  <LucideInfo className='mt-[3px] size-4 text-zinc-400' />
                </div>
              </HoverCardTrigger>

              <HoverCardContent className='w-80'>
                <ul className='space-y-4'>
                  {contacts.map((contact) => {
                    return (
                      <li className='flex space-x-4' key={contact.name}>
                        <Avatar className='rounded-none'>
                          <AvatarImage src={contact.assetPath} />
                          <AvatarFallback />
                        </Avatar>

                        <div className='space-y-1'>
                          <h4 className='text-sm font-semibold'>{contact.name}</h4>
                          <Link
                            to={contact.link}
                            target='_blank'
                            className='text-sm font-semibold transition duration-75 text-sky-600 hover:text-sky-700'
                          >
                            <p className='text-sm'>{contact.contact}</p>
                          </Link>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </aside>

      <aside className='p-5 border rounded-lg border-border bg-zinc-900 lg:w-auto'>
        <strong className='text-lg text-white'>Habilidades</strong>
        <ul className='flex flex-wrap items-center justify-center max-h-[220px] lg:max-h-[260px] pt-4 pr-4 mt-2 overflow-x-hidden overflow-y-scroll gap-4 lg:gap-y-2 lg:gap-x-3 md:p-0 lg:pr-2 lg:pt-2'>
          {technologiesList.map((item, index) => {
            return (
              <Tooltip.Provider delayDuration={0} key={index}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <li>
                      <i key={index} className='flex items-center w-7 h-7 lg:w-9 lg:h-9'>
                        <img src={item.iconPath} alt={item.name} />
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
            )
          })}
        </ul>
      </aside>
    </div>
  )
}
