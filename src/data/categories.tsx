import type { ReactNode } from 'react';

const icon = (children: ReactNode) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export interface Category {
  label: string;
  filter: string;
  icon: ReactNode;
}

export const categories: Category[] = [
  { label: 'Camisetas', filter: 'camiseta', icon: icon(<path d="M14 6 6 11l3 7 4-2v18h14V16l4 2 3-7-8-5c-1 3-4 4-6 4s-5-1-6-4Z" />) },
  { label: 'Calças', filter: 'calça', icon: icon(<path d="M12 4h16l2 32h-8l-2-20-2 20h-8Z" />) },
  { label: 'Bonés', filter: 'boné', icon: icon(<path d="M7 25c0-9 6-15 14-15s13 5 13 13v2H7Zm27 0c4 0 6 1 6 2H12" />) },
  { label: 'Headphones', filter: 'headphone', icon: icon(<path d="M8 26v-6C8 12 13 7 20 7s12 5 12 13v6M8 22h4v10H8Zm24 0h-4v10h4Z" />) },
  { label: 'Tênis', filter: 'tênis', icon: icon(<path d="M4 28h32v4H4Zm1 0v-9l8 3 5-5 4 3 6 2c6 1 8 3 8 6" />) },
];
