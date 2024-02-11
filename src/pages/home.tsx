import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

import { Profile } from '@/components/profile'
import { About } from '@/components/tabs/about'
import { Certificates } from '@/components/tabs/certificates'
import { Projects } from '@/components/tabs/projects'

export const Home = () => {
	return (
		<div className='flex justify-center flex-col bg-[url("/assets/spaceBG.png")] w-full bg-cover min-h-screen'>
			<div className='flex items-center w-full p-4 mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='lg:container max-w-6xl mx-auto text-white'
				>
					<main className='flex flex-col gap-5 lg:flex-row'>
						<Profile />
						<section className='flex-1 p-3 border rounded-lg md:p-4 border-zinc-600 bg-zinc-900'>
							<header className='text-xl'>
								<Tabs.Root defaultValue='tab1'>
									<Tabs.List className='flex gap-3 uppercase'>
										<Tabs.Trigger
											value='tab1'
											className='text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500'
										>
											Sobre
										</Tabs.Trigger>

										<Tabs.Trigger
											value='tab2'
											className='text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500'
										>
											Projetos
										</Tabs.Trigger>

										<Tabs.Trigger
											value='tab3'
											className='text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500'
										>
											Certificados
										</Tabs.Trigger>
									</Tabs.List>

									<Tabs.Content
										value='tab1'
										className='mt-6 '
									>
										<About />
									</Tabs.Content>

									<Tabs.Content
										value='tab2'
										className='mt-6'
									>
										<Projects />
									</Tabs.Content>

									<Tabs.Content
										value='tab3'
										className='mt-6'
									>
										<Certificates />
									</Tabs.Content>
								</Tabs.Root>
							</header>
						</section>
					</main>
				</motion.div>
			</div>

			<div>
				<footer className='text-sm py-4 lg:absolute left-[50%] bottom-0 text-center text-gray-500'>
					&copy; Atualizado pela última vez em: 28/01/2024
				</footer>
			</div>
		</div>
	)
}
