import Image from 'next/image'

export const MDXComponents = {
  h1: (props) => (
    <h1
      {...props}
      className="font-main text-3xl font-bold mt-4 text-amber-500"
    />
  ),
  h2: (props) => (
    <h2 {...props} className="font-main text-2xl font-bold text-amber-500" />
  ),
  a: (props) => (
    <a
      target="_blank"
      className="text-amber-500 hover:text-amber-400 transition"
      style={{
        textDecoration: 'underline',
        textUnderlineOffset: '4px'
      }}
      {...props}
    ></a>
  ),
  img: (props) => (
    <Image
      {...props}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: '100vw',
        height: 'auto',
        borderRadius: '8px'
      }}
    />
  )
}
