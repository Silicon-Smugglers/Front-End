import React from 'react';

{/*npm install class-variance-authority react tailwind-merge*/}
export function ColorChangingButton({
  component: Component = 'button',
  children,
  className,
  ...buttonProps
}) {
  return (
    <Component
      {...buttonProps}
      className={`p-4 rounded-lg border transition-all duration-300 ease-in-out ${
        buttonProps.pressed
          ? 'bg-white border-red-500 text-red-500 font-semibold text-lg'
          : 'bg-red-500 text-white font-bold text-lg'
      } hover:bg-white hover:border-red-500 hover:text-red-500`}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </Component>
  );
}
