import { motion } from 'framer-motion'

import { certificatesList } from '../data/certificates'

export const Certificates = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
			className='flex flex-col max-h-[630px] overflow-x-hidden overflow-y-scroll'
		>
			{certificatesList.map((item, index) => (
				<div
					className='flex flex-col items-center p-2 m-4 my-2 border rounded-lg border-zinc-600'
					key={index}
				>
					<img
						src={item.imagePath}
						alt=''
						className='max-w-full rounded'
					/>
				</div>
			))}

			<div className='max-w-lg mx-auto mt-4'>
				<footer className='text-sm text-center text-gray-500 '>
					Demais certificados estão em processo de emissão ou ainda não foram concluídas 100% das
					aulas referente ao curso para solicitar.
				</footer>
			</div>
		</motion.div>
	)
}
