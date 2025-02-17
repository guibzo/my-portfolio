import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './style.css'

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
