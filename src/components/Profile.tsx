import * as Tooltip from '@radix-ui/react-tooltip'
import ProfilePicture from '/assets/profileImage3.png'

import { technologiesList } from '@/data/technologies'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Profile = () => {
	return (
		<div className='flex flex-col w-full lg:w-3/12 gap-5 md:flex-row lg:flex-col'>
			<aside className='flex flex-col p-5 border rounded-lg border-zinc-600 bg-zinc-900 h-full w-full md:w-2/3 lg:w-auto'>
				<div>
					<img
						src={ProfilePicture}
						alt=''
						className='max-h-[302px] lg:h-auto w-full object-contain rounded-lg'
					/>
					<div className='flex justify-end md:mr-16 lg:mr-0 -mt-3'>
						<span className='relative flex items-center h-3 w-3'>
							<span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-200 opacity-75' />
							<span className='relative inline-flex rounded-full h-3 w-3 bg-green-400' />
						</span>
					</div>
				</div>

				<strong className='mt-2 text-xl text-white md:text-center lg:text-start'>
					Guilherme Viana
				</strong>
				<span className='text-sm text-gray-500  md:text-center lg:text-start'>
					Front-end Developer
				</span>

				<div className='flex flex-wrap gap-3 mt-2 md:justify-center lg:justify-start'>
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

			<aside className='p-5 border rounded-lg border-zinc-600 bg-zinc-900 md:w-1/3 lg:w-auto'>
				<strong className='text-lg text-white'>Habilidades</strong>
				<ul
					className='
						flex flex-wrap h-[266px] gap-y-2 gap-x-3 mt-2 overflow-x-hidden pr-4 pt-4 justify-center items-center
						md:h-[358px] md:p-0 lg:h-[266px] lg:overflow-y-scroll lg:pr-2 lg:pt-2
					'
				>
					{technologiesList.map((item, index) => {
						return (
							<Tooltip.Provider
								delayDuration={0}
								key={index}
							>
								<Tooltip.Root>
									<Tooltip.Trigger asChild>
										<li>
											<i
												key={index}
												className='flex items-center w-7 h-7 lg:w-9 lg:h-9'
											>
												<img
													src={item.iconPath}
													alt={item.name}
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
						)
					})}
				</ul>
			</aside>
		</div>
	)
}
