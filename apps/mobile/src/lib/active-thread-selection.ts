import type { ThreadSummary } from "codex-relay/api-schema";

export function activeThreadAfterRefresh({
  currentActiveThreadId,
  preferFirstThread = false,
  threads,
}: {
  currentActiveThreadId: string | undefined;
  preferFirstThread?: boolean;
  threads: ThreadSummary[];
}) {
  if (preferFirstThread && threads[0]) {
    return threads[0].id;
  }
  // History may be outside the first page, and a failed detail request is not a new selection.
  if (currentActiveThreadId) {
    return currentActiveThreadId;
  }

  return threads[0]?.id;
}
