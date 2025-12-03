'use client';

import type { ReactNode } from 'react';

import { usePathname } from 'next/navigation';

import { DashboardLayout } from 'src/layouts/dashboard';

export const LayoutDecider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <>{pathname.includes('winner') ? children : <DashboardLayout>{children}</DashboardLayout>}</>
  );
};
