import React from 'react'

export function Grid({
  children,
  largeGap,
  overflow
}: {
  children: React.ReactNode
  largeGap?: boolean
  overflow?: boolean
}): JSX.Element {
  return (
    <div
      className={`grid grid-cols-2 ${
        largeGap ? 'gap-4' : 'gap-2'
      } items-center ${overflow ? 'sponsor-overflow' : ''}`}
    >
      {children}
    </div>
  )
}
