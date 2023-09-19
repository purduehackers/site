import React from 'react'

export function Grid({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="grid grid-cols-2 gap-2 print:mx-auto">{children}</div>
}
