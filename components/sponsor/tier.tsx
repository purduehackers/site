export function Tier({
  title,
  price,
  description
}: {
  title: string
  price: number
  description: string
}): JSX.Element {
  return (
    <div className="font-main bg-amber-300 rounded-sm border-2 border-black flex flex-col gap-2 p-2 break-inside-avoid shadow-blocks-sm">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600 font-mono">
          {`$${price.toLocaleString('en-US')}`}
        </p>
      </div>
      <p>{description}</p>
    </div>
  )
}
