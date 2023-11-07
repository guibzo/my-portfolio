import { Link } from 'react-router-dom'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { AiFillGithub, AiOutlineRightCircle } from 'react-icons/ai'
import { Project } from '../@types/Project'

export const ProjectItem = ({
	deployLink,
	description,
	imagePath,
	repositoryLink,
	technologies,
	title,
}: Project) => {
	return (
		<div className="relative flex gap-3 mx-2 border rounded-lg max-h-80 border-zinc-600">
			<div className="absolute top-0 left-0 mt-[-10px] ml-[-15px]">
				<div className="flex items-center justify-center w-10 h-10 text-xl font-bold rounded-full bg-sky-600">
					<BsFillPinAngleFill />
				</div>
			</div>
			<img
				src={imagePath}
				alt=""
				className="w-1/2 rounded-lg"
			/>
			<div className="flex flex-col flex-1 gap-3 p-3">
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">{title}</h2>
					<p className="text-base text-gray-300 font-secondary">{description}</p>
				</div>
				<div className="mt-3 text-base">
					<h4 className="text-lg font-bold">Tecnologias utilizadas</h4>
					<ul className="flex flex-wrap gap-2 pt-2">
						{technologies.map((technology, index) => (
							<li
								key={index}
								className="w-8 h-8"
							>
								<i>
									<img
										src={technology.iconPath}
										alt={technology.name}
									/>
								</i>
							</li>
						))}
					</ul>
				</div>

				<span className="flex gap-3 mt-auto">
					<Link
						to={repositoryLink}
						target="_blank"
						className="inline-flex items-center gap-1 text-base transition duration-100 text-sky-600 hover:text-sky-700"
					>
						<i>
							<AiFillGithub size={20} />
						</i>
						Repositório
					</Link>
					<Link
						to={deployLink}
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
