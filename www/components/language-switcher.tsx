import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-4 w-4" />
          <span className="sr-only">{t('language.toggle')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => i18n.changeLanguage('zh')}
          className={i18n.language === 'zh' ? 'bg-accent' : ''}
        >
          {t('language.zh')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => i18n.changeLanguage('en')}
          className={i18n.language === 'en' ? 'bg-accent' : ''}
        >
          {t('language.en')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
