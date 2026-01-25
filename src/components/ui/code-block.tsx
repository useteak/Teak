import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import { HugeiconsIcon } from '@hugeicons/react'
import { CopyIcon, Tick02Icon } from '@hugeicons/core-free-icons'
import { Button } from './button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { Skeleton } from './skeleton'
import type { IconSvgElement } from '@hugeicons/react'
import type { BundledLanguage } from 'shiki'
import { cn } from '@/utils/classnames'

type CodeBlockLanguage = {
  language: BundledLanguage
  icon: IconSvgElement
  label: string
  code: string
}

export default function CodeBlock({
  defaultLanguage,
  className,
  languages,
}: {
  languages: Array<CodeBlockLanguage>
  defaultLanguage?: BundledLanguage
  className?: string
}) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultLanguage ?? languages[0]?.language,
  )
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const activeLang = languages.find((l) => l.language === activeTab)
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
      className={cn('gap-0 w-full', className)}
    >
      <TabsList className="w-full justify-start rounded-b-none bg-white dark:bg-[#1e1e1e] group-data-horizontal/tabs:h-12 gap-0 border-t border-x dark:border-none">
        <div className="flex gap-2 flex-1 overflow-x-auto p-2">
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
        </div>
        <div className="ml-auto p-2">
          <Button variant="ghost" size="icon-sm" onClick={handleCopy}>
            <HugeiconsIcon icon={copied ? Tick02Icon : CopyIcon} />
            <span className="sr-only">{copied ? 'Copied' : 'Copy'}</span>
          </Button>
        </div>
      </TabsList>
      {languages.map((language) => {
        return (
          <CodeTab
            key={language.language}
            language={language.language}
            code={language.code}
          />
        )
      })}
    </Tabs>
  )
}

function CodeTab({
  language,
  code,
}: {
  language: BundledLanguage
  code: string
}) {
  const [html, setHtml] = useState<string>()

  useEffect(() => {
    if (!html && code) {
      codeToHtml(code, {
        lang: language,
        theme: 'dark-plus',
      })
        .then(setHtml)
        .catch((e) => {
          console.error(e)
        })
    }
  }, [code, html])

  return (
    <TabsContent value={language} className="max-w-full">
      {html ? (
        <Code code={html} />
      ) : (
        <Skeleton className="h-72 rounded-t-none" />
      )}
    </TabsContent>
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
