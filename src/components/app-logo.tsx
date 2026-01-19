import { Link } from '@tanstack/react-router'

type AppLogoProps = {
  className?: string
  imageClassName?: string
}

export function AppLogo({ className, imageClassName }: AppLogoProps) {
  const imageClasses = (extra: string) =>
    [imageClassName, extra].filter(Boolean).join(' ')

  return (
    <Link to="/home" className={className}>
      <img
        src="/logo-black.svg"
        alt="Logo"
        className={imageClasses('dark:hidden')}
      />
      <img
        src="/logo-white.svg"
        alt="Logo"
        className={imageClasses('hidden dark:block')}
      />
    </Link>
  )
}
