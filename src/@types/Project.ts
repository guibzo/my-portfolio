type Technology = {
	name: string
	iconPath: string
}

export type Project = {
	title: string
	description: string
	technologies: Technology[]
	repository: string
	deploy: string
	imagePath: string
}
