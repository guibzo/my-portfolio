import * as Tooltip from '@radix-ui/react-tooltip'
import ProfilePicture from '/assets/profileImage4.png'

import { technologiesList } from '@/data/technologies'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className='flex flex-col w-full gap-5 lg:w-3/12 md:flex-row lg:flex-col'>
      <aside className='flex flex-col w-full p-5 border rounded-lg border-zinc-600 bg-zinc-900 lg:w-auto'>
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
          <Link
            to='https://discord.com/users/474056096693223425'
            target='_blank'
            className='inline-flex items-center gap-1 text-base transition duration-100 text-sky-600 hover:text-sky-700'
          >
            <i className='flex items-center'>
              <BsDiscord size={15} />
            </i>
            Discord
          </Link>

          <div
            className='inline-flex items-center gap-1 text-base text-gray-500 transition duration-100 hover:cursor-not-allowed'
            aria-disabled='true'
          >
            <i>
              <AiFillLinkedin size={15} />
            </i>
            LinkedIn
          </div>
        </div>
      </aside>

      <aside className='p-5 border rounded-lg border-zinc-600 bg-zinc-900 lg:w-auto'>
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
