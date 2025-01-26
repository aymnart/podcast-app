"use client";

import * as React from "react";
import { useKBar } from "kbar";

import { Button } from "@/components/ui/button";
import { Command } from "@phosphor-icons/react";

export function KBarTrigger() {
  const { query } = useKBar();

  return (
    <Button
      variant="outline"
      className="w-full justify-start text-sm text-muted-foreground sm:w-40"
      onClick={() => query.toggle()}
    >
      <Command className="mr-2 h-4 w-4" />
      Command Menu
    </Button>
  );
}
