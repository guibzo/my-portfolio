import { Link } from 'react-router-dom'
import { technologiesList } from '../data/technologies'
import * as Tooltip from '@radix-ui/react-tooltip'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import ProfilePicture from '/assets/profileImage3.png'

export const Profile = () => {
	return (
		<div className="flex flex-col w-full gap-5 md:w-3/12">
			<aside className="flex flex-col h-full p-5 border rounded-lg border-zinc-600 bg-zinc-900">
				<img
					src={ProfilePicture}
					alt=""
					className="h-auto max-w-full rounded-lg"
				/>
				<strong className="mt-2 text-xl text-white">Guilherme Viana</strong>
				<span className="text-sm text-gray-500">Front-end Developer</span>

				<div className="flex flex-wrap gap-5 mt-2">
					<Link
						to="https://github.com/xbozo"
						target="_blank"
						className="inline-flex items-center gap-1 transition duration-100 text-sky-600 hover:text-sky-700"
					>
						<i>
							<AiFillGithub size={20} />
						</i>
						GitHub
					</Link>

					<Link
						to="https://www.linkedin.com/in/guilherme-viana-291a20268/"
						target="_blank"
						className="inline-flex items-center gap-1 transition duration-100 text-sky-600 hover:text-sky-700"
					>
						<i>
							<AiFillLinkedin size={20} />
						</i>
						LinkedIn
					</Link>
				</div>
			</aside>
			<aside className="h-full p-5 border rounded-lg border-zinc-600 bg-zinc-900">
				<strong className="text-lg text-white">Habilidades</strong>
				<ul className="flex flex-wrap gap-2 mt-2">
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
											className="flex items-center w-10 h-10"
										>
											<img
												src={item.iconPath}
												alt={item.name}
												className="max-h-full"
											/>
										</i>
									</li>
								</Tooltip.Trigger>
								<Tooltip.Portal>
									<Tooltip.Content className="px-3 py-1 font-medium text-gray-800 bg-white rounded select-none">
										{item.name}
										<Tooltip.Arrow className="mb-2 fill-white" />
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
