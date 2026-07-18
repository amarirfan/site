import type { HTMLAttributes, ButtonHTMLAttributes } from 'astro/types';

interface ButtonProps extends ButtonHTMLAttributes {
  variant?: 'default' | 'outline';
  className?: string;
}

function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-[8px] text-[0.95rem] font-medium transition-colors';
  const variants = {
    default: 'bg-[#141414] text-[#fafaf8] hover:bg-[#223a70]',
    outline: 'border border-[#141414] bg-transparent text-[#141414] hover:bg-[#fafaf8] hover:text-[#223a70]'
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`.trim()} {...props} />
  );
}

export { Button };
