import { ProjectItem } from './ProjectItem'
import { projectsList } from '../data/projects'

export const Projects = () => {
	return (
		<div className="flex flex-col gap-5 max-h-[630px] p-2 md:p-3 overflow-x-hidden overflow-y-scroll">
			{projectsList.map((project, index) => (
				<ProjectItem
					key={index}
					title={project.title}
					description={project.description}
					technologies={project.technologies}
					repository={project.repository}
					deploy={project.deploy}
					imagePath={project.imagePath}
				/>
			))}
		</div>
	)
}
