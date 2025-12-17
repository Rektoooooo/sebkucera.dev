import { useRef, useState } from 'react';

export default function GlowCard({ children, className = '', glowColor = '#a855f7' }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-300 ${isHovering ? '-translate-y-1' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ position: 'relative' }}
    >
      {/* Border glow only - follows cursor */}
      {isHovering && (
        <>
          {/* Main glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}ff, ${glowColor}aa 40%, transparent 65%)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              padding: '2px',
              borderRadius: '1rem'
            }}
          />
          {/* Extra glow layer for more intensity */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}88, transparent 70%)`,
              borderRadius: '1rem',
              filter: 'blur(8px)'
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
