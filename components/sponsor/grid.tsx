import React from 'react';
import clsx from 'clsx';

export function Grid({
  children,
  largeGap,
  overflow,
  singleRow,
  className
}: {
  children: React.ReactNode;
  largeGap?: boolean;
  overflow?: boolean;
  singleRow?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        `grid items-center break-inside-avoid ${
          singleRow
            ? 'grid-cols-1 md:grid-cols-2 print:grid-cols-2'
            : 'grid-cols-2'
        } ${largeGap ? 'gap-4' : 'gap-2'} ${
          overflow ? 'md:sponsor-overflow print:sponsor-overflow' : ''
        }`
      )}
    >
      {children}
    </div>
  );
}
