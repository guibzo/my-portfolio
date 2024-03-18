import { motion } from 'framer-motion'
import './style.css'

export const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -15 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className='flex flex-col justify-between gap-20 p-2 text-base md:text-lg bg-[url("/assets/circlesBG.png")] bg-center bg-cover bg-no-repeat'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-2xl font-bold flex gap-2'>
						<span className='waving'>👋</span>
						Olá, meu nome é Guilherme Viana!
					</h1>

					<p>
						Sou um desenvolvedor <strong>front-end</strong> apaixonado por tecnologia e atuo no
						<strong> desenvolvimento web</strong>.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl font-bold'>Sobre mim</h2>
					<p>
						Possuo experiência em <strong>React</strong> & <strong>Next.js</strong>, além de
						trabalhar com <strong>TypeScript</strong>.
					</p>

					<p>
						Cerca de 2 anos de estudos e cerca de 1 ano de experiência em projetos reais focado na
						stack citada acima. Tento trazer soluções e apresentações <strong>simples</strong> no
						meu dia a dia.
					</p>

					<p>
						Sou mente aberta quanto ao aprendizado e busco tento manter a consistência aprendendo um
						pouco mais a cada dia.
					</p>

					<p>
						Atualmente estudando <strong>Node.js</strong> e <strong>C#</strong>. No futuro pretendo
						experimentar outras áreas da programação, como ampliar meus conhecimentos nos
						ecossistemas que já conheço e também atuar em outros escopos além do desenvolvimento
						web.
					</p>
				</div>
			</div>
		</motion.div>
	)
}
