'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Product Designer at Figma',
    text: 'Habit Owl completely changed my morning routine. The streak feature keeps me so accountable - I haven\'t missed a day in 45 days!',
    streak: 45,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    color: 'var(--pink)',
  },
  {
    name: 'James Chen',
    role: 'iOS Developer',
    text: 'Finally an app that syncs with Apple Health seamlessly. Love tracking my water intake and seeing it update automatically.',
    streak: 30,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    color: 'var(--cyan)',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Fitness Coach',
    text: 'The owl is adorable and makes habit tracking actually fun! My clients love how easy it is to build consistent routines.',
    streak: 67,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    color: 'var(--purple)',
  },
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" style={{ padding: '120px 24px', position: 'relative' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '100px',
              fontSize: '13px',
              color: 'var(--pink)',
              marginBottom: '24px',
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            <span style={{ color: 'var(--white)' }}>Loved by </span>
            <span
              style={{
                background: 'linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              thousands
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            Join a growing community building better habits every day.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '64px',
                  fontWeight: 700,
                  color: t.color,
                  opacity: 0.1,
                  lineHeight: 1,
                }}
              >
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill={t.color}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--white)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: `2px solid ${t.color}`,
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>{t.name}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{t.role}</div>
                  </div>
                </div>
                <div
                  style={{
                    padding: '6px 12px',
                    background: 'rgba(251, 146, 60, 0.1)',
                    border: '1px solid rgba(251, 146, 60, 0.3)',
                    borderRadius: '100px',
                    fontSize: '13px',
                    color: '#fb923c',
                    fontWeight: 500,
                  }}
                >
                  🔥 {t.streak} days
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
