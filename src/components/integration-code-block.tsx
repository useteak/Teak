import { useMemo } from 'react'
import {
  ComputerTerminal01Icon,
  PythonIcon,
  Typescript01Icon,
} from '@hugeicons/core-free-icons'
import type { BundledLanguage } from 'shiki'
import CodeBlock from '@/components/ui/code-block'
import {
  getCurlIntegrationCode,
  getJavaScriptIntegrationCode,
  getPythonIntegrationCode,
} from '@/helpers/integration-code'

type IntegrationCodeBlockProps = {
  organizationId: string
  projectId: string
  defaultLanguage?: BundledLanguage
  hideComments?: boolean
  className?: string
}

export function IntegrationCodeBlock({
  organizationId,
  projectId,
  defaultLanguage,
  hideComments = false,
  className,
}: IntegrationCodeBlockProps) {
  const languages = useMemo(() => {
    const curlCode = getCurlIntegrationCode(
      organizationId,
      projectId,
      hideComments,
    )

    const javascriptCode = getJavaScriptIntegrationCode(
      organizationId,
      projectId,
      hideComments,
    )

    const pythonCode = getPythonIntegrationCode(
      organizationId,
      projectId,
      hideComments,
    )

    return [
      {
        language: 'typescript' as const,
        icon: Typescript01Icon,
        code: javascriptCode,
        label: 'JS/TS',
      },
      {
        language: 'python' as const,
        icon: PythonIcon,
        code: pythonCode,
        label: 'Python',
      },
      {
        language: 'shell' as const,
        icon: ComputerTerminal01Icon,
        code: curlCode,
        label: 'Curl',
      },
    ]
  }, [organizationId, projectId, hideComments])

  return (
    <CodeBlock
      languages={languages}
      defaultLanguage={defaultLanguage}
      className={className}
    />
  )
}
