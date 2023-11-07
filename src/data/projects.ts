import { Project } from '../@types/Project'
import * as Icon from '../utils/iconsPath'

export const projectsList: Project[] = [
	{
		title: 'Título do projeto',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reiciendis, fuga voluptates esse autem consectetur voluptatem aut harum quae. Natus, recusandae itaque',
		technologies: [
			{
				name: 'React',
				iconPath: Icon.reactIconPath,
			},
		],
		repositoryLink: 'https://github.com/xbozo',
		deployLink: 'https://vercel.com/',
		imagePath: 'assets/projects/githubBlog2.png',
	},
]
