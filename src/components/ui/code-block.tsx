import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import { HugeiconsIcon } from '@hugeicons/react'
import { CopyIcon, Tick02Icon } from '@hugeicons/core-free-icons'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import type { IconSvgElement } from '@hugeicons/react'
import type { BundledLanguage } from 'shiki'
import { mergeClassNames } from '@/utils/classnames'

type CodeBlockLanguage = {
  language: BundledLanguage
  icon: IconSvgElement
  label: string
  code: string
}

export default function CodeBlock({
  languages: _langs,
  defaultLanguage,
  className,
}: {
  languages: Array<CodeBlockLanguage>
  defaultLanguage?: BundledLanguage
  className?: string
}) {
  const [languages, setLanguages] = useState<Array<CodeBlockLanguage>>([])
  const [activeTab, setActiveTab] = useState<string>(
    defaultLanguage ?? _langs[0]?.language,
  )
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    ;(async () => {
      const langsWithHtml = await Promise.all(
        _langs.map(async (lang) => ({
          ...lang,
          code: await codeToHtml(lang.code, {
            lang: lang.language,
            theme: theme === 'dark' ? 'github-dark' : 'github-light-default',
          }),
        })),
      )

      setLanguages(langsWithHtml)
    })()
  }, [_langs, theme])

  const handleCopy = async () => {
    const activeLang = _langs.find((l) => l.language === activeTab)
    if (activeLang) {
      await navigator.clipboard.writeText(activeLang.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!languages.length) {
    return null
  }

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className={mergeClassNames('gap-0 w-full', className)}
    >
      <TabsList className="w-full justify-start rounded-b-none bg-white dark:bg-[#1e1e1e] p-2 group-data-horizontal/tabs:h-12 gap-1 border-t border-x dark:border-none">
        {languages.map(({ icon: Icon, label, language }) => (
          <TabsTrigger
            key={language}
            value={language}
            className="flex-0 font-normal border-none data-active:bg-muted group-data-[variant=default]/tabs-list:data-active:shadow-none"
          >
            <HugeiconsIcon icon={Icon} className="size-4" />
            {label}
          </TabsTrigger>
        ))}
        <Button
          variant="ghost"
          size="icon-sm"
          className="ml-auto"
          onClick={handleCopy}
        >
          <HugeiconsIcon icon={copied ? Tick02Icon : CopyIcon} />
          <span className="sr-only">{copied ? 'Copied' : 'Copy'}</span>
        </Button>
      </TabsList>
      {languages.map((language) => {
        return (
          <TabsContent
            key={language.language}
            value={language.language}
            className="max-w-full"
          >
            <Code code={language.code} />
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

function Code({ code }: { code: string }) {
  return (
    <div
      className="[&_pre]:p-3 [&_pre]:pt-1 [&_pre]:rounded-b-md [&_pre]:overflow-x-auto [&_pre]:leading-relaxed [&_pre]:border-b [&_pre]:border-x dark:[&_pre]:border-none w-full"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}
