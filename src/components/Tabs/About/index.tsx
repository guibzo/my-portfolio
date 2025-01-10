import { motion } from 'framer-motion'
import './style.css'

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={{ height: '100%' }}
    >
      <div className='flex flex-col justify-between h-full gap-10 p-2 text-base bg-center bg-no-repeat bg-cover lg:gap-20 md:text-lg'>
        <div className='flex flex-col gap-4'>
          <h1 className='flex gap-2 text-xl font-bold lg:text-2xl'>
            <span className='waving'>👋</span>
            Olá, meu nome é Guilherme Viana!
          </h1>

          <p>
            Sou um desenvolvedor <strong>front-end</strong> com cerca de três anos de experiência em
            <strong> desenvolvimento web</strong>.
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold lg:text-2xl'>Sobre mim</h2>
          <p>
            No meu trabalho, uso principalmente <strong>React</strong> e{' '}
            <strong>React Native</strong>, com experiência em seus devidos frameworks{' '}
            <strong>Next.js</strong> e <strong>Expo</strong>. Estou sempre buscando construir
            interfaces claras e funcionais. Além disso, sempre utilizo <strong>TypeScript</strong>,
            visando um código mais robusto e confiável.
          </p>

          <p>
            Gosto de transformar problemas complexos em soluções <strong>simples</strong> e
            eficientes, buscando sempre entregar um trabalho de qualidade.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
