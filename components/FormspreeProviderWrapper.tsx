"use client";

import { FormspreeProvider } from "@formspree/react";

export default function FormspreeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
      {children}
    </FormspreeProvider>
  );
}
