import { certificatesList } from '@/data/certificates'
import { motion } from 'framer-motion'

export const Certificates = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
			className='flex flex-col h-[596px] lg:h-[660px] overflow-x-hidden overflow-y-scroll'
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
		</motion.div>
	)
}
