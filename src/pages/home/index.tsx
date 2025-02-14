import { motion } from 'framer-motion'

import { Profile } from '@/components/Profile'
import { useTranslation } from 'react-i18next'
import { Header } from './header'

export const Home = () => {
  const { t } = useTranslation()

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
            <section className='flex-1 p-3 bg-center bg-no-repeat border rounded-lg md:p-4 border-border bg-background'>
              <Header />
            </section>
          </main>
        </motion.div>
      </div>

      <div className='absolute bottom-0 left-[50%] translate-x-[-50%] w-full'>
        <footer className='py-4 text-sm text-center text-gray-500 break-words text-wrap'>
          {t('footer')}
        </footer>
      </div>
    </div>
  )
}
