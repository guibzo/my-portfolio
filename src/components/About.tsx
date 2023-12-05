import { motion } from 'framer-motion'

export const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -25 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex flex-col gap-5'>
				<h1 className='text-2xl font-bold'>👋 Olá, meu nome é Guilherme Viana!</h1>
				<p className='text-lg '>
					Sou um desenvolvedor <strong>front-end</strong> apaixonado por tecnologia e atuo no
					<strong> desenvolvimento web</strong>!
				</p>

				<h2 className='mt-5 text-2xl font-bold'>Sobre mim</h2>
				<p>
					Com experiência em tecnologias como <strong>React</strong> e <strong>TypeScript</strong>,
					estou sempre em busca de novas oportunidades e desafios para aprimorar minhas habilidades.
					Além disso, sou adepto de metodologias ágeis e colaborativas, acreditando no poder do
					trabalho em equipe para alcançar bons resultados.
				</p>
				<p>
					Atualmente estou solidificando meus conhecimentos em <strong>Next.js</strong> e no futuro
					pretendo atuar como um desenvolvedor <strong>full-stack</strong>, com tecnologias como
					Node.js e Java.
				</p>
				<p>
					Minhas principais plataformas de estudo foram a <strong>B7Web</strong>,
					<strong> Rocketseat</strong> e <strong>Codante.io</strong>, além de estudos independentes.
				</p>
				<p>
					Se você está procurando um profissional comprometido e dedicado, estou pronto para
					contribuir com o sucesso do seu projeto. Vamos trabalhar juntos e transformar ideias em
					realidade!
				</p>
			</div>
			<div className='flex items-end justify-center mt-auto'>
				<footer className='max-w-lg mt-16 text-sm text-center text-gray-500'>
					Atualizado pela última vez em: 13/11/2023
				</footer>
			</div>
		</motion.div>
	)
}
