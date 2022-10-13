import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
	children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
	return (
    <div className={
      clsx(
        'py-4 px-3 h-12 flex items-center gap-3 w-full rounded bg-gray-800  focus-within:ring-2 ring-cyan-300'
      )}>
        {props.children}
    </div>
)
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
 return (
  <Slot className='w-6 h-6 text-gray-400'>
    {props.children}
  </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input className='bg-transparent flex-1 text-gray-100 text-xs outline-none  placeholder:text-gray-400' 
      {...props}
    />
  
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}