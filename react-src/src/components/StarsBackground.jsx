import { useEffect, useRef } from 'react';

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Mouse move handler for parallax effect
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    // Initialize stars with depth layers
    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);

      for (let i = 0; i < numStars; i++) {
        stars.push({
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          x: 0,
          y: 0,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.005 + 0.001,
          direction: Math.random() > 0.5 ? 1 : -1,
          depth: Math.random() * 0.5 + 0.5 // Parallax depth factor
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Apply parallax effect based on mouse position and star depth
        star.x = star.baseX + mouseX * star.depth;
        star.y = star.baseY + mouseY * star.depth;

        // Twinkle effect
        star.opacity += star.twinkleSpeed * star.direction;
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.direction *= -1;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Add glow for larger stars
        if (star.radius > 1) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(167, 139, 250, 0.5)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 0,
        background: 'linear-gradient(to bottom, #000000, #0a0a0f, #000000)',
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    />
  );
}
