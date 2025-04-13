/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { toast as sonnerToast } from "sonner";

function toast({
  title,
  description,
  action,
  ...props
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  [key: string]: any;
}) {
  console.log("ASDASDASDA");
  const id = sonnerToast(title, {
    description,
    action,
    ...props,
  });

  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (opts: any) =>
      sonnerToast.dismiss(id) || sonnerToast(title, { id, ...opts }),
  };
}

function useToast() {
  return {
    toast,
    dismiss: (id?: string) => {
      if (id) {
        sonnerToast.dismiss(id);
      } else {
        sonnerToast.dismiss();
      }
    },
  };
}

export { useToast, toast };
