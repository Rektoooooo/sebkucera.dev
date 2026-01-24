interface SkillCardProps {
  name: string;
  description: string;
  downloadUrl: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function SkillCard({ name, description, downloadUrl, isExpanded, onToggle }: SkillCardProps) {
  const handleClick = () => {
    console.log('SkillCard clicked:', name, 'currently expanded:', isExpanded);
    onToggle();
  };

  return (
    <div className="bg-bg-terminal border border-white/5 rounded-lg overflow-hidden isolate">
      <div className="flex items-center justify-between p-3 gap-2">
        <div
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          className="flex items-center gap-2 flex-1 min-w-0 cursor-pointer select-none"
        >
          <span
            className={`text-text-muted text-xs flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
          >
            ▶
          </span>
          <span className="text-green-500 font-mono text-sm truncate">{name}</span>
        </div>
        <a
          href={downloadUrl}
          download
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0 px-3 py-1 bg-[rgb(217,145,120)] text-[rgb(10,10,10)] text-xs font-mono font-semibold rounded hover:opacity-90 transition-opacity"
        >
          Download
        </a>
      </div>

      {isExpanded && (
        <div className="px-3 pb-3">
          <div className="pl-5 border-l-2 border-white/10 ml-1">
            <p className="text-text-muted text-xs leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
