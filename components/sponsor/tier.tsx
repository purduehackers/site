export function Tier({
  title,
  description,
  price,
  prefix,
  recommended
}: {
  title: string;
  description: string;
  price?: number;
  prefix?: string;
  recommended?: boolean;
}): JSX.Element {
  const handleTierClick = () => {
    // TODO: Add donation link
  };
  return (
    <div
      // onClick={handleTierClick}
      className={`font-main h-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-95 ${
        recommended
          ? 'bg-gradient-to-br from-amber-400 to-amber-400 via-amber-200 relative'
          : 'bg-amber-300'
      } rounded-sm border-2 border-black flex flex-col gap-2 p-2 break-inside-avoid shadow-blocks-sm`}
    >
      {recommended ? (
        <div className="absolute top-0 right-0 transform rotate-12 print:rotate-[35deg] print:translate-x-4 print:translate-y-2 bg-white border-2 border-black px-1 rounded-sm">
          <p className="text-base print:text-sm">Recommended</p>
        </div>
      ) : null}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700 font-mono text-lg">
          {price
            ? `${prefix || ''}$${price.toLocaleString('en-US')}`
            : 'Contact us'}
        </p>
      </div>
      <p className="text-base print:text-sm">{description}</p>
    </div>
  );
}
