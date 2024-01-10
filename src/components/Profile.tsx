import * as Tooltip from '@radix-ui/react-tooltip'
import { technologiesList } from '../data/technologies'

import { AiFillLinkedin } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ProfilePicture from '/assets/profileImage3.png'

export const Profile = () => {
	return (
		<div className='flex flex-col w-full md:flex-row lg:flex-col lg:w-3/12 gap-5'>
			<aside className='flex flex-col h-full p-5 border rounded-lg border-zinc-600 bg-zinc-900'>
				<div className='relative'>
					<img
						src={ProfilePicture}
						alt=''
						className='h-auto max-w-full rounded-lg'
					/>
					<div className='absolute flex justify-end bottom-0 right-0'>
						<span className='relative flex items-center h-3 w-3'>
							<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75' />
							<span className='relative inline-flex rounded-full h-3 w-3 bg-green-400' />
						</span>
					</div>
				</div>

				<strong className='mt-2 text-xl text-white'>Guilherme Viana</strong>
				<span className='text-sm text-gray-500'>Front-end Developer</span>

				<div className='flex flex-wrap gap-3 mt-2'>
					<Link
						to='https://discord.com/users/474056096693223425'
						target='_blank'
						className='text-base inline-flex items-center gap-1 transition duration-100 text-sky-600 hover:text-sky-700'
					>
						<i className='flex items-center'>
							<BsDiscord size={15} />
						</i>
						Discord
					</Link>

					<Link
						to='https://www.linkedin.com/in/guilherme-viana-291a20268/'
						target='_blank'
						className='text-base inline-flex items-center gap-1 transition duration-100 text-sky-600 hover:text-sky-700'
					>
						<i>
							<AiFillLinkedin size={15} />
						</i>
						LinkedIn
					</Link>
				</div>
			</aside>

			<aside className='h-full p-5 border rounded-lg border-zinc-600 bg-zinc-900 md:h-auto'>
				<strong className='text-lg text-white'>Habilidades</strong>
				<ul className='flex flex-wrap gap-2 mt-2'>
					{technologiesList.map((item, index) => (
						<Tooltip.Provider
							delayDuration={0}
							key={index}
						>
							<Tooltip.Root>
								<Tooltip.Trigger asChild>
									<li>
										<i
											key={index}
											className='flex items-center w-10 h-10'
										>
											<img
												src={item.iconPath}
												alt={item.name}
												className='max-h-full'
											/>
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
			</aside>
		</div>
	)
}
