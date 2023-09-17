import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './components'

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif">
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </div>
  )
}
