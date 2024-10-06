import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

import { Profile } from '@/components/Profile'
import { About } from '@/components/Tabs/About'
import { Projects } from '@/components/Tabs/Projects'

export const Home = () => {
  return (
    <div className='flex relative  justify-center flex-col bg-[url("/assets/spaceBG.png")] w-full bg-cover min-h-screen'>
      <div className='flex items-center w-full px-4 py-12 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='mx-auto text-white sm:container'
        >
          <main className='flex flex-col gap-5 lg:flex-row'>
            <Profile />
            <section className='flex-1 p-3 border rounded-lg md:p-4 border-zinc-600 bg-zinc-900'>
              <header className='flex gap-2 text-xl jusify-between'>
                <Tabs.Root defaultValue='tab1'>
                  <div className='flex items-center justify-between gap-2'>
                    <Tabs.List className='flex gap-3 uppercase'>
                      <Tabs.Trigger
                        value='tab1'
                        className='text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500'
                      >
                        Sobre
                      </Tabs.Trigger>

                      <Tabs.Trigger
                        value='tab2'
                        className='text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
										data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500'
                      >
                        Projetos
                      </Tabs.Trigger>
                    </Tabs.List>
                  </div>

                  <Tabs.Content value='tab1' className='mt-6 '>
                    <About />
                  </Tabs.Content>

                  <Tabs.Content value='tab2' className='mt-6'>
                    <Projects />
                  </Tabs.Content>
                </Tabs.Root>
              </header>
            </section>
          </main>
        </motion.div>
      </div>

      <div className='absolute bottom-0 left-[50%] translate-x-[-50%] w-full'>
        <footer className='py-4 text-sm text-center text-gray-500'>
          &copy; Atualizado pela última vez em: 06/10/2024
        </footer>
      </div>
    </div>
  )
}
