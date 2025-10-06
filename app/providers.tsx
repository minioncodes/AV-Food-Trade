'use client';

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import StoreProvider from "./StoreProvider";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <StoreProvider>{children}</StoreProvider>
    </SessionProvider>
  );
}
