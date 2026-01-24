interface SkillCardProps {
  name: string;
  description: string;
  category: string;
  downloadUrl: string;
}

const categoryColors: Record<string, string> = {
  'Core': 'bg-orange/20 text-orange',
  'Architecture': 'bg-purple-500/20 text-purple-500',
  'UI': 'bg-blue-500/20 text-blue-500',
  'Data': 'bg-green-500/20 text-green-500',
  'Quality': 'bg-yellow-500/20 text-yellow-500',
  'Frameworks': 'bg-pink-500/20 text-pink-500',
  'Polish': 'bg-cyan-500/20 text-cyan-500',
  'Planning': 'bg-indigo-500/20 text-indigo-500',
  'Meta': 'bg-gray-500/20 text-gray-400',
};

export default function SkillCard({ name, description, category, downloadUrl }: SkillCardProps) {
  return (
    <div className="group relative bg-bg-terminal border border-white/5 rounded-lg p-3 hover:border-orange/30 transition-all cursor-default">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <span className="text-green-500 font-mono text-sm block truncate">{name}</span>
        </div>
        <span className={`flex-shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded ${categoryColors[category] || 'bg-white/10 text-text-muted'}`}>
          {category}
        </span>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute left-0 right-0 top-full mt-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="bg-bg-primary border border-white/10 rounded-lg p-3 shadow-xl mx-1">
          <p className="text-text-muted text-xs leading-relaxed mb-3">
            {description}
          </p>
          <a
            href={downloadUrl}
            download
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[rgb(217,145,120)] text-[rgb(10,10,10)] text-xs font-mono font-semibold rounded hover:opacity-90 transition-opacity pointer-events-auto"
          >
            <i className="bi bi-download"></i>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
