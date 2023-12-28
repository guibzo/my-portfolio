import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import { Project } from '../@types/Project'

import { AiFillGithub, AiOutlineRightCircle } from 'react-icons/ai'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

export const ProjectItem = ({
	deploy,
	description,
	imagePath,
	repository,
	technologies,
	title,
}: Project) => {
	return (
		<div className='relative flex flex-col gap-3 p-2 mx-2 border rounded-lg md:p-3 border-zinc-600 md:flex-row'>
			<div className='absolute top-0 left-0 mt-[-10px] ml-[-15px]'>
				<div className='flex items-center justify-center w-10 h-10 text-xl font-bold rounded-full bg-sky-600'>
					<BsFillPinAngleFill />
				</div>
			</div>

			<Dialog.Root>
				<Dialog.Trigger asChild>
					<img
						src={imagePath}
						alt=''
						className='object-contain w-full max-h-72 md:w-1/2 rounded-xl hover:cursor-zoom-in'
					/>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className='fixed inset-0 bg-black/60' />
					<motion.div
						initial={{ opacity: 0, y: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.25 }}
					>
						<Dialog.Content className='data-[state=open]:animate-contentShow w-full md:w-auto p-4 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px]  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
							<div className='flex flex-col w-full gap-4 p-4 text-white rounded-lg bg-neutral-900'>
								<Dialog.Title className='m-0 text-xl font-medium tracking-tight text-center text-white md:text-2xl'>
									{title}
								</Dialog.Title>
								<img
									src={imagePath}
									alt=''
									className='object-contain w-full h-full rounded-xl'
								/>

								<Dialog.Description className='px-10 text-sm leading-normal text-center text-gray-400 md:text-base'>
									{description}
								</Dialog.Description>

								<Dialog.Close asChild>
									<button
										className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[30px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none'
										aria-label='Close'
									>
										<IoMdClose className='w-5 h-5' />
									</button>
								</Dialog.Close>
							</div>
						</Dialog.Content>
					</motion.div>
				</Dialog.Portal>
			</Dialog.Root>

			<div className='flex flex-col flex-1 gap-3 p-3'>
				<div className='flex flex-col gap-2'>
					<h2 className='text-xl font-bold truncate'>{title}</h2>
					<p className='flex-wrap text-base text-gray-400 font-secondary'>{description}</p>
				</div>
				<div className='mt-3 text-base'>
					<h4 className='text-lg font-bold'>Tecnologias utilizadas</h4>
					<ul className='flex flex-wrap gap-2 pt-2'>
						{technologies.map((item, index) => (
							<Tooltip.Provider
								delayDuration={0}
								key={index}
							>
								<Tooltip.Root>
									<Tooltip.Trigger asChild>
										<li className='flex items-center justify-center w-8 h-8'>
											<i key={index}>
												<img
													src={item.iconPath}
													alt={item.name}
													className='w-full h-full'
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
				</div>

				<span className='flex gap-3 pt-5 mt-auto'>
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
		</div>
	)
}
