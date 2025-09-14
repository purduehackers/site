/* eslint-disable @next/next/no-img-element */
export const MDXComponents = {
  h1: props => (
    <h1
      {...props}
      className="font-main text-3xl font-bold mt-4 text-amber-500"
    />
  ),
  h2: props => (
    <h2 {...props} className="font-main text-2xl font-bold text-amber-500" />
  ),
  h3: props => (
    <h3 {...props} className="font-main text-xl font-bold text-amber-500" />
  ),
  a: props => (
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
  // eslint-disable-next-line jsx-a11y/alt-text
  img: props => <img {...props} className="rounded" />, // enforcing alt text in mdx file
  ul: props => (
    <ul className="list-disc list-outside ml-6 sm:ml-0">{props.children}</ul>
  ),
  ol: props => (
    <ol className="list-decimal list-inside ml-6">{props.children}</ol>
  ),
  li: props => <li className="mb-2">{props.children}</li>,
  hr: () => <hr className="border-2 border-amber-400 w-1/2 mx-auto my-4" />
};
