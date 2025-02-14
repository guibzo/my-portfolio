import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './style.css'

// título: Rocket Notes API
// descrição Back-end em Node da aplicação Rocket Notes. Abrange fluxo de autenticação e armazenamento em banco de notas, usuários e suas configurações.
// título: Rocket Notes
// descrição Projeto de uma plataforma de anotações, com perfis individuais, manipulação das anotações, etc.
// título: Pomodoro
// descrição Um timer em estilo Pomodoro, com histórico.
// título: devstore
// descrição Um mini e-commerce de roupas. Projeto atualmente superficial e sem integração de pagamentos.
// título: Expert Notes
// descrição Uma aplicação de manipulação de notas com opção de Text-to-Speech.
// título: Polls API
// descrição Back-end de um sistema de enquetes. Permite a votação em opções de enquetes e consulta dos votos.
// título: Ignite Feed
// descrição Um projeto de uma rede social, com feed e perfis individuais.
// título: Ignite Shop
// descrição Projeto de um E-Commerce de roupas, com integração ao Stripe, página de checkout e confirmação de compra.
// título: DT Money
// descrição Um banco de transações, com histórico de operações.
// título: Pizza Shop
// descrição Uma loja de pizzas virtual, com carrinho e seleção de pizzas.
// título: BMI Calculator
// descrição Um calculador de IMC, onde permite o usuário inserir a altura e o peso e indica um resultado com feedback.
// título: Cardastro
// descrição Um painel de cadastro de veículos, com processo de CRUD completo.
// título: Dev Memory
// descrição Um jogo da memória com diferentes cards e sempre com rodadas e posições aleatórias.
// título: To-do List
// descrição Uma lista em formato "to-do", com suas tarefas. Permite adicionar novas tarefas, marcar atuais como concluídas, etc.
// título: To-do List 2
// descrição Outro projeto de uma lista "to-do" distinto.
// título: Post List
// descrição Uma simples lista de posts, que permite a manipulação dos posts em formato CRUD.
// título: Train Me
// descrição Uma landing page de uma academia.
// título: Newsletter Form
// descrição Um interface com formulário para receber notificações de uma newsletter.
// título: QR Code Component
// descrição Uma simples interface com um QR Code.
// título: Urna Eletrônica
// descrição Uma urna digital falsa.
// título: Login Panel
// descrição Interface de um painel de login (apenas visual).
// título: RPG Game
// descrição Um jogo de RPG local simples.
// título: Simple Chat
// descrição Um chat que permite definir o nome de usuário e enviar mensagens localmente.
// título: Clime Visualizer
// descrição Um visualizador do clima, que usa uma API e permite o usuário inserir o local que deseja ver o clima.
// título: Tic Tac Toe
// descrição Um jogo da velha onde os jogadores podem jogar localmente.
// título: Canvas Screen
// descrição Uma tela de desenho canvas funcional.
// título: Quiz Game
// descrição Um jogo quiz, com perguntas e respostas pré-definidas e com um feedback do resultado no final do jogo.
// título: Battery Play
// descrição Um tocador de bateria funcional, com áudios, sequência de sons, ativação por teclado, etc.
// título: Drag & Drop
// descrição Um projeto de drag and drop (arrastar e soltar), que permite arrastar objetos do ponto X para o ponto Y.
// título: Analogical Watch
// descrição Um relógio analógico funcional e com ponteiros dinâmicos.

export const About = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={{ height: '100%', flexDirection: 'column', display: 'flex' }}
    >
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col overflow-hidden flex-1 gap-10 p-2 bg-[url("/assets/circlesBG.png")] text-base lg:gap-20 md:text-lg'>
          <div className='space-y-6'>
            <h1 className='flex gap-2 text-xl font-bold lg:text-2xl'>
              <span className='waving'>👋</span>
              {t('profile.about.title')}
            </h1>

            <p>
              {t('profile.about.textOne')} <strong>{t('profile.about.strongOne')}</strong>{' '}
              {t('profile.about.textTwo')} <strong>{t('profile.about.strongTwo')}</strong>{' '}
              {t('profile.about.textThree')} <strong>{t('profile.about.strongThree')}</strong>.
            </p>

            <div className='mt-6 space-y-2.5'>
              <h2 className='text-xl font-bold lg:text-2xl'>{t('profile.about.aboutMe')}</h2>

              <div className='space-y-6'>
                <p>
                  {t('profile.about.textFour')} <strong>{t('profile.about.strongFour')}</strong>{' '}
                  {t('profile.about.textFive')} <strong>{t('profile.about.strongFive')}</strong>,{' '}
                  {t('profile.about.textSix')} <strong>{t('profile.about.strongSix')}</strong>{' '}
                  {t('profile.about.textSeven')} <strong>{t('profile.about.strongSeven')}</strong>.{' '}
                  {t('profile.about.textEight')}. {t('profile.about.textEleven')}{' '}
                  <strong>{t('profile.about.strongEleven')}</strong> {t('profile.about.textTwelve')}
                </p>

                <p>
                  {t('profile.about.textThirteen')}{' '}
                  <strong>{t('profile.about.strongThirteen')}</strong>{' '}
                  {t('profile.about.textFourteen')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
