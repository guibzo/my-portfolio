import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className="flex items-center justify-between w-full p-6 px-10 font-bold text-gray-100 bg-zinc-900">
			<span className="text-lg uppercase font-secondary">Guilherme Viana</span>
			<nav>
				<ul className="flex gap-6 text-md ">
					<li className="border-b-2 border-transparent hover:border-b-2 hover:border-sky-500">
						<Link to="/">Sobre</Link>
					</li>
					<li className="border-b-2 border-transparent hover:border-b-2 hover:border-sky-500">
						<Link to="/">Projetos</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
