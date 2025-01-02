import Image from 'next/image'

interface CardProps {
  title: string
  imageUrl: string
}

export function Card({ title, imageUrl }: CardProps) {
  return (
    <div className="group relative h-64 w-full overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="mb-2 text-center text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  )
}
