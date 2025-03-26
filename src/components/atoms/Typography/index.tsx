import { FC } from 'react';
import { TextProps, TypographyProps } from './types';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const typographyVariants = cva(
  'inline-flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        heading: `antialiased font-semibold`,
        body: ` antialiased`,
        label: `antialiased`,
      },
      size: {
        '5xl': 'text-5xl leading-[3.125rem]',
        '4xxl': 'text-[40px] leading-[3.125rem]',
        '4xl': 'text-4xl leading-[3.125rem]',
        '3xxl': 'text-[32px] leading-9',
        '3xl': 'text-3xl leading-9',
        '2xl': 'text-2xl leading-8',
        xl: 'text-xl leading-6',
        lg: 'text-lg leading-6',
        base: 'text-base leading-5',
        sm: 'text-sm leading-[0.875rem]',
        xs: 'text-xs leading-3',
      },
    },
    defaultVariants: {
      variant: 'body',
      size: 'base',
    },
  }
);

export const Typography: FC<TypographyProps> = ({ ...props }) => {
  const { size, as, children, className } = props;

  let variant: 'label' | 'heading' | 'body' | null | undefined = undefined;
  switch (as) {
    case 'paragraph':
      variant = 'body';
      break;
    case 'div':
      variant = 'body';
      break;
    case 'li':
      variant = 'body';
      break;
    case 'label':
      variant = 'label';
      break;
    default:
      variant = 'heading';
      break;
  }

  const typographies = {
    h1: (p: TextProps) => (
      <h1 className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </h1>
    ),
    h2: (p: TextProps) => (
      <h2 className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </h2>
    ),
    h3: (p: TextProps) => (
      <h3 className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </h3>
    ),
    h4: (p: TextProps) => (
      <h4 className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </h4>
    ),
    h5: (p: TextProps) => (
      <h5 className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </h5>
    ),
    h6: (p: TextProps) => (
      <h6 className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </h6>
    ),
    paragraph: (p: TextProps) => (
      <p className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </p>
    ),
    li: (p: TextProps) => (
      <li className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </li>
    ),
    div: (p: TextProps) => (
      <div className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </div>
    ),
    label: (p: TextProps) => (
      <label className={cn(typographyVariants({ variant, size }), p.className)}>
        {p.children}
      </label>
    ),
  };

  return typographies[as]({
    className,
    children,
  });
};
