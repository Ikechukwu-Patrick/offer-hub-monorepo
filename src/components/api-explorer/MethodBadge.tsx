import { cn } from "@/lib/cn";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { StatusTone } from "@/components/ui/status-colors";
import type { HttpMethod } from "@/data/api-schema";

const METHOD_TONES: Record<HttpMethod, StatusTone> = {
  GET: "success",
  POST: "primary",
  PUT: "warning",
  PATCH: "primary",
  DELETE: "danger",
};

interface MethodBadgeProps {
  method: HttpMethod;
  className?: string;
}

export function MethodBadge({ method, className }: MethodBadgeProps) {
  return (
    <StatusBadge
      variant={METHOD_TONES[method]}
      className={cn("rounded-full px-2.5 font-mono shadow-none", className)}
    >
      {method}
    </StatusBadge>
  );
}
