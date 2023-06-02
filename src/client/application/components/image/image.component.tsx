import NextImage from 'next/image'

type ImageProps = {
  alt: string
  src: string
  className?: string
}

export function Image({ alt, src, className }: ImageProps) {
  return (
    <div className={`${className} relative`}>
      <NextImage alt={alt} src={src} fill />
    </div>
  )
}
