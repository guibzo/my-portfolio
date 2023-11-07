import { Link } from 'react-router-dom'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { AiFillGithub, AiOutlineRightCircle } from 'react-icons/ai'
import githubblog from '../../public/assets/projects/githubBlog2.png'
import reacticon from '../../public/assets/technologies/react-logo-2OJ3K26H.svg'

export const ProjectItem = () => {
	return (
		<div className="relative flex gap-3 mx-2 border rounded-lg max-h-80 border-zinc-600">
			<div className="absolute top-0 left-0 mt-[-10px] ml-[-15px]">
				<div className="flex items-center justify-center w-10 h-10 text-xl font-bold rounded-full bg-sky-600">
					<BsFillPinAngleFill />
				</div>
			</div>
			<img
				src={githubblog}
				alt=""
				className="w-1/2 rounded-lg"
			/>
			<div className="flex flex-col flex-1 gap-3 p-3">
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Título do projeto</h2>
					<p className="text-base text-gray-300 font-secondary">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reiciendis, fuga voluptates
						esse autem consectetur voluptatem aut harum quae. Natus, recusandae itaque
					</p>
				</div>
				<div className="mt-3 text-base">
					<h4 className="text-lg font-bold">Tecnologias utilizadas</h4>
					<ul className="flex gap-2 pt-2">
						<li className="w-8 h-8">
							<i>
								<img
									src={reacticon}
									alt=""
								/>
							</i>
						</li>
						<li className="w-8 h-8">
							<i>
								<img
									src={reacticon}
									alt=""
								/>
							</i>
						</li>
						<li className="w-8 h-8">
							<i>
								<img
									src={reacticon}
									alt=""
								/>
							</i>
						</li>
						<li className="w-8 h-8">
							<i>
								<img
									src={reacticon}
									alt=""
								/>
							</i>
						</li>
					</ul>
				</div>

				<span className="flex gap-3 mt-auto">
					<Link
						to="https://github.com/xbozo"
						target="_blank"
						className="inline-flex items-center gap-1 text-base transition duration-100 text-sky-600 hover:text-sky-700"
					>
						<i>
							<AiFillGithub size={20} />
						</i>
						Repositório
					</Link>
					<Link
						to="https://github.com/xbozo"
						target="_blank"
						className="inline-flex items-center gap-1 text-base transition duration-100 text-sky-600 hover:text-sky-700"
					>
						<i>
							<AiOutlineRightCircle size={20} />
						</i>
						Deploy
					</Link>
				</span>
			</div>
		</div>
	)
}
