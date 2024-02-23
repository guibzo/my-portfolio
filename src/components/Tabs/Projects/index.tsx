import { motion } from 'framer-motion'

import { projectsList } from '@/data/projects'

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
				className={`py-3 px-2 h-[596px] lg:h-[660px] overflow-x-hidden overflow-y-auto transition-all ${
					gridSize === 1 ? 'flex flex-col gap-5' : 'grid grid-cols-2 gap-y-10 gap-x-7'
				}`}
			>
				{projectsList.map((project, index) => (
					<ProjectItem
						key={index}
						title={project.title}
						description={project.description}
						technologies={project.technologies}
						repository={project.repository}
						deploy={project.deploy}
						imagePath={project.imagePath}
						gridSize={gridSize}
					/>
				))}
			</motion.ul>

			<div className='text-end w-full'>
				{gridSize === 1 ? (
					<button
						onClick={() => setGridSize(2)}
						className='p-2.5 mt-2 rounded-lg border border-zinc-600 border-dashed'
					>
						<CiGrid41
							size={16}
							className='text-zinc-300'
						/>
					</button>
				) : (
					<button
						onClick={() => setGridSize(1)}
						className='p-2.5 mt-2 rounded-lg border border-zinc-600 border-dashed'
					>
						<CiGrid2H
							size={16}
							className='text-zinc-300'
						/>
					</button>
				)}
			</div>
		</>
	)
}
