import * as Tabs from '@radix-ui/react-tabs'
import { Profile } from '../components/Profile'
import { About } from '../components/About'
import { Certificates } from '../components/Certificates'
import { Projects } from '../components/Projects'

export const Home = () => {
	return (
		<div className="flex items-center w-screen min-h-screen p-5 mx-auto bg-zinc-900">
			<div className="container max-w-6xl mx-auto text-white">
				<main className="flex gap-5">
					<Profile />
					<section className="flex-1 min-h-full p-4 border rounded-lg border-zinc-600 bg-zinc-800">
						<header className="text-xl">
							<Tabs.Root defaultValue="tab1">
								<Tabs.List className="flex gap-3 uppercase">
									<Tabs.Trigger
										value="tab1"
										className="text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500"
									>
										Sobre
									</Tabs.Trigger>
									<Tabs.Trigger
										value="tab2"
										className="text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500"
									>
										Certificados
									</Tabs.Trigger>
									<Tabs.Trigger
										value="tab3"
										className="text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500"
									>
										Projetos
									</Tabs.Trigger>
								</Tabs.List>
								<Tabs.Content
									value="tab1"
									className="mt-6"
								>
									<About />
								</Tabs.Content>
								<Tabs.Content
									value="tab2"
									className="mt-6"
								>
									<Certificates />
								</Tabs.Content>
								<Tabs.Content
									value="tab3"
									className="mt-6"
								>
									<Projects />
								</Tabs.Content>
							</Tabs.Root>
						</header>
					</section>
				</main>
			</div>
		</div>
	)
}
