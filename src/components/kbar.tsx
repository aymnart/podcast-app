"use client";

import * as React from "react";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box" as React.CSSProperties["boxSizing"],
  outline: "none",
  border: "none",
  background: "var(--background)",
  color: "var(--foreground)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "var(--background)",
  color: "var(--foreground)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "var(--shadow)",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase" as const,
  opacity: 0.5,
};

export function KBar() {
  const { setTheme } = useTheme();

  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home",
      perform: () => (window.location.pathname = "/"),
    },
    {
      id: "theme",
      name: "Change theme",
      shortcut: ["t"],
      keywords: "interface color dark light",
      section: "Preferences",
    },
    {
      id: "darkTheme",
      name: "Dark",
      shortcut: ["d"],
      keywords: "dark",
      parent: "theme",
      perform: () => setTheme("dark"),
    },
    {
      id: "lightTheme",
      name: "Light",
      shortcut: ["l"],
      keywords: "light",
      parent: "theme",
      perform: () => setTheme("light"),
    },
    {
      id: "systemTheme",
      name: "System",
      shortcut: ["s"],
      keywords: "system",
      parent: "theme",
      perform: () => setTheme("system"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-background/80 backdrop-blur-sm">
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <RenderResults actions={actions} />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
}

function RenderResults({ actions }: { actions: ResultItemProps["action"][] }) {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId ?? null}
          />
        )
      }
    />
  );
}

interface ResultItemProps {
  action: {
    id: string;
    name: string;
    shortcut?: string[];
    keywords?: string;
    section?: string | { name: string; priority: number };
    parent?: string;
    perform?: () => void;
    icon?: React.ReactNode;
    subtitle?: string;
  };
  active: boolean;
  currentRootActionId: string | null;
}

const ResultItem: React.FC<ResultItemProps> = ({
  action,
  active,
  currentRootActionId,
}) => {
  const ancestors = React.useMemo(() => {
    if (!currentRootActionId) return action.name;
    const ancestors = [];
    let currentParent = action.parent;
    while (currentParent) {
      ancestors.unshift(currentParent);
      currentParent = actions.find((a) => a.id === currentParent)?.parent;
    }
    return ancestors.join(" > ") + " > " + action.name;
  }, [action, currentRootActionId]);

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center justify-between px-4 py-2",
        active && "bg-accent text-accent-foreground"
      )}
    >
      <div className="flex items-center gap-2 text-sm">
        {action.icon && action.icon}
        <div className="flex flex-col">
          <div>{ancestors}</div>
          {action.subtitle && (
            <span className="text-xs text-muted-foreground">
              {action.subtitle}
            </span>
          )}
        </div>
      </div>
      {action.shortcut?.length ? (
        <div className="grid grid-flow-col gap-1">
          {action.shortcut.map((sc: string) => (
            <kbd
              key={sc}
              className="rounded bg-muted px-1.5 py-0.5 text-xs font-semibold text-muted-foreground"
            >
              {sc}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
};
