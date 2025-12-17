import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const delayClass = delay > 0 ? `stagger-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`fade-in-up ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
