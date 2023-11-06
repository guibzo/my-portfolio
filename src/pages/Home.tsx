import * as Tabs from '@radix-ui/react-tabs'
import { Profile } from '../components/Profile'
import { About } from '../components/About'

export const Home = () => {
	return (
		<div className="w-screen min-h-screen mx-auto bg-zinc-900">
			<div className="container max-w-6xl mx-auto mt-16 text-white">
				<main className="flex gap-5">
					<Profile />
					<section className="flex-1 min-h-full p-4 border rounded-lg border-zinc-600 bg-zinc-800">
						<header className="text-xl">
							<Tabs.Root>
								<Tabs.List className="flex gap-3 uppercase">
									<Tabs.Trigger
										value="tab1"
										className="text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent font-secondary hover:border-b-2 hover:border-sky-500"
									>
										Sobre
									</Tabs.Trigger>
									<Tabs.Trigger
										value="tab2"
										className="text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent font-secondary hover:border-b-2 hover:border-sky-500"
									>
										Certificados
									</Tabs.Trigger>
									<Tabs.Trigger
										value="tab3"
										className="text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent font-secondary font-nunito hover:border-b-2 hover:border-sky-500"
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
							</Tabs.Root>
						</header>
					</section>
				</main>
			</div>
		</div>
	)
}
