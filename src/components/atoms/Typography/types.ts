import { PropsWithChildren } from 'react';

export type TypographyProps = PropsWithChildren & {
  className?: string;
  size:
    | '5xl'
    | '4xxl'
    | '4xl'
    | '3xl'
    | '3xxl'
    | '2xl'
    | 'xl'
    | 'lg'
    | 'base'
    | 'sm'
    | 'xs';
  as:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'paragraph'
    | 'div'
    | 'li'
    | 'label';
};

export type TextProps = PropsWithChildren & {
  className?: string;
};
