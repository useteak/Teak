import { useMemo } from 'react'
import {
  ComputerTerminal01Icon,
  Diamond02Icon,
  PhpIcon,
  PythonIcon,
  Typescript01Icon,
} from '@hugeicons/core-free-icons'
import type { BundledLanguage } from 'shiki'
import CodeBlock from '@/components/ui/code-block'
import {
  getCurlIntegrationCode,
  getJavaScriptIntegrationCode,
  getPhpIntegrationCode,
  getPythonIntegrationCode,
  getRubyIntegrationCode,
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

    const phpCode = getPhpIntegrationCode(
      organizationId,
      projectId,
      hideComments,
    )

    const rubyCode = getRubyIntegrationCode(
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
        language: 'php' as const,
        icon: PhpIcon,
        code: phpCode,
        label: 'PHP',
      },
      {
        language: 'ruby' as const,
        icon: Diamond02Icon,
        code: rubyCode,
        label: 'Ruby',
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
