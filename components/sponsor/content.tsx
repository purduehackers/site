import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from './mdx-components';

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif flex flex-col gap-4 text-lg print:text-base">
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </div>
  );
}
