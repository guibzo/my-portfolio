import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Project } from '@/@types/Project'
import { AiFillGithub, AiOutlineRightCircle } from 'react-icons/ai'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

interface ProjectItemProps extends Project {
	gridSize: number
}

export const ProjectItem = ({
	deploy,
	description,
	imagePath,
	repository,
	technologies,
	title,
	gridSize,
}: ProjectItemProps) => {
	return (
		<li
			className={`relative flex flex-col gap-3 p-2 mx-2 border rounded-lg md:p-3 border-zinc-600 transition-all ${
				gridSize === 1 ? 'md:flex-row' : ''
			}`}
		>
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
						className={`object-contain w-full max-h-72 rounded-xl hover:cursor-zoom-in transition-all ${
							gridSize === 1 ? 'md:w-1/2' : ''
						}`}
					/>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className='fixed inset-0 bg-black/60' />
					<motion.div
						initial={{ opacity: 0, y: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.25 }}
					>
						<Dialog.Content className='data-[state=open]:animate-contentShow w-full h-full flex p-8 items-center justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px]  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
							<div className='flex flex-col gap-8 p-4 max text-white rounded-lg w-full h-full bg-neutral-900 justify-center'>
								<div className='flex justify-between'>
									<Dialog.Title className='m-0 flex-1 text-xl tracking-tight text-center text-white font-bold md:text-3xl'>
										{title}
									</Dialog.Title>

									<Dialog.Close asChild>
										<button
											className='text-violet11 hover:bg-violet4 focus:shadow-violet7 inline-flex h-10 w-10 appearance-none items-center justify-center rounded-full focus:outline-none'
											aria-label='Close'
										>
											<IoMdClose className='w-6 h-6' />
										</button>
									</Dialog.Close>
								</div>

								<img
									src={imagePath}
									alt=''
									className='object-contain w-full max overflow-hidden rounded-xl'
								/>

								<Dialog.Description className='px-2 md:px-10 text-sm leading-normal text-center text-gray-400 md:text-base'>
									<p className='border-b border-zinc-600 inline-flex pb-1'>{description}</p>
								</Dialog.Description>
							</div>
						</Dialog.Content>
					</motion.div>
				</Dialog.Portal>
			</Dialog.Root>

			<div className={`flex flex-col flex-1 gap-3 p-3 ${gridSize === 1 ? 'gap-3' : 'gap-6'}`}>
				<div className='flex flex-col gap-2 flex-wrap'>
					<h2 className='text-xl font-bold truncate'>{title}</h2>
					<p className='text-base text-gray-400 font-secondary'>{description}</p>
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
													className='w-full'
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

				<span className='flex gap-3 pt-5 mt-auto flex-wrap'>
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
