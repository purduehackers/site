import React from 'react'
import clsx from 'clsx'

export function Grid({
  children,
  largeGap,
  overflow,
  className
}: {
  children: React.ReactNode
  largeGap?: boolean
  overflow?: boolean
  className?: string
}): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        `grid grid-cols-2 ${largeGap ? 'gap-4' : 'gap-2'} items-center ${
          overflow ? 'sponsor-overflow' : ''
        }`
      )}
    >
      {children}
    </div>
  )
}
