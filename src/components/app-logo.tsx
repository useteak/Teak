import { Link } from '@tanstack/react-router'

type AppLogoProps = {
  className?: string
  imageClassName?: string
  withLink?: boolean
}

export function AppLogo({
  className,
  imageClassName,
  withLink = true,
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
      <Link to="/home" className={className}>
        {renderImages()}
      </Link>
    )
  }

  return renderImages()
}
