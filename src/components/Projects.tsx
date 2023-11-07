import { ProjectItem } from './ProjectItem'

export const Projects = () => {
	return (
		<div className="flex flex-col gap-5 max-h-[630px] p-3 overflow-x-hidden overflow-y-scroll">
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
		</div>
	)
}
