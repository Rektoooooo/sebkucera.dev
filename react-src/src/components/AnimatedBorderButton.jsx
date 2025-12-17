import { useEffect, useRef } from 'react';

export default function AnimatedBorderButton({ children, href, className = '' }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty('--mouse-x', `${x}px`);
      button.style.setProperty('--mouse-y', `${y}px`);
    };

    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`animated-border-button ${className}`}
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      }}
    >
      <span className="button-content">
        {children}
      </span>
    </a>
  );
}
