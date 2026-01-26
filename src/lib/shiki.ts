import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import type { HighlighterCore } from 'shiki/core'

// Singleton highlighter instance
let highlighterPromise: Promise<HighlighterCore> | null = null

/**
 * Get a cached Shiki highlighter instance with only the languages we need.
 * Uses dynamic imports for chunk splitting - languages and themes are only
 * loaded when the highlighter is first requested.
 * Uses the JavaScript regex engine for smaller bundle size and faster startup.
 */
export function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      // Dynamic imports for chunk splitting
      themes: [import('@shikijs/themes/dark-plus')],
      langs: [
        import('@shikijs/langs/typescript'),
        import('@shikijs/langs/python'),
        import('@shikijs/langs/php'),
        import('@shikijs/langs/ruby'),
        import('@shikijs/langs/shellscript'),
        import('@shikijs/langs/json'),
      ],
      // JavaScript engine - smaller bundle, no WASM binary needed
      engine: createJavaScriptRegexEngine(),
    })
  }
  return highlighterPromise
}

/**
 * Highlight code with the cached highlighter instance.
 */
export async function highlightCode(
  code: string,
  lang: string,
): Promise<string> {
  const highlighter = await getHighlighter()

  // Map common language aliases
  const langMap: Record<string, string> = {
    js: 'typescript',
    javascript: 'typescript',
    ts: 'typescript',
    sh: 'shellscript',
    bash: 'shellscript',
    shell: 'shellscript',
    zsh: 'shellscript',
  }

  const resolvedLang = langMap[lang] ?? lang

  return highlighter.codeToHtml(code, {
    lang: resolvedLang,
    theme: 'dark-plus',
  })
}
