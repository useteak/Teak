import { AppLogo } from './app-logo'
import { config } from '@/config'

export default function AppFooter() {
  return (
    <footer className="p-6 h-32 flex flex-col gap-3 items-center justify-center bg-muted/50 dark:bg-card border-t">
      <AppLogo
        className="p-1.5 opacity-50 hover:opacity-100 transition-opacity"
        imageClassName="h-4"
      />
      <p className="text-sm text-muted-foreground" suppressHydrationWarning>
        © {config.productName} {new Date().getFullYear()} · Built with ❤️ in 🇸🇪
      </p>
    </footer>
  )
}
