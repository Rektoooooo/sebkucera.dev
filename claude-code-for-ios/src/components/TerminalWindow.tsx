interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({ title = "terminal", children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`bg-bg-terminal rounded-lg overflow-hidden border border-white/5 ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-terminal border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-control-close" />
          <div className="w-3 h-3 rounded-full bg-control-minimize" />
          <div className="w-3 h-3 rounded-full bg-control-maximize" />
        </div>
        <span className="ml-2 text-text-muted text-sm font-mono">{title}</span>
      </div>
      {/* Content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
