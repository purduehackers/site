export function Tier({
  title,
  description,
  price,
  mostPopular
}: {
  title: string
  description: string
  price?: number
  mostPopular?: boolean
}): JSX.Element {
  return (
    <div
      className={`font-main ${
        mostPopular
          ? 'bg-gradient-to-br from-amber-100 to-amber-400 relative'
          : 'bg-amber-300'
      } rounded-sm border-2 border-black flex flex-col gap-2 p-2 break-inside-avoid shadow-blocks-sm`}
    >
      {mostPopular ? (
        <div className="absolute top-0 right-0 transform rotate-12 print:rotate-[35deg] print:translate-x-4 print:translate-y-2 bg-white border-2 border-black px-1 rounded-sm">
          <p className="text-sm">Most Popular</p>
        </div>
      ) : null}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600 font-mono text-lg">
          {price ? `$${price.toLocaleString('en-US')}` : 'Contact us'}
        </p>
      </div>
      <p className="text-base">{description}</p>
    </div>
  )
}
