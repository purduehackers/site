import React from 'react'

export function Grid({
  children,
  largeGap
}: {
  largeGap?: boolean
  children: React.ReactNode
}): JSX.Element {
  return (
    <div
      className={`grid grid-cols-2 ${
        largeGap ? 'gap-4' : 'gap-2'
      } items-center print:mx-auto`}
    >
      {children}
    </div>
  )
}
