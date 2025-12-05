"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export function GiscusComments() {
  const { resolvedTheme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="babakamyljanovssw/my-blog"
      repoId="R_kgDONYt93g"
      category="Announcements"
      categoryId="DIC_kwDONYt93s4CzbIK"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
}
