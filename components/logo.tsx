import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  noLink?: boolean
}

export function Logo({ className = "", size = "md", showText = true, noLink = false }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  const logoContent = (
    <>
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/images/elitecrows-logo.jpg"
          alt="EliteCrows Infotech Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          EliteCrows Infotech
        </span>
      )}
    </>
  )

  if (noLink) {
    return <div className={`flex items-center space-x-2 ${className}`}>{logoContent}</div>
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      {logoContent}
    </Link>
  )
}
