import { Button } from './ui/button'
import { useStore } from '@nanostores/react'
import { useRouter } from 'next/router'
import { $platformInfo, $userInfo } from '@/store/user'
import { getUserInfo } from '@/api/user'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPlatformInfo } from '@/api/platform'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './language-switcher'

export const Header = () => {
  return (
    <div className="flex mr-auto justify-end items-center gap-2">
      <LanguageSwitcher />
    </div>
  )
}

export const RegisterAndLogin = () => {
  const router = useRouter()
  const userInfo = useStore($userInfo)
  const { t } = useTranslation()

  const platformInfo = useQuery({
    queryKey: ['platformInfo'],
    queryFn: getPlatformInfo,
  })

  useEffect(() => {
    $platformInfo.set(platformInfo.data)
  }, [platformInfo])

  const userInfoQuery = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  })

  useEffect(() => {
    $userInfo.set(userInfoQuery.data?.userInfo)
  }, [userInfoQuery])

  return (
    <>
      {!userInfo && (
        <Button variant={'ghost'} onClick={() => router.push('/login')}>
          {t('common.login')}
        </Button>
      )}
      {!userInfo && (
        <Button variant={'ghost'} onClick={() => router.push('/register')}>
          {t('common.register')}
        </Button>
      )}
    </>
  )
}