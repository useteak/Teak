import { Link } from '@tanstack/react-router'

type AppLogoProps = {
  imageClassName?: string
  className?: string
  withLink?: boolean
  href?: string
}

export function AppLogo({
  withLink = true,
  imageClassName,
  className,
  href = '/',
}: AppLogoProps) {
  const imageClasses = (extra: string) =>
    [imageClassName, extra].filter(Boolean).join(' ')

  const renderImages = () => (
    <>
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
    </>
  )

  if (withLink) {
    return (
      <Link to={href} className={className}>
        {renderImages()}
      </Link>
    )
  }

  return renderImages()
}
