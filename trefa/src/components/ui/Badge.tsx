import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  planned: "bg-blue-500/20 text-blue-400",
  open: "bg-green-500/20 text-green-400",
  full: "bg-red-500/20 text-red-400",
  in_progress: "bg-yellow-500/20 text-yellow-400",
  completed: "bg-muted/20 text-muted",
};

const labels: Record<string, string> = {
  planned: "Plánovaný",
  open: "Otevřený",
  full: "Obsazený",
  in_progress: "Probíhá",
  completed: "Ukončený",
};

interface Props {
  status: string;
}

export default function Badge({ status }: Props) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[status] ?? "bg-muted/20 text-muted"
      )}
    >
      {labels[status] ?? status}
    </span>
  );
}
