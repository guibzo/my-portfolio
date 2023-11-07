type Technology = {
	name: string
	iconPath: string
}

export type Project = {
	title: string
	description: string
	technologies: Technology[]
	repositoryLink: string
	deployLink: string
	imagePath: string
}
