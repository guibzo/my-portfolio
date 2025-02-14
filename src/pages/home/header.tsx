import * as Tabs from '@radix-ui/react-tabs'

import { About } from '@/components/Tabs/About'
import { Projects } from '@/components/Tabs/Projects'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ptBRLanguage = {
  name: 'Português',
  key: 'pt-BR',
  flagURL: 'assets/br-flag.svg',
}
const enUSLanguage = {
  name: 'English',
  key: 'en-US',
  flagURL: 'assets/usa-flag.svg',
}

export const Header = () => {
  const { i18n, t } = useTranslation()
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language')
    return storedLanguage ? storedLanguage : i18n.language
  })

  const currentLanguage = language === 'pt-BR' ? ptBRLanguage : enUSLanguage
  const secondaryLanguage = language === 'pt-BR' ? enUSLanguage : ptBRLanguage

  const changeToLanguage = (language: string) => {
    i18n.changeLanguage(language)

    localStorage.setItem('language', language)
    setLanguage(language)
  }

  return (
    <header className='flex w-full h-full'>
      <div className='flex items-start h-full gap-2 text-xl'>
        <Tabs.Root defaultValue='tab1' className='flex flex-col justify-start h-full gap-0'>
          <div className='flex items-center justify-between gap-2'>
            <Tabs.List className='flex gap-3 uppercase'>
              <Tabs.Trigger
                value='tab1'
                className='text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
        data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500'
              >
                {t('tabs.about')}
              </Tabs.Trigger>

              <Tabs.Trigger
                value='tab2'
                className='text-sm font-semibold text-gray-300 uppercase border-b-2 border-transparent transition duration-100 font-secondary hover:border-sky-500
        data-[state=active]:border-sky-500 data-[state=active]:hover:border-sky-600 data-[state=active]:hover:text-sky-600 data-[state=active]:text-sky-500'
              >
                {t('tabs.projects')}
              </Tabs.Trigger>
            </Tabs.List>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant='secondary' size='sm' className='flex items-center gap-2 text-sm'>
                  <img
                    src={currentLanguage.flagURL}
                    className='h-[24px]'
                    alt={`Bandeira representando: ${currentLanguage.name}`}
                  />

                  {currentLanguage.name}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className='p-0'>
                <DropdownMenuItem>
                  <Button
                    onClick={() => changeToLanguage(secondaryLanguage.key)}
                    variant='secondary'
                    className='flex items-center justify-start w-48 gap-2 text-sm'
                    size='sm'
                  >
                    <img
                      src={secondaryLanguage.flagURL}
                      className='h-[24px]'
                      alt={`Bandeira representando: ${secondaryLanguage.name}`}
                    />

                    {secondaryLanguage.name}
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs.Content value='tab1' className='h-[calc(100%-46px)] mt-6'>
            <About />
          </Tabs.Content>

          <Tabs.Content value='tab2' className='mt-6'>
            <Projects />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </header>
  )
}
